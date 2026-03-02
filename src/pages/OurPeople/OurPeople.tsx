import { useEffect, useMemo, useState } from 'react';
import api from '../../api/axios';
import { FALLBACK_EMPLOYEE_SECTIONS } from '../../constants/employeeSections';

type Employee = {
  _id: string;
  serial?: number;
  name: string;
  number?: string;
  hall: 'main_hall' | 'chinese_hall';
  sectionId: string;
  sectionLabel: string;
};

type SectionGroup = {
  sectionId: string;
  sectionLabel: string;
  employees: Employee[];
};

const hallTitleBn = (hall: Employee['hall']) => (hall === 'chinese_hall' ? 'চাইনিজ হল' : 'মেইন হল');

const OurPeople = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const response = await api.get<{ employees: Employee[] }>('/employees');
        setEmployees(response.data.employees ?? []);
        setStatus('ready');
      } catch {
        setStatus('error');
        setErrorMessage('এই মুহূর্তে কর্মীদের তালিকা লোড করা যাচ্ছে না।');
      }
    };

    void loadEmployees();
  }, []);

  const grouped = useMemo(() => {
    const halls: Record<Employee['hall'], SectionGroup[]> = {
      main_hall: [],
      chinese_hall: [],
    };

    const sectionMap: Record<string, SectionGroup> = {};

    for (const employee of employees) {
      const key = `${employee.hall}::${employee.sectionId}`;
      if (!sectionMap[key]) {
        sectionMap[key] = {
          sectionId: employee.sectionId,
          sectionLabel: employee.sectionLabel,
          employees: [],
        };
        halls[employee.hall].push(sectionMap[key]);
      }
      sectionMap[key].employees.push(employee);
    }

    const sectionOrder = FALLBACK_EMPLOYEE_SECTIONS.reduce<Record<string, number>>((acc, section, index) => {
      acc[section.id] = index;
      return acc;
    }, {});

    for (const hall of Object.keys(halls) as Employee['hall'][]) {
      halls[hall] = halls[hall].sort((a, b) => {
        if (a.sectionId === 'management') {
          return -1;
        }
        if (b.sectionId === 'management') {
          return 1;
        }
        return (sectionOrder[a.sectionId] ?? 9999) - (sectionOrder[b.sectionId] ?? 9999);
      });
    }

    return halls;
  }, [employees]);

  const totalEmployees = employees.length;

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10">
      <header className="rounded-3xl border border-brand-dark/15 bg-gradient-to-r from-brand-light/60 via-white to-surface-section p-6">
        <p className="text-sm font-semibold tracking-wide text-accent">আমাদের মানুষ</p>
        <h1 className="mt-2 text-3xl font-bold text-text-primary">আলিফ রেস্টুরেন্ট টিম</h1>
        <p className="mt-3 max-w-2xl text-sm text-text-secondary">
          রান্নাঘর, সার্ভিস, অপারেশনস এবং হল টিম মিলে প্রতিদিন আলিফের সেরা অভিজ্ঞতা নিশ্চিত করে।
        </p>
        <div className="mt-5 inline-flex rounded-full border border-brand-dark/20 bg-white px-4 py-2 text-sm font-semibold text-text-primary">
          মোট টিম মেম্বার: {totalEmployees}
        </div>
      </header>

      {status === 'loading' && (
        <div className="mt-6 rounded-2xl border border-brand-dark/20 bg-white px-5 py-4 text-sm text-text-secondary">
          কর্মীদের তালিকা লোড হচ্ছে...
        </div>
      )}

      {status === 'error' && (
        <div className="mt-6 rounded-2xl border border-red-300 bg-red-50 px-5 py-4 text-sm text-red-700">
          {errorMessage}
        </div>
      )}

      {status === 'ready' && (
        <div className="mt-8 space-y-10">
          <section className="rounded-3xl border border-brand-dark/15 bg-white p-6 md:p-8">
            <p className="text-base font-semibold tracking-wide text-accent">Owner</p>
            <div className="mt-5 flex flex-col items-center text-center">
              <img
                src="https://res.cloudinary.com/duaysox2a/image/upload/v1772451488/WhatsApp_Image_2026-03-02_at_17.30.06_s34tze.jpg"
                alt="Syed Mahfuzur Rahman"
                className="h-52 w-52 rounded-3xl object-cover md:h-64 md:w-64"
              />
              <div className="mt-5">
                <h2 className="text-3xl font-bold text-text-primary md:text-4xl">Syed Mahfuzur Rahman</h2>
                <p className="mt-2 text-lg text-text-secondary md:text-xl">Founder of Alif Restaurant</p>
              </div>
            </div>
          </section>

          {(Object.keys(grouped) as Employee['hall'][]).map((hall) => (
            <section key={hall} className="space-y-4">
              <div className="flex items-end justify-between border-b border-brand-dark/15 pb-3">
                <h2 className="text-2xl font-bold text-text-primary">{hallTitleBn(hall)}</h2>
                <p className="text-sm text-text-secondary">
                  {grouped[hall].reduce((count, section) => count + section.employees.length, 0)} জন
                </p>
              </div>

              {grouped[hall].length === 0 && (
                <div className="rounded-2xl border border-brand-dark/15 bg-white px-5 py-4 text-sm text-text-secondary">
                  এই হলে এখনো কোনো কর্মী পাওয়া যায়নি।
                </div>
              )}

              <div className="grid gap-4 md:grid-cols-2">
                {grouped[hall].map((section) => (
                  <article key={`${hall}-${section.sectionId}`} className="rounded-2xl border border-brand-dark/15 bg-white">
                    <div className="rounded-t-2xl border-b border-brand-dark/10 bg-surface-section px-4 py-3">
                      <h3 className="text-base font-semibold text-text-primary">{section.sectionLabel}</h3>
                    </div>

                    <div className="max-h-72 overflow-y-auto px-4 py-3">
                      <ul className="space-y-2">
                        {section.employees.map((employee) => (
                          <li
                            key={employee._id}
                            className="rounded-xl border border-brand-dark/10 bg-white px-3 py-2"
                          >
                            <p className="font-semibold text-text-primary">{employee.name}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </section>
  );
};

export default OurPeople;
