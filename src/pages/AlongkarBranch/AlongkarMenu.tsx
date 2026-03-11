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
    title: 'Chinese - Rice',
    items: [
      { name: 'Alif Special Fried Rice', unit: '-', price: '500/-' },
      { name: 'Massalla Fried Rice', unit: '-', price: '450/-' },
      { name: 'Chicken Fried Rice', unit: '-', price: '360/-' },
      { name: 'Egg Fried Rice', unit: '-', price: '300/-' },
      { name: 'Vegetable Garlic Fried Rice', unit: '-', price: '300/-' },
      { name: 'Mixed Fried Rice', unit: '-', price: '380/-' },
    ],
  },
  {
    title: 'Chinese - Chicken',
    items: [
      { name: 'Alif Special Fried Chicken (Deshi)', unit: '-', price: '440/-' },
      { name: 'Chicken Fried Spring (Fram)', unit: '-', price: '380/-' },
      { name: 'Chicken Massalla', unit: '-', price: '460/-' },
      { name: 'Chicken With Chili', unit: '-', price: '380/-' },
      { name: 'Chicken With Vegetable', unit: '-', price: '190/-' },
      { name: 'Chicken With Garlic', unit: '-', price: '360/-' },
      { name: 'Chicken Prawn Vegetable', unit: '-', price: '190/-' },
    ],
  },
  {
    title: 'Chinese - Prawn/Beef',
    items: [
      { name: 'Jam Bow Prawn Massalla', unit: '-', price: '440/-' },
      { name: 'Prawn Massalla', unit: '-', price: '450/-' },
      { name: 'Prawn With Green Chili', unit: '-', price: '420/-' },
      { name: 'Prawn With Vegetable', unit: '-', price: '190/-' },
      { name: 'Sweet & Sour Prawn', unit: '-', price: '380/-' },
      { name: 'King Prawn', unit: '-', price: '500/- / 700/-' },
      { name: 'Beef Massalla', unit: '-', price: '480/- / 240/-' },
      { name: 'Beef Chili', unit: '-', price: '480/-' },
      { name: 'Beef Onion', unit: '-', price: '440/-' },
      { name: 'Prawn Garlic', unit: '-', price: '460/-' },
    ],
  },
  {
    title: 'Chinese - Appetizer',
    items: [
      { name: 'Spring Roll', unit: '-', price: '280/-' },
      { name: 'Prawn on Toast', unit: '-', price: '320/-' },
      { name: 'Fried Wonton', unit: '-', price: '240/-' },
      { name: 'Fried Prawn', unit: '-', price: '460/-' },
      { name: 'Mixed Tempura', unit: '-', price: '450/-' },
      { name: 'French Fry', unit: '-', price: '190/-' },
      { name: 'Chicken Prawn Cashew Nut (Sallad)', unit: '-', price: '450/-' },
      { name: 'Fruit (Sallad)', unit: '-', price: '440/-' },
    ],
  },
  {
    title: 'Chinese - Soup',
    items: [
      { name: 'Special Thai Soup', unit: '-', price: '380/-' },
      { name: 'Special Thai Clear Soup', unit: '-', price: '400/-' },
      { name: 'Alif Special Soup', unit: '-', price: '400/-' },
      { name: 'Chicken Vegetable Clear Soup', unit: '-', price: '300/-' },
      { name: 'Special Hot & Sour Soup', unit: '-', price: '400/-' },
      { name: 'Chicken Corn Soup', unit: '-', price: '340/-' },
      { name: 'Tomato With Garlic Soup', unit: '-', price: '340/-' },
      { name: 'Vegetable Noodles Soup', unit: '-', price: '350/-' },
    ],
  },
  {
    title: 'Chinese - Noodles',
    items: [
      { name: 'Mixed Noodles (Chicken/Prawn)', unit: '-', price: '320/-' },
      { name: 'Pag Thai Noodles', unit: '-', price: '360/-' },
      { name: 'American Chop Suey', unit: '-', price: '400/-' },
      { name: 'Rice Noodles (Chicken Prawn with Cashew Nut)', unit: '-', price: '360/-' },
      { name: 'Pasta (Chicken Prawn)', unit: '-', price: '300/-' },
    ],
  },
  {
    title: 'Dessert / Drinks',
    items: [
      { name: 'Fruit Custard', unit: '-', price: '90/-' },
      { name: 'Pudding', unit: '-', price: '70/-' },
      { name: 'Lacchi', unit: '-', price: '80/-' },
      { name: 'Dodhi', unit: '-', price: '35/-' },
      { name: 'Firni', unit: '-', price: '40/-' },
      { name: 'Espresso Coffee', unit: '-', price: '70/-' },
      { name: 'Cold Coffee', unit: '-', price: '100/-' },
      { name: 'Black Coffee', unit: '-', price: '60/-' },
      { name: 'Seasonal Juice', unit: '-', price: '120/-' },
      { name: 'Faluda', unit: '-', price: '120/-' },
      { name: 'Borhani (Per Glass)', unit: '-', price: '60/-' },
      { name: 'Halim (Bhati)', unit: '-', price: '170/-' },
    ],
  },
  {
    title: 'Lunch',
    items: [
      { name: 'Kacchi Biriani', unit: '-', price: '290/-' },
      { name: 'Chicken Dom Biriyani (Firm)', unit: '-', price: '220/-' },
      { name: 'Morog Pollaw', unit: '-', price: '260/-' },
      { name: 'Beef Biriyani', unit: '-', price: '280/-' },
      { name: 'Chicken Biriyani (Deshi)', unit: '-', price: '250/-' },
      { name: 'Chicken Biriyani (Firm)', unit: '-', price: '200/-' },
      { name: 'Beef Akni', unit: '-', price: '180/-' },
      { name: 'Indian Khichuri (Chicken)', unit: '-', price: '280/-' },
      { name: 'Indian Khichuri (Beef)', unit: '-', price: '290/-' },
      { name: 'Chicken Zhal Fry (Deshi) (Alif Special)', unit: '-', price: '200/- / 400/-' },
      { name: 'Chicken Zhal Fry (Farm)', unit: '-', price: '160/- / 320/-' },
      { name: 'Rupchanda Massalla', unit: '-', price: '360/-' },
      { name: 'Rupchanda Fry', unit: '-', price: '360/-' },
      { name: 'Dal Khashi', unit: '-', price: '270/- / 540/-' },
      { name: 'Chicken Resala (Deshi)', unit: '-', price: '200/-' },
      { name: 'Chicken Resala (Firm)', unit: '-', price: '180/-' },
      { name: 'Beef Bhuna', unit: '-', price: '270/- / 540/-' },
      { name: 'Mutton Bhuna', unit: '-', price: '270/- / 540/-' },
      { name: 'Beef Chui Jhal', unit: '-', price: '270/- / 540/-' },
      { name: 'Mutton Dhal', unit: '-', price: '270/- / 540/-' },
      { name: 'Mutton Korma', unit: '-', price: '290/- / 580/-' },
      { name: 'Duck', unit: '-', price: '300/-' },
    ],
  },
  {
    title: 'Vegetable',
    items: [
      { name: 'Green Shuck', unit: '-', price: '140/-' },
      { name: 'Bangla Vegetable', unit: '-', price: '60/- / 120/-' },
    ],
  },
  {
    title: 'Fish',
    items: [
      { name: 'Prawn Curry', unit: '-', price: '300/- / 600/-' },
      { name: 'Rupchanda Curry', unit: '-', price: '280/-' },
      { name: 'Rupchyanda Fry', unit: '-', price: '360/-' },
      { name: 'Koral Fish', unit: '-', price: '270/-' },
      { name: 'Shing Fish', unit: '-', price: '160/-' },
      { name: 'Elish Fish', unit: '-', price: '320/-' },
      { name: 'Koi Fish', unit: '-', price: '140/-' },
      { name: 'Rui Fish', unit: '-', price: '190/-' },
      { name: 'Boahl Fish', unit: '-', price: '220/-' },
      { name: 'Katal Fish', unit: '-', price: '220/-' },
      { name: 'Kechki / Moilla', unit: '-', price: '190/-' },
      { name: 'Telapia', unit: '-', price: '140/-' },
      { name: 'Loitta Pry', unit: '-', price: '220/-' },
      { name: 'Churi Sutki Bhuna', unit: '-', price: '210/-' },
      { name: 'Nuna Elish Pathori', unit: '-', price: '210/-' },
      { name: 'Loitta Sutki Dopiaja', unit: '-', price: '210/-' },
      { name: 'Loitta Fish Jhal', unit: '-', price: '160/-' },
      { name: 'Pabda', unit: '-', price: '180/-' },
    ],
  },
  {
    title: 'Bharta',
    items: [
      { name: 'Shutki Bharta', unit: '-', price: '80/- / 160/-' },
      { name: 'Begun Bharta', unit: '-', price: '70/- / 140/-' },
      { name: 'Sheem Bharta', unit: '-', price: '70/- / 140/-' },
      { name: 'Tomato Bharta', unit: '-', price: '70/- / 140/-' },
      { name: 'Patal Bharta', unit: '-', price: '60/- / 120/-' },
      { name: 'Koralla Baji', unit: '-', price: '80/- / 160/-' },
      { name: 'Prawn Bharta', unit: '-', price: '80/- / 160/-' },
      { name: 'Fish Bharta', unit: '-', price: '80/- / 160/-' },
      { name: 'Potol Bharta', unit: '-', price: '60/- / 120/-' },
      { name: 'Misti Komra Bhorta', unit: '-', price: '60/- / 120/-' },
      { name: 'Kalojira Bhorta', unit: '-', price: '70/- / 140/-' },
    ],
  },
  {
    title: 'Others',
    items: [
      { name: 'Special Porata', unit: '-', price: '30/-' },
      { name: 'Normal Porata', unit: '-', price: '16/-' },
      { name: 'Butter Nan', unit: '-', price: '50/-' },
      { name: 'Patch Nan', unit: '-', price: '30/-' },
      { name: 'Plain Nan', unit: '-', price: '25/-' },
      { name: 'Chicken Grill (Quarter)', unit: '-', price: '130/-' },
      { name: 'Beef Kabab', unit: '-', price: '220/-' },
      { name: 'Chicken Tikka (Deshi)', unit: '-', price: '180/-' },
      { name: 'Chicken Chap', unit: '-', price: '140/-' },
      { name: 'Beef Chap', unit: '-', price: '180/-' },
      { name: 'Chicken Sharma', unit: '-', price: '110/-' },
      { name: 'Beef Halim', unit: '-', price: '180/-' },
      { name: 'Pollaw Rice', unit: '-', price: '90/-' },
      { name: 'Plain Rice Cinigura (Per Person)', unit: '-', price: '60/-' },
      { name: 'Plain Rice Atap (Per Person)', unit: '-', price: '60/-' },
      { name: 'Dal (Per Person)', unit: '-', price: '15/-' },
      { name: 'Dal Butter', unit: '-', price: '60/-' },
      { name: 'Kachur Lati', unit: '-', price: '120/-' },
      { name: 'Kolar Mocha', unit: '-', price: '120/-' },
    ],
  },
  {
    title: 'Kebab & Grill (Bangla Card)',
    items: [
      { name: 'বিফ কাবাব', unit: 'প্রতি শিক', price: '২২০/-' },
      { name: 'চিকেন টিক্কা', unit: 'প্রতি কোয়ার্টার', price: '১৮০/-' },
      { name: 'চিকেন গ্রিল', unit: 'প্রতি কোয়ার্টার', price: '১৩০/-' },
      { name: 'চিকেন চাপ', unit: 'প্রতি পিস', price: '১৪০/-' },
      { name: 'চিকেন বটি কাবাব', unit: 'প্রতি শিক', price: '১৭০/-' },
      { name: 'চিকেন চাপ মাসালা', unit: 'প্রতি হাফ', price: '১৬০/-' },
      { name: 'চিকেন মালাই কাবাব', unit: 'প্রতি হাফ', price: '১৮০/-' },
      { name: 'চিকেন শর্মা', unit: 'প্রতি পিস', price: '১১০/-' },
    ],
  },
];

const toEnglishDigits = (value: string) =>
  value.replace(/[০-৯]/g, (digit) => String('০১২৩৪৫৬৭৮৯'.indexOf(digit)));

const priceToNumber = (price: string) => {
  const normalized = toEnglishDigits(price).replace(/[^\d]/g, '');
  return Number.parseInt(normalized || '0', 10);
};

const normalizedSections: MenuSection[] = menuSections.map((section) => {
  const uniqueItems = Array.from(
    new Map(
      section.items.map((item) => [`${item.name}__${item.unit}__${item.price}`, item] as const),
    ).values(),
  );

  const sortedItems = [...uniqueItems].sort((a, b) => priceToNumber(a.price) - priceToNumber(b.price));

  return {
    ...section,
    items: sortedItems,
  };
});

const AlongkarMenu = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const isAllTab = activeTab === 'all';
  const visibleSections = isAllTab
    ? normalizedSections
    : normalizedSections.filter((section) => section.title === activeTab);

  return (
    <div className="min-h-screen bg-surface-main px-6 py-12 text-text-primary">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 font-bn">
        <header className="rounded-3xl border border-brand-dark/20 bg-white px-8 py-10 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)]">
          <p className="text-xs font-semibold uppercase tracking-[0.06em] text-text-muted">
            বিসমিল্লাহির রাহমানির রাহিম
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-3xl font-bold text-text-primary md:text-4xl">আলিফ অলংকার শাখা</h1>
            <span className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-text-inverse">
              ২৪ ঘন্টা খোলা
            </span>
          </div>
          <p className="mt-4 text-sm text-text-secondary">অলংকার, চট্টগ্রাম</p>
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
            {normalizedSections.map((section) => (
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

              <div
                className={`font-bn-clear mt-4 space-y-2 text-text-secondary ${isAllTab ? 'text-sm' : 'text-base md:text-lg'} `}
              >
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
                    <span
                      className={`text-text-primary ${
                        isAllTab ? 'text-sm md:text-base' : 'text-center text-base font-medium md:text-lg'
                      }`}
                    >
                      {item.name}
                    </span>
                    <span className={`${isAllTab ? 'text-right' : 'text-center'} font-medium`}>{item.unit}</span>
                    <span
                      className={`text-text-primary ${isAllTab ? 'text-right font-semibold' : 'text-center font-semibold'}`}
                    >
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

export default AlongkarMenu;
