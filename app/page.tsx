import Image from "next/image";
import Link from "next/link";
import {
    AirplaneTiltIcon,
    ArrowRightIcon,
    BowlFoodIcon,
    BriefcaseIcon,
    CalendarCheckIcon,
    ChatsCircleIcon,
    CoffeeIcon,
    ReceiptIcon,
    StarIcon,
    TimerIcon,
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
    { icon: CoffeeIcon, title: "Caffè dalle 7:30", text: "Colazione prima del turno" },
    { icon: BowlFoodIcon, title: "Menù del giorno", text: `Completo a ${DAILY_PRICE.replace("€ ", "")} euro` },
    { icon: TimerIcon, title: "Pranzo veloce", text: "Piatto unico in 20 minuti" },
    { icon: BriefcaseIcon, title: "Per le aziende", text: "Fattura e convenzioni" },
    { icon: AirplaneTiltIcon, title: "Vicino a Malpensa", text: "Via Giusti 96, Somma" },
];

// Prezzi dalla carta di esempio in info.ts
const DISHES = [
    { img: risotto, alt: "Risotto alla milanese allo zafferano", title: "Risotto alla milanese", text: "Zafferano e midollo, mantecato al momento.", price: "€ 11", href: "/menu?categoria=primi" },
    { img: ossobuco, alt: "Ossobuco in gremolada con risotto", title: "Ossobuco in gremolada", text: "Cotto a lungo, con il suo risotto giallo.", price: "€ 20", href: "/menu?categoria=secondi" },
    { img: cotoletta, alt: "Cotoletta alla milanese con patate", title: "Cotoletta alla milanese", text: "Con l'osso, fritta nel burro, con patate al forno.", price: "€ 18", href: "/menu?categoria=secondi" },
    { img: cassoeula, alt: "Cassoeula di maiale e verze in pentola", title: "Cassoeula", text: "Maiale e verze, il giovedì da novembre a febbraio.", price: "€ 15", href: "/menu?categoria=secondi" },
];

const STATS = [
    { icon: StarIcon, n: INFO.rating, l: "Voto medio" },
    { icon: ChatsCircleIcon, n: `${INFO.reviews}+`, l: "Recensioni" },
    { icon: CalendarCheckIcon, n: "6 su 7", l: "Giorni aperti" },
    { icon: ReceiptIcon, n: DAILY_PRICE, l: "Menù completo" },
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
                            Il pranzo lombardo, fatto{" "}
                            <span className="script inline-block pb-1 text-[1.3em] leading-[0.9] text-oro">come a casa</span>
                        </h1>
                        <p style={delay(2)} className="hero-in mt-6 max-w-md text-lg leading-relaxed text-rosa">
                            Menù del giorno a 14 euro, piatti della tradizione e caffè dalle 7:30. Dal lunedì al sabato, vicino
                            a Malpensa.
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

                    <div style={delay(2)} className="hero-in relative mx-auto aspect-square w-full max-w-[19rem] sm:max-w-sm md:max-w-none">
                        <div aria-hidden className="absolute -right-[12%] top-[10%] aspect-square w-[105%] rounded-full bg-oro" />
                        <div className="relative aspect-square overflow-hidden rounded-full border-[10px] border-vino-deep shadow-[0_30px_60px_-20px_rgb(30_4_8/0.7)]">
                            <Image
                                src={ossobuco}
                                alt="Ossobuco con risotto alla milanese"
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
                    script="Cambia ogni mattina"
                    title="Il menù del giorno"
                    text="Due primi e due secondi, scelti con il mercato. Tocca un giorno per vedere la settimana."
                />
                <div data-reveal="zoom" style={delay(1)} className="mx-auto mt-12 max-w-4xl">
                    <Lavagna />
                </div>
            </section>

            {/* Piatti della casa */}
            <section className="px-6 pt-24 md:pt-28">
                <Heading script="Dalla nostra cucina" title="I piatti della casa" />
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
                    text="Servizio veloce, prezzi chiari e fattura per l'azienda. Per chi lavora in zona, in aeroporto o è di passaggio."
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
                    text="A pochi minuti dall'aeroporto di Malpensa e dal centro di Somma. La domenica siamo chiusi."
                />
                <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-[1fr_1.4fr]">
                    <ContactCard />
                    <MapEmbed />
                </div>
            </section>
        </>
    );
}
