// Dati pubblici del locale (Pagine Gialle, ricerca lead Alpwise del 30.10.2026).
// Da confermare con il titolare prima di mostrare il concept: anno di apertura,
// piatti, prezzi e servizi qui sotto sono di esempio.
export const INFO = {
  name: "Cacciatori",
  fullName: "Ristorante Trattoria Cacciatori",
  founded: "1969", // ricavato dall'indirizzo email del locale: da verificare
  street: "Via Giuseppe Giusti, 96",
  city: "Somma Lombardo",
  zip: "21019",
  province: "VA",
  phone: "+39 350 977 9099",
  phoneHref: "tel:+393509779099",
  whatsapp: "393509779099",
  email: "trattoriacacciatori1969@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100057880350482",
  rating: "4,3",
  reviews: "1.400",
  mapsQuery: "Trattoria Cacciatori, Via Giusti 96, Somma Lombardo",
};

/** Aperti solo a pranzo. 0 = domenica … 6 = sabato. */
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

/** Menù del giorno, a rotazione sulla settimana. Indice = giorno (1 = lunedì). */
export const DAILY: Record<number, { primi: string[]; secondi: string[] }> = {
  1: {
    primi: ["Pasta e fagioli", "Penne al ragù di casa"],
    secondi: ["Bollito misto con salsa verde", "Frittata alle erbe"],
  },
  2: {
    primi: ["Risotto alla milanese", "Minestrone alla lombarda"],
    secondi: ["Arrosto di vitello al forno", "Scaloppine al limone"],
  },
  3: {
    primi: ["Tagliatelle al ragù", "Riso e prezzemolo in brodo"],
    secondi: ["Spezzatino con polenta", "Cotoletta alla milanese"],
  },
  4: {
    primi: ["Gnocchi al pomodoro e basilico", "Pizzoccheri della Valtellina"],
    secondi: ["Ossobuco in gremolada", "Polpette al sugo"],
  },
  5: {
    primi: ["Spaghetti alle vongole", "Pasta al forno"],
    secondi: ["Merluzzo in umido con patate", "Trippa alla milanese (busecca)"],
  },
  6: {
    primi: ["Risotto ai funghi", "Lasagne della casa"],
    secondi: ["Brasato con polenta", "Salsiccia e verze"],
  },
};

export const DAILY_PRICE = "€ 14";
export const DAILY_INCLUDES = "Primo, secondo, contorno, acqua, ¼ di vino o bibita e caffè";

export type MenuItem = { name: string; desc?: string; price: string };
export type MenuCategory = { id: string; title: string; short?: string; note: string; items: MenuItem[] };

// Carta di esempio: piatti della tradizione lombarda, da sostituire con quelli del locale.
export const MENU: MenuCategory[] = [
  {
    id: "antipasti",
    title: "Antipasti",
    note: "Per cominciare",
    items: [
      { name: "Tagliere di salumi nostrani", desc: "Salame, coppa, lardo e giardiniera della casa", price: "€ 12" },
      { name: "Nervetti in insalata", desc: "Con cipolla rossa e prezzemolo", price: "€ 8" },
      { name: "Polenta fritta e gorgonzola", price: "€ 8" },
      { name: "Vitello tonnato", price: "€ 11" },
    ],
  },
  {
    id: "primi",
    title: "Primi",
    note: "Pasta fresca tirata a mano",
    items: [
      { name: "Risotto alla milanese", desc: "Con zafferano e midollo", price: "€ 11" },
      { name: "Tagliatelle al ragù", price: "€ 10" },
      { name: "Pizzoccheri della Valtellina", desc: "Grano saraceno, verze, patate e casera", price: "€ 12" },
      { name: "Minestrone alla lombarda", price: "€ 8" },
      { name: "Ravioli di brasato al burro e salvia", price: "€ 12" },
    ],
  },
  {
    id: "secondi",
    title: "Secondi",
    note: "Carne e cucina di casa",
    items: [
      { name: "Cotoletta alla milanese", desc: "Con l'osso, patate al forno", price: "€ 18" },
      { name: "Ossobuco in gremolada con risotto", price: "€ 20" },
      { name: "Brasato al vino rosso con polenta", price: "€ 15" },
      { name: "Cassoeula", desc: "Da novembre a febbraio, il giovedì", price: "€ 15" },
      { name: "Tagliata di manzo, rucola e grana", price: "€ 16" },
      { name: "Salsiccia alla griglia con polenta", price: "€ 11" },
    ],
  },
  {
    id: "piatti-unici",
    title: "Piatti unici",
    short: "Piatti unici",
    note: "Veloci, per chi ha poco tempo",
    items: [
      { name: "Insalatona del cacciatore", desc: "Pollo, uovo, mais, pomodori e scaglie di grana", price: "€ 10" },
      { name: "Piatto freddo", desc: "Bresaola, caprese e verdure grigliate", price: "€ 11" },
      { name: "Hamburger della casa", desc: "Con patatine", price: "€ 11" },
    ],
  },
  {
    id: "contorni",
    title: "Contorni",
    note: "Di stagione",
    items: [
      { name: "Patate al forno", price: "€ 4" },
      { name: "Verdure grigliate", price: "€ 5" },
      { name: "Insalata mista", price: "€ 4" },
      { name: "Polenta", price: "€ 3" },
    ],
  },
  {
    id: "dolci",
    title: "Dolci",
    note: "Fatti da noi",
    items: [
      { name: "Torta di pane", desc: "La ricetta della nonna", price: "€ 5" },
      { name: "Tiramisù", price: "€ 5" },
      { name: "Panna cotta ai frutti di vino", price: "€ 5" },
      { name: "Gelato al fior di latte con amarene", price: "€ 5" },
    ],
  },
  {
    id: "bar",
    title: "Bar e colazioni",
    short: "Bar",
    note: "Dalle 7:30",
    items: [
      { name: "Caffè espresso", price: "€ 1,20" },
      { name: "Cappuccino", price: "€ 1,60" },
      { name: "Brioche", desc: "Vuota, crema, marmellata o integrale", price: "€ 1,30" },
      { name: "Panino imbottito", desc: "Crudo, cotto, salame o mortadella", price: "€ 4" },
      { name: "Vino della casa", desc: "Rosso o bianco, ¼ / ½ / 1 litro", price: "da € 3" },
    ],
  },
];

/** Formule per chi lavora: prezzi a persona. */
export const WORK_MENUS = [
  {
    name: "Menù del giorno",
    price: "€ 14",
    note: "Il più scelto",
    items: ["Primo e secondo dalla lavagna", "Contorno di stagione", "Acqua, ¼ di vino o bibita", "Caffè"],
    highlight: true,
  },
  {
    name: "Mezzo menù",
    price: "€ 11",
    note: "Primo o secondo",
    items: ["Un piatto dalla lavagna", "Contorno", "Acqua e caffè"],
  },
  {
    name: "Piatto unico",
    price: "€ 10",
    note: "In 20 minuti",
    items: ["Insalatona, piatto freddo o hamburger", "Acqua", "Caffè"],
  },
];
