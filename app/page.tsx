import Image from "next/image";
import Link from "next/link";
import {
    AirplaneTiltIcon,
    ArrowRightIcon,
    BowlFoodIcon,
    BriefcaseIcon,
    CalendarCheckIcon,
    ChatsCircleIcon,
    ClockIcon,
    PhoneIcon,
    ReceiptIcon,
    StarIcon,
} from "@phosphor-icons/react/dist/ssr";
import { delay } from "./components/delay";
import { Lavagna } from "./components/lavagna";
import { BookingSection, ContactCard, MapEmbed, WorkMenus } from "./components/sections";
import { Heading } from "./components/ui";
import { DAILY_PRICE, INFO } from "./info";
import ossobuco from "../public/images/ossobuco.jpg";
import risotto from "../public/images/risotto.jpg";
import cassoeula from "../public/images/cassoeula.jpg";
import cotoletta from "../public/images/cotoletta.jpg";

const POINTS = [
    { icon: ClockIcon, title: "Aperti dalle 7:30", text: "Dal lunedì al sabato" },
    { icon: BowlFoodIcon, title: "Menù fisso", text: `A pranzo, ${DAILY_PRICE}` },
    { icon: PhoneIcon, title: "Prenota", text: INFO.phone },
    { icon: BriefcaseIcon, title: "Per le aziende", text: "[Servizi da confermare]" },
    { icon: AirplaneTiltIcon, title: "Vicino a Malpensa", text: "Via Giusti 96, Somma" },
];

// Foto illustrative: piatti, descrizioni e prezzi da sostituire con quelli del locale
const DISHES = [
    { img: risotto, alt: "Foto illustrativa: risotto allo zafferano", href: "/menu?categoria=primi" },
    { img: ossobuco, alt: "Foto illustrativa: ossobuco con risotto", href: "/menu?categoria=secondi" },
    { img: cotoletta, alt: "Foto illustrativa: cotoletta con patate", href: "/menu?categoria=secondi" },
    { img: cassoeula, alt: "Foto illustrativa: cassoeula in pentola", href: "/menu?categoria=secondi" },
].map((d, i) => ({ ...d, title: `[Piatto della casa ${i + 1}]`, text: "[Descrizione]", price: "€ XX" }));

const STATS = [
    { icon: StarIcon, n: INFO.rating, l: "Voto medio [da confermare]" },
    { icon: ChatsCircleIcon, n: INFO.reviews, l: "Recensioni [da confermare]" },
    { icon: CalendarCheckIcon, n: "6 su 7", l: "Giorni aperti" },
    { icon: ReceiptIcon, n: DAILY_PRICE, l: "Menù fisso" },
];

export default function Home() {
    return (
        <>
            {/* Hero */}
            <section className="vino relative overflow-hidden px-6 pb-36 pt-28 text-white md:pb-40 md:pt-36">
                <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_1fr]">
                    <div>
                        <p className="hero-in script text-2xl text-oro md:text-[1.9rem]">Si mangia bene, si torna al lavoro</p>
                        <h1
                            style={delay(1)}
                            className="hero-in mt-3 font-serif text-[2.75rem] font-semibold leading-[1.08] sm:text-6xl lg:text-[4.1rem]"
                        >
                            Il pranzo in trattoria, fatto{" "}
                            <span className="script inline-block pb-1 text-[1.3em] leading-[0.9] text-oro">come a casa</span>
                        </h1>
                        <p style={delay(2)} className="hero-in mt-6 max-w-md text-lg leading-relaxed text-rosa">
                            Menù fisso a pranzo, a {DAILY_PRICE}. Aperti dal lunedì al sabato dalle 7:30, vicino a
                            Malpensa.
                        </p>
                        <div style={delay(3)} className="hero-in mt-9 flex flex-wrap gap-3">
                            <Link href="#oggi" className="btn btn-oro">
                                Il menù di oggi <ArrowRightIcon aria-hidden size={18} weight="bold" />
                            </Link>
                            <Link href="/contatti#prenota" className="btn btn-line">
                                Prenota il pranzo
                            </Link>
                        </div>
                    </div>

                    <div style={delay(2)} className="hero-in relative mx-auto aspect-square w-[88%] max-w-[19rem] sm:max-w-sm md:w-[90%] md:max-w-md">
                        <div aria-hidden className="absolute inset-0 translate-x-[9%] translate-y-[9%] rounded-full bg-oro" />
                        <div className="relative aspect-square overflow-hidden rounded-full border-[10px] border-vino-deep shadow-[0_30px_60px_-20px_rgb(30_4_8/0.7)]">
                            <Image
                                src={ossobuco}
                                alt="Foto illustrativa: ossobuco con risotto"
                                fill
                                priority
                                placeholder="blur"
                                sizes="(max-width: 768px) 80vw, 520px"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Cinque punti */}
            <section className="relative px-6">
                <ul className="mx-auto -mt-20 grid max-w-6xl grid-cols-2 gap-y-8 rounded-xl border border-line bg-card px-4 py-8 shadow-[0_18px_40px_-24px_rgb(90_22_33/0.35)] sm:grid-cols-3 lg:grid-cols-5 lg:py-9">
                    {POINTS.map((p, i) => (
                        <li
                            key={p.title}
                            data-reveal
                            style={delay(i)}
                            className={`flex flex-col items-center px-3 text-center lg:border-line ${i > 0 ? "lg:border-l" : ""} ${i === 4 ? "col-span-2 sm:col-span-1" : ""}`}
                        >
                            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-sabbia text-vino">
                                <p.icon aria-hidden size={30} />
                            </span>
                            <p className="mt-3.5 font-bold">{p.title}</p>
                            <p className="mt-1 text-sm text-muted">{p.text}</p>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Menù del giorno */}
            <section id="oggi" className="scroll-mt-20 px-6 pt-24 md:pt-28">
                <Heading
                    script="A pranzo"
                    title="Il menù fisso"
                    text="[Come funziona il menù fisso: da confermare] Tocca un giorno per vedere la settimana."
                />
                <div data-reveal="zoom" style={delay(1)} className="mx-auto mt-12 max-w-4xl">
                    <Lavagna />
                </div>
            </section>

            {/* Piatti della casa */}
            <section className="px-6 pt-24 md:pt-28">
                <Heading script="Dalla nostra cucina" title="I piatti della casa" text="[Piatti e prezzi da confermare]" />
                <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {DISHES.map((d, i) => (
                        <Link
                            key={d.title}
                            href={d.href}
                            data-reveal
                            style={delay(i)}
                            className="group flex flex-col overflow-hidden rounded-xl border border-line bg-card transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgb(90_22_33/0.4)]"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={d.img}
                                    alt={d.alt}
                                    fill
                                    placeholder="blur"
                                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 280px"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-1 flex-col p-5">
                                <h3 className="font-serif text-xl font-semibold">{d.title}</h3>
                                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">{d.text}</p>
                                <p className="mt-4 font-bold text-rubino">{d.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <div data-reveal className="mt-10 text-center">
                    <Link href="/menu" className="btn btn-vino">
                        Tutto il menù <ArrowRightIcon aria-hidden size={18} weight="bold" />
                    </Link>
                </div>
            </section>

            {/* Pranzo di lavoro */}
            <section className="px-6 pt-24 md:pt-28">
                <Heading
                    script="Per chi ha poco tempo"
                    title="Pranzo di lavoro"
                    text="Per chi lavora in zona o è di passaggio. [Formule e prezzi da confermare]"
                />
                <div className="mt-12">
                    <WorkMenus />
                </div>
                <div data-reveal className="mt-10 text-center">
                    <Link href="/pranzo-di-lavoro" className="btn btn-line-dark">
                        Convenzioni per le aziende
                    </Link>
                </div>
            </section>

            <BookingSection />

            {/* Numeri */}
            <section className="px-6">
                <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-6 border-y border-line py-8 lg:grid-cols-4">
                    {STATS.map((s, i) => (
                        <div key={s.l} data-reveal style={delay(i)} className="flex items-center gap-4 px-2">
                            <s.icon aria-hidden size={34} className="shrink-0 text-vino" />
                            <div className="flex flex-col-reverse">
                                <dt className="text-sm text-muted">{s.l}</dt>
                                <dd className="font-serif text-3xl font-bold">{s.n}</dd>
                            </div>
                        </div>
                    ))}
                </dl>
            </section>

            {/* Dove siamo */}
            <section className="px-6 py-24 md:py-28">
                <Heading
                    script="Dove siamo"
                    title="Via Giusti 96, Somma Lombardo"
                    text="Vicino all'aeroporto di Malpensa. La domenica siamo chiusi."
                />
                <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-[1fr_1.4fr]">
                    <ContactCard />
                    <MapEmbed />
                </div>
            </section>
        </>
    );
}
