import { useEffect, useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/axios';
import { FALLBACK_EMPLOYEE_SECTIONS } from '../../constants/employeeSections';
import type { EmployeeSection } from '../../constants/employeeSections';

type StoredAuth = {
  accessToken: string;
  user: {
    sub: string;
    name: string;
    number: string;
    role: 'admin' | 'user';
  };
};

type AdminUser = {
  _id: string;
  name: string;
  number: string;
  role: 'admin' | 'user';
  createdAt?: string;
};

type AdminEmployee = {
  _id: string;
  serial?: number;
  name: string;
  number?: string;
  hall: 'main_hall' | 'chinese_hall';
  sectionId: string;
  sectionLabel: string;
  createdAt?: string;
};

type AddEmployeeFormState = {
  serial: string;
  name: string;
  number: string;
  sectionId: string;
};

const getErrorMessage = (error: unknown): string => {
  const fallback = 'Request failed. Please try again.';
  if (typeof error !== 'object' || error === null) {
    return fallback;
  }

  const maybeResponse = error as { response?: { data?: { message?: string } } };
  return maybeResponse.response?.data?.message ?? fallback;
};

const AdminDashboard = () => {
  const [status, setStatus] = useState<'loading' | 'allowed' | 'denied'>('loading');
  const [message, setMessage] = useState('Checking admin access...');
  const [accessToken, setAccessToken] = useState('');
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [employees, setEmployees] = useState<AdminEmployee[]>([]);
  const [sections, setSections] = useState<EmployeeSection[]>(FALLBACK_EMPLOYEE_SECTIONS);
  const [activeTab, setActiveTab] = useState<'users' | 'addEmployees'>('users');
  const [isSavingEmployee, setIsSavingEmployee] = useState(false);
  const [employeeFormMessage, setEmployeeFormMessage] = useState('');
  const [employeeFormError, setEmployeeFormError] = useState('');
  const [employeeForm, setEmployeeForm] = useState<AddEmployeeFormState>({
    serial: '',
    name: '',
    number: '',
    sectionId: '',
  });

  const totalUsers = users.length;
  const totalAdmins = users.filter((user) => user.role === 'admin').length;
  const totalMembers = users.filter((user) => user.role === 'user').length;
  const totalEmployees = employees.length;

  const selectedSection = useMemo(
    () => sections.find((section) => section.id === employeeForm.sectionId),
    [employeeForm.sectionId, sections]
  );

  const mainHallSections = sections.filter((section) => section.hall === 'main_hall');
  const chineseHallSections = sections.filter((section) => section.hall === 'chinese_hall');

  useEffect(() => {
    const checkAccess = async () => {
      const raw = localStorage.getItem('alifAuth');
      if (!raw) {
        setStatus('denied');
        setMessage('Please login first.');
        return;
      }

      let parsed: StoredAuth | null = null;
      try {
        parsed = JSON.parse(raw) as StoredAuth;
      } catch {
        setStatus('denied');
        setMessage('Invalid session data. Please login again.');
        return;
      }

      if (parsed.user.role !== 'admin') {
        setStatus('denied');
        setMessage('Only admin account can access this dashboard.');
        return;
      }

      try {
        const headers = { Authorization: `Bearer ${parsed.accessToken}` };
        await api.get('/admin-only', { headers });

        const [usersResponse, employeesResponse] = await Promise.all([
          api.get<{ users: AdminUser[] }>('/admin/users', { headers }),
          api.get<{ employees: AdminEmployee[] }>('/admin/employees', { headers }),
        ]);

        setUsers(usersResponse.data.users ?? []);
        setEmployees(employeesResponse.data.employees ?? []);
        setAccessToken(parsed.accessToken);

        try {
          const sectionsResponse = await api.get<{ sections: EmployeeSection[] }>('/admin/employee-sections', {
            headers,
          });
          if (sectionsResponse.data.sections?.length) {
            setSections(sectionsResponse.data.sections);
          }
        } catch {
          setSections(FALLBACK_EMPLOYEE_SECTIONS);
        }

        setStatus('allowed');
        setMessage('Welcome to Admin Dashboard');
      } catch {
        setStatus('denied');
        setMessage('Admin session invalid or expired. Please login again.');
      }
    };

    void checkAccess();
  }, []);

  const handleAddEmployee = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmployeeFormError('');
    setEmployeeFormMessage('');

    if (!employeeForm.name.trim() || !employeeForm.sectionId) {
      setEmployeeFormError('Name and section are required.');
      return;
    }

    if (!accessToken) {
      setEmployeeFormError('Missing admin token. Please login again.');
      return;
    }

    setIsSavingEmployee(true);

    try {
      const payload = {
        serial: employeeForm.serial.trim() ? Number(employeeForm.serial.trim()) : undefined,
        name: employeeForm.name.trim(),
        number: employeeForm.number.trim() || undefined,
        sectionId: employeeForm.sectionId,
      };

      const response = await api.post<{ employee: AdminEmployee }>('/admin/employees', payload, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const employeesResponse = await api.get<{ employees: AdminEmployee[] }>('/admin/employees', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setEmployees(employeesResponse.data.employees ?? []);
      setEmployeeForm({
        serial: '',
        name: '',
        number: '',
        sectionId: '',
      });
      setEmployeeFormMessage(`Employee saved to database: ${response.data.employee.name}`);
    } catch (error: unknown) {
      setEmployeeFormError(getErrorMessage(error));
    } finally {
      setIsSavingEmployee(false);
    }
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10">
      {status === 'loading' && (
        <div className="rounded-2xl border border-brand-dark/20 bg-white px-5 py-4 text-sm font-semibold text-text-secondary">
          {message}
        </div>
      )}

      {status === 'allowed' && (
        <div className="space-y-8">
          <div className="rounded-2xl border border-brand-dark/15 bg-white px-6 py-6">
            <h1 className="text-3xl font-bold text-text-primary">Admin Dashboard</h1>
            <p className="mt-2 text-text-secondary">{message}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-2xl border border-brand-dark/15 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary">Total Users</p>
              <p className="mt-3 text-3xl font-bold text-text-primary">{totalUsers}</p>
            </article>
            <article className="rounded-2xl border border-brand-dark/15 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary">Admins</p>
              <p className="mt-3 text-3xl font-bold text-text-primary">{totalAdmins}</p>
            </article>
            <article className="rounded-2xl border border-brand-dark/15 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary">Members</p>
              <p className="mt-3 text-3xl font-bold text-text-primary">{totalMembers}</p>
            </article>
            <article className="rounded-2xl border border-brand-dark/15 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary">Employees</p>
              <p className="mt-3 text-3xl font-bold text-text-primary">{totalEmployees}</p>
            </article>
          </div>

          <div className="rounded-2xl border border-brand-dark/15 bg-white">
            <div className="flex flex-wrap gap-3 border-b border-brand-dark/10 px-5 py-4">
              <button
                type="button"
                onClick={() => setActiveTab('users')}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  activeTab === 'users'
                    ? 'bg-accent text-text-inverse'
                    : 'border border-brand-dark/20 bg-white text-text-secondary hover:border-accent hover:text-accent'
                }`}
              >
                Users
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('addEmployees')}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  activeTab === 'addEmployees'
                    ? 'bg-accent text-text-inverse'
                    : 'border border-brand-dark/20 bg-white text-text-secondary hover:border-accent hover:text-accent'
                }`}
              >
                Add Employees
              </button>
            </div>

            {activeTab === 'users' && (
              <div className="overflow-x-auto px-5 py-5">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-surface-section text-text-primary">
                    <tr>
                      <th className="rounded-l-xl px-4 py-3 font-semibold">Name</th>
                      <th className="px-4 py-3 font-semibold">Number</th>
                      <th className="px-4 py-3 font-semibold">Role</th>
                      <th className="rounded-r-xl px-4 py-3 font-semibold">Joined</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user._id} className="border-b border-brand-dark/10 last:border-b-0">
                        <td className="px-4 py-3">{user.name}</td>
                        <td className="px-4 py-3">{user.number}</td>
                        <td className="px-4 py-3 capitalize">{user.role}</td>
                        <td className="px-4 py-3">
                          {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : '-'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {users.length === 0 && <p className="pt-4 text-sm text-text-secondary">No users found.</p>}
              </div>
            )}

            {activeTab === 'addEmployees' && (
              <div className="space-y-6 px-5 py-5">
                <form className="grid gap-4 rounded-2xl border border-brand-dark/10 p-4 md:grid-cols-2" onSubmit={handleAddEmployee}>
                  <div>
                    <label htmlFor="serial" className="mb-1 block text-sm font-semibold text-text-primary">
                      Serial (optional)
                    </label>
                    <input
                      id="serial"
                      type="number"
                      min={1}
                      value={employeeForm.serial}
                      onChange={(event) => setEmployeeForm((prev) => ({ ...prev, serial: event.target.value }))}
                      className="w-full rounded-xl border border-brand-dark/30 px-4 py-2.5 outline-none transition focus:border-accent"
                    />
                  </div>

                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-semibold text-text-primary">
                      Employee Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={employeeForm.name}
                      onChange={(event) => setEmployeeForm((prev) => ({ ...prev, name: event.target.value }))}
                      className="w-full rounded-xl border border-brand-dark/30 px-4 py-2.5 outline-none transition focus:border-accent"
                    />
                  </div>

                  <div>
                    <label htmlFor="number" className="mb-1 block text-sm font-semibold text-text-primary">
                      Phone Number (optional)
                    </label>
                    <input
                      id="number"
                      type="tel"
                      value={employeeForm.number}
                      onChange={(event) => setEmployeeForm((prev) => ({ ...prev, number: event.target.value }))}
                      placeholder="01XXXXXXXXX"
                      className="w-full rounded-xl border border-brand-dark/30 px-4 py-2.5 outline-none transition focus:border-accent"
                    />
                  </div>

                  <div>
                    <label htmlFor="section" className="mb-1 block text-sm font-semibold text-text-primary">
                      Section
                    </label>
                    <select
                      id="section"
                      value={employeeForm.sectionId}
                      onChange={(event) => setEmployeeForm((prev) => ({ ...prev, sectionId: event.target.value }))}
                      className="w-full rounded-xl border border-brand-dark/30 bg-white px-4 py-2.5 outline-none transition focus:border-accent"
                    >
                      <option value="">Select section</option>
                      <optgroup label="Main Hall">
                        {mainHallSections.map((section) => (
                          <option key={section.id} value={section.id}>
                            {section.label}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Chinese Hall">
                        {chineseHallSections.map((section) => (
                          <option key={section.id} value={section.id}>
                            {section.label}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <p className="mb-1 block text-sm font-semibold text-text-primary">Hall</p>
                    <div className="rounded-xl border border-brand-dark/20 bg-surface-section px-4 py-2.5 text-sm text-text-secondary">
                      {selectedSection?.hall === 'chinese_hall' ? 'Chinese Hall' : selectedSection ? 'Main Hall' : '-'}
                    </div>
                  </div>

                  <div className="flex items-end">
                    <button
                      type="submit"
                      disabled={isSavingEmployee}
                      className="w-full rounded-full bg-accent px-6 py-2.5 text-base font-semibold text-text-inverse transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSavingEmployee ? 'Saving...' : 'Add Employee'}
                    </button>
                  </div>
                </form>

                {employeeFormMessage && (
                  <div className="rounded-xl border border-green-300 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
                    {employeeFormMessage}
                  </div>
                )}
                {employeeFormError && (
                  <div className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                    {employeeFormError}
                  </div>
                )}

                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm">
                    <thead className="bg-surface-section text-text-primary">
                      <tr>
                        <th className="rounded-l-xl px-4 py-3 font-semibold">Serial</th>
                        <th className="px-4 py-3 font-semibold">Name</th>
                        <th className="px-4 py-3 font-semibold">Phone</th>
                        <th className="px-4 py-3 font-semibold">Section</th>
                        <th className="rounded-r-xl px-4 py-3 font-semibold">Hall</th>
                      </tr>
                    </thead>
                    <tbody>
                      {employees.map((employee) => (
                        <tr key={employee._id} className="border-b border-brand-dark/10 last:border-b-0">
                          <td className="px-4 py-3">{employee.serial ?? '-'}</td>
                          <td className="px-4 py-3">{employee.name}</td>
                          <td className="px-4 py-3">{employee.number ?? '-'}</td>
                          <td className="px-4 py-3">{employee.sectionLabel}</td>
                          <td className="px-4 py-3">{employee.hall === 'chinese_hall' ? 'Chinese Hall' : 'Main Hall'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {employees.length === 0 && (
                    <p className="pt-4 text-sm text-text-secondary">No employees added yet.</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {status === 'denied' && (
        <div className="rounded-2xl border border-red-300 bg-red-50 px-5 py-5">
          <h1 className="text-xl font-bold text-red-700">Access Denied</h1>
          <p className="mt-2 text-sm text-red-700">{message}</p>
          <div className="mt-4">
            <Link to="/login" className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-text-inverse">
              Go to Login
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default AdminDashboard;
