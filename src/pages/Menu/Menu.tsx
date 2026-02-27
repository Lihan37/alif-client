import { useState } from 'react';

type MenuItem = {
  name: string;
  unit: string;
  price: string;
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

const menuSections: MenuSection[] = [
  {
    title: 'আলিফ স্পেশাল খিচুড়ি',
    items: [
      { name: 'বিফ/চিকেন ভুনা খিচুড়ি', unit: 'প্রতি হাফ', price: '২৭০/-' },
      {
        name: 'আলিফ স্পেশাল ভুনা খিচুড়ি (বিফ ও চিকেন)',
        unit: 'প্রতি হাফ',
        price: '৩২০/-',
      },
    ],
  },
  {
    title: 'স্পেশাল বিরিয়ানি আইটেম',
    items: [
      { name: 'চিকেন বিরিয়ানি (সোনালী)', unit: 'প্রতি হাফ', price: '২৩০/-' },
      { name: 'কাচ্চি বিরিয়ানি', unit: 'প্রতি হাফ', price: '২৫০/-' },
      { name: 'হায়দরাবাদি মাটন বিরিয়ানি', unit: 'প্রতি হাফ', price: '৩৩০/-' },
      { name: 'হায়দরাবাদি চিকেন বিরিয়ানি', unit: 'প্রতি হাফ', price: '৩০০/-' },
      { name: 'বিফ আকনি বিরিয়ানি', unit: 'প্রতি পিস', price: '২৬০/-' },
      { name: 'ওরশ বিরিয়ানি বিফ', unit: 'প্রতি হাফ', price: '২৪০/-' },
      { name: 'মুশাকেল বিরিয়ানি', unit: '২ জন', price: '৮৫০/-' },
      { name: 'মোরগ মহারাজা বিরিয়ানি', unit: '৪ জন', price: '১৪০০/-' },
    ],
  },
  {
    title: 'সকালের নাস্তার আইটেম',
    items: [
      { name: 'চিকেন সূপ', unit: 'প্রতি হাফ', price: '১২০/-' },
      { name: 'খাসির পায়া', unit: 'প্রতি পিস', price: '৮০/-' },
      { name: 'গরুর নেহারি', unit: 'প্রতি হাফ', price: '২০০/-' },
      { name: 'ডিম পোচ', unit: 'প্রতি পিস', price: '২৫/-' },
      { name: 'ডিম অমলেট', unit: 'প্রতি পিস', price: '৩০/-' },
      { name: 'প্লেইন পরটা', unit: 'প্রতি পিস', price: '১৫/-' },
      { name: 'প্লেইন নান', unit: 'প্রতি পিস', price: '১৫/-' },
      { name: 'মুগডাল', unit: 'প্রতি হাফ', price: '৫০/-' },
      { name: 'ভাজি', unit: 'প্রতি হাফ', price: '৫০/-' },
      { name: 'সমুচা', unit: 'প্রতি পিস', price: '১৫/-' },
      { name: 'চিকেন সমুচা', unit: 'প্রতি পিস', price: '২৫/-' },
      { name: 'সিঙ্গারা', unit: 'প্রতি পিস', price: '১৫/-' },
      { name: 'সমুচা', unit: 'প্রতি পিস', price: '১৫/-' },
      { name: 'চিকেন সমুচা', unit: 'প্রতি পিস', price: '২৫/-' },
      { name: 'সিঙ্গারা', unit: 'প্রতি পিস', price: '১৫/-' },
    ],
  },
  {
    title: 'বিকালের নাস্তার আইটেম',
    items: [
      { name: 'চিকেন গ্রিল', unit: 'প্রতি কোয়ার্টার', price: '১২০/-' },
      { name: 'চিকেন টিকা', unit: 'প্রতি পিস', price: '১২০/-' },
      { name: 'চিকেন চাপ', unit: 'প্রতি পিস', price: '১৮০/-' },
      { name: 'চিকেন শর্মা', unit: 'প্রতি পিস', price: '১০০/-' },
      { name: 'বিফ শিক কাবাব', unit: 'প্রতি শিক', price: '২০০/-' },
      { name: 'তন্দুরি চিকেন', unit: 'প্রতি পিস', price: '১৩০/-' },
      { name: 'রেশমি কাবাব', unit: 'প্রতি পিস', price: '১৭০/-' },
      { name: 'হায়দরাবাদি কাবাব', unit: 'প্রতি পিস', price: '১৭০/-' },
      { name: 'মুগডাল', unit: 'প্রতি হাফ', price: '৫০/-' },
      { name: 'ভাজি', unit: 'প্রতি হাফ', price: '৫০/-' },
      { name: 'মেজবানি চনার ডাল', unit: 'প্রতি হাফ', price: '৭০/-' },
      { name: 'চাইনিজ সবজি', unit: 'প্রতি হাফ', price: '৫০/-' },
      { name: 'পরটা', unit: 'প্রতি পিস', price: '১৫/-' },
      { name: 'স্পেশাল পরটা', unit: 'প্রতি পিস', price: '৩০/-' },
      { name: 'প্লেইন নান', unit: 'প্রতি পিস', price: '১৫/-' },
      { name: 'স্পেশাল নান', unit: 'প্রতি পিস', price: '৩৫/-' },
      { name: 'বাটার নান', unit: 'প্রতি পিস', price: '৪৫/-' },
      { name: 'চা', unit: 'প্রতি কাপ', price: '২০/-' },
      { name: 'স্পেশাল কফি', unit: 'প্রতি কাপ', price: '১০০/-' },
    ],
  },
  {
    title: 'ডেজার্ট আইটেম',
    items: [
      { name: 'ফিরনি', unit: 'প্রতি কাপ', price: '৪০/-' },
      { name: 'মিষ্টি দই', unit: 'প্রতি কাপ', price: '৪০/-' },
      { name: 'মিক্স ফ্রুট', unit: 'প্রতি গ্লাস', price: '১০০/-' },
      { name: 'পুডিং', unit: 'প্রতি পিস', price: '৮০/-' },
      { name: 'ফালুদা', unit: 'প্রতি গ্লাস', price: '১৫০/-' },
      { name: 'লাচ্ছি', unit: 'প্রতি গ্লাস', price: '১০০/-' },
    ],
  },
  {
    title: 'জুস আইটেম',
    items: [
      { name: 'বোরহানি', unit: 'প্রতি গ্লাস', price: '৬০/-' },
      { name: 'অরেঞ্জ জুস', unit: 'প্রতি গ্লাস', price: '১৫০/-' },
      { name: 'ম্যাঙ্গো জুস', unit: 'প্রতি গ্লাস', price: '১৫০/-' },
      { name: 'মিন্ট লেমন জুস', unit: 'প্রতি গ্লাস', price: '১০০/-' },
      { name: 'মিক্স শেক', unit: 'প্রতি গ্লাস', price: '১৫০/-' },
      { name: 'পেঁপে জুস', unit: 'প্রতি গ্লাস', price: '১২০/-' },
      { name: 'জিরা পানি', unit: 'প্রতি গ্লাস', price: '৭০/-' },
    ],
  },
  {
    title: 'ভাত ও ডাল',
    items: [
      { name: 'আতপ/কাটারির রাইস', unit: 'প্রতি জন', price: '৪০/-' },
      { name: 'পোলাও রাইস', unit: 'প্রতি প্লেট', price: '১০০/-' },
      { name: 'ডাল', unit: 'প্রতি হাফ', price: '২০/-' },
    ],
  },
  {
    title: 'স্পেশাল শাক/সবজি/ভর্তা আইটেম',
    items: [
      { name: 'শিম শাক', unit: 'প্রতি হাফ', price: '১৪০/-' },
      { name: 'শাক', unit: 'প্রতি হাফ', price: '৫০/-' },
      { name: 'মিশ্র সবজি/লাউ চিংড়ি', unit: 'প্রতি হাফ', price: '৭০/-' },
      { name: 'করলা/স্পেশাল ভাজি', unit: 'প্রতি হাফ', price: '৬০/-' },
      { name: 'শিম/পেঁপে/বেগুন ভর্তা', unit: 'প্রতি হাফ', price: '৫০/-' },
      { name: 'টমেটো ভর্তা', unit: 'প্রতি হাফ', price: '৬০/-' },
      { name: 'মাছ ভর্তা', unit: 'প্রতি হাফ', price: '৭০/-' },
      { name: 'লইট্টা শুঁটকি ভর্তা', unit: 'প্রতি হাফ', price: '৮০/-' },
      { name: 'মিশ্র সালাদ', unit: 'প্রতি হাফ', price: '৮০/-' },
      { name: 'বালাচাউ শুঁটকি', unit: 'প্রতি হাফ', price: '১২০/-' },
    ],
  },
  {
    title: 'স্পেশাল মাছ আইটেম',
    items: [
      { name: 'কোরাল মাছ', unit: 'প্রতি পিস', price: '২০০/-' },
      { name: 'রুই মাছ', unit: 'প্রতি পিস', price: '১৬০/-' },
      { name: 'রূপচাঁদা কারি (ছোট পিস)', unit: 'প্রতি পিস', price: '২৫০/-' },
      { name: 'রূপচাঁদা ফ্রাই (ছোট পিস)', unit: 'প্রতি পিস', price: '৩০০/-' },
      { name: 'লইট্টা ফ্রাই', unit: 'প্রতি হাফ', price: '২০০/-' },
      { name: 'লইট্টা কারি', unit: 'প্রতি হাফ', price: '১৫০/-' },
      { name: 'পাবদা মাছ', unit: 'প্রতি হাফ', price: '১৭০/-' },
      { name: 'কটকি মাছ/মালিয়া ভুনা', unit: 'প্রতি হাফ', price: '১৬০/-' },
      { name: 'চিংড়ি মাছ', unit: 'প্রতি হাফ', price: '২৫০/-' },
      { name: 'বোয়াল মাছ', unit: 'প্রতি হাফ', price: '৩০০/-' },
      { name: 'শিং মাছ', unit: 'প্রতি হাফ', price: '১৭০/-' },
    ],
  },
  {
    title: 'আলিফ স্পেশাল মেজবানী',
    items: [
      { name: 'মেজবানি প্যাকেজ', unit: 'প্রতি জন', price: '৩৫০/-' },
      { name: 'মেজবানি মাংস', unit: 'প্রতি হাফ', price: '২৫০/-' },
      { name: 'মেজবানি চনার ডাল', unit: 'প্রতি হাফ', price: '৯০/-' },
    ],
  },
  {
    title: 'স্পেশাল মাংস আইটেম',
    items: [
      { name: 'গরু কালা ভুনা', unit: 'প্রতি হাফ', price: '২৫০/-' },
      { name: 'গরু রসা ভুনা', unit: 'প্রতি হাফ', price: '২৮০/-' },
      { name: 'ডাল খাশি (২ পিস)', unit: 'প্রতি হাফ', price: '২৮০/-' },
      { name: 'চিকেন ঝাল ফ্রাই', unit: 'প্রতি হাফ', price: '২৫০/-' },
      { name: 'চিকেন রেজালা (সোনালী)', unit: 'প্রতি হাফ', price: '১৬০/-' },
      { name: 'হাঁসের মাংস', unit: 'প্রতি হাফ', price: '২৮০/-' },
    ],
  },
];

const Menu = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const isAllTab = activeTab === 'all';
  const visibleSections = isAllTab
    ? menuSections
    : menuSections.filter((section) => section.title === activeTab);

  return (
    <div className="min-h-screen bg-surface-main px-6 py-12 text-text-primary">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 font-bn">
        <header className="rounded-3xl border border-brand-dark/20 bg-white px-8 py-10 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)]">
          <p className="text-xs font-semibold uppercase tracking-[0.06em] text-text-muted">
            বিসমিল্লাহির রাহমানির রাহিম
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-3xl font-bold text-text-primary md:text-4xl">
              আলিফ রেস্টুরেন্ট
            </h1>
            <span className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-text-inverse">
              ২৪ ঘন্টা খোলা
            </span>
          </div>
          <p className="mt-4 text-sm text-text-secondary">
            ডেওয়ানহাট, ৩০৭, শেখ মুজিব রোড, চট্টগ্রাম
          </p>
          <p className="mt-2 text-sm text-text-secondary">
            বাংলা হল মেনু স্থিতি ও নির্ধারিত দাম ১৫ নভেম্বর ২০২৪ ইং হতে নির্ধারিত
          </p>
        </header>

        <section className="rounded-3xl border border-brand-dark/20 bg-white p-4 shadow-[0_20px_50px_-40px_rgba(0,0,0,0.35)]">
          <div className="flex gap-2 overflow-x-auto pb-1">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeTab === 'all'
                  ? 'bg-accent text-text-inverse'
                  : 'bg-brand-light text-text-primary hover:bg-brand'
              }`}
            >
              All
            </button>
            {menuSections.map((section) => (
              <button
                key={section.title}
                type="button"
                onClick={() => setActiveTab(section.title)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeTab === section.title
                    ? 'bg-accent text-text-inverse'
                    : 'bg-brand-light text-text-primary hover:bg-brand'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </section>

        <section className={isAllTab ? 'grid gap-6 md:grid-cols-2' : 'mx-auto w-full max-w-4xl'}>
          {visibleSections.map((section) => (
            <div
              key={section.title}
              className={`rounded-3xl border border-brand-dark/20 bg-white shadow-[0_20px_60px_-40px_rgba(0,0,0,0.3)] ${
                isAllTab ? 'p-6' : 'p-8 md:p-10'
              }`}
            >
              <h2
                className={`font-bn font-semibold tracking-normal text-accent ${isAllTab ? 'text-xl' : 'text-center text-2xl md:text-3xl'}`}
              >
                {section.title}
              </h2>

              <div className={`mt-4 space-y-2 text-text-secondary ${isAllTab ? 'text-sm' : 'text-base md:text-lg'} `}>
                <div
                  className={`grid items-center gap-3 border-b border-brand-dark/20 pb-2 font-semibold uppercase tracking-[0.04em] text-text-muted ${
                    isAllTab
                      ? 'grid-cols-[1fr_110px_80px] text-xs'
                      : 'grid-cols-3 text-sm md:text-base'
                  }`}
                >
                  <span className={isAllTab ? '' : 'text-center'}>Item</span>
                  <span className={isAllTab ? 'text-right' : 'text-center'}>Unit</span>
                  <span className={isAllTab ? 'text-right' : 'text-center'}>Price</span>
                </div>

                {section.items.map((item, index) => (
                  <div
                    key={`${item.name}-${item.price}-${index}`}
                    className={`grid items-start gap-3 border-b border-brand-dark/10 py-2 last:border-b-0 ${
                      isAllTab
                        ? 'grid-cols-[1fr_110px_80px]'
                        : 'grid-cols-3 py-3'
                    }`}
                  >
                    <span className={`text-text-primary ${isAllTab ? '' : 'text-center font-medium'}`}>
                      {item.name}
                    </span>
                    <span className={isAllTab ? 'text-right' : 'text-center'}>{item.unit}</span>
                    <span className={`text-text-primary ${isAllTab ? 'text-right' : 'text-center font-semibold'}`}>
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Menu;



