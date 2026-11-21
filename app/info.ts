// Dati verificati su fonti pubbliche (Pagine Gialle, Tuttocittà, italiarecensioni, lead Alpwise):
// nome, indirizzo, telefono, email, Facebook, orari. Tutto il resto è un placeholder tra
// parentesi quadre (o "XX" nei prezzi), da compilare con il titolare.
export const INFO = {
  name: "Cacciatori",
  fullName: "Ristorante Trattoria Cacciatori",
  street: "Via Giuseppe Giusti, 96",
  city: "Somma Lombardo",
  zip: "21019",
  province: "VA",
  phone: "+39 350 977 9099",
  phoneHref: "tel:+393509779099",
  whatsapp: "393509779099", // stesso numero del telefono: WhatsApp da confermare
  email: "trattoriacacciatori1969@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100057880350482",
  // Voto e numero di recensioni cambiano tra piattaforme (Tripadvisor 4,1, piatti.menu 4,2): da confermare
  rating: "X,X",
  reviews: "XXX",
  mapsQuery: "Trattoria Cacciatori, Via Giusti 96, Somma Lombardo",
};

/** Orari pubblici. 0 = domenica … 6 = sabato. */
export const HOURS: { day: string; idx: number; hours: string | null }[] = [
  { day: "Lunedì", idx: 1, hours: "7:30-14:30" },
  { day: "Martedì", idx: 2, hours: "7:30-14:30" },
  { day: "Mercoledì", idx: 3, hours: "7:30-14:30" },
  { day: "Giovedì", idx: 4, hours: "7:30-14:30" },
  { day: "Venerdì", idx: 5, hours: "7:30-14:30" },
  { day: "Sabato", idx: 6, hours: "7:30-14:30" },
  { day: "Domenica", idx: 0, hours: null },
];

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menù" },
  { href: "/pranzo-di-lavoro", label: "Pranzo di lavoro" },
  { href: "/contatti", label: "Contatti" },
];

/** Menù fisso a pranzo: piatti da compilare con il locale. Indice = giorno (1 = lunedì). */
export const DAILY: Record<number, { primi: string[]; secondi: string[] }> = {
  1: { primi: ["[Primo 1]", "[Primo 2]"], secondi: ["[Secondo 1]", "[Secondo 2]"] },
  2: { primi: ["[Primo 1]", "[Primo 2]"], secondi: ["[Secondo 1]", "[Secondo 2]"] },
  3: { primi: ["[Primo 1]", "[Primo 2]"], secondi: ["[Secondo 1]", "[Secondo 2]"] },
  4: { primi: ["[Primo 1]", "[Primo 2]"], secondi: ["[Secondo 1]", "[Secondo 2]"] },
  5: { primi: ["[Primo 1]", "[Primo 2]"], secondi: ["[Secondo 1]", "[Secondo 2]"] },
  6: { primi: ["[Primo 1]", "[Primo 2]"], secondi: ["[Secondo 1]", "[Secondo 2]"] },
};

// Le recensioni citano un menù fisso a pranzo tra 12 e 16 euro: prezzo e contenuto da confermare.
export const DAILY_PRICE = "€ XX";
export const DAILY_INCLUDES = "[Cosa comprende: da confermare]";

export type MenuItem = { name: string; desc?: string; price: string };
export type MenuCategory = { id: string; title: string; short?: string; note: string; items: MenuItem[] };

// Carta da compilare con i piatti e i prezzi del locale.
export const MENU: MenuCategory[] = [
  {
    id: "primi",
    title: "Primi",
    note: "[Nota]",
    items: [
      { name: "[Piatto 1]", desc: "[Descrizione]", price: "€ XX" },
      { name: "[Piatto 2]", desc: "[Descrizione]", price: "€ XX" },
      { name: "[Piatto 3]", desc: "[Descrizione]", price: "€ XX" },
    ],
  },
  {
    id: "secondi",
    title: "Secondi",
    note: "[Nota]",
    items: [
      { name: "[Piatto 1]", desc: "[Descrizione]", price: "€ XX" },
      { name: "[Piatto 2]", desc: "[Descrizione]", price: "€ XX" },
      { name: "[Piatto 3]", desc: "[Descrizione]", price: "€ XX" },
    ],
  },
  {
    id: "contorni",
    title: "Contorni",
    note: "[Nota]",
    items: [
      { name: "[Piatto 1]", desc: "[Descrizione]", price: "€ XX" },
      { name: "[Piatto 2]", desc: "[Descrizione]", price: "€ XX" },
      { name: "[Piatto 3]", desc: "[Descrizione]", price: "€ XX" },
    ],
  },
  {
    id: "dolci",
    title: "Dolci",
    note: "[Nota]",
    items: [
      { name: "[Piatto 1]", desc: "[Descrizione]", price: "€ XX" },
      { name: "[Piatto 2]", desc: "[Descrizione]", price: "€ XX" },
      { name: "[Piatto 3]", desc: "[Descrizione]", price: "€ XX" },
    ],
  },
];

/** Formule per chi lavora: da confermare con il locale. */
export const WORK_MENUS = [
  {
    name: "Menù fisso",
    price: "€ XX",
    note: "[Nota]",
    items: ["[Cosa comprende]", "[Cosa comprende]", "[Cosa comprende]"],
    highlight: true,
  },
  {
    name: "[Formula 2]",
    price: "€ XX",
    note: "[Nota]",
    items: ["[Cosa comprende]", "[Cosa comprende]"],
  },
  {
    name: "[Formula 3]",
    price: "€ XX",
    note: "[Nota]",
    items: ["[Cosa comprende]", "[Cosa comprende]"],
  },
];
