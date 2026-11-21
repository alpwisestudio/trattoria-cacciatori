import Link from "next/link";
import { CheckCircleIcon } from "@phosphor-icons/react/dist/ssr";
import { BookingForm } from "../booking-form";
import { INFO, WORK_MENUS, type MenuCategory } from "../info";
import { delay } from "./delay";
import { HoursList } from "./site-footer";
import { Heading } from "./ui";

export function MenuGrid({ categories, single }: { categories: MenuCategory[]; single?: boolean }) {
    return (
        <div className={`mx-auto grid items-start gap-6 ${single ? "max-w-2xl" : "max-w-6xl md:grid-cols-2"}`}>
            {categories.map((cat, i) => (
                <div key={cat.id} data-reveal style={delay(i % 2)}>
                    <section aria-labelledby={`cat-${cat.id}`} className="rounded-xl border border-line bg-card p-7 md:p-9">
                        <p className="script text-xl text-rubino">{cat.note}</p>
                        <h3 id={`cat-${cat.id}`} className="font-serif text-3xl font-semibold">
                            {cat.title}
                        </h3>
                        <ul className="mt-6 space-y-4">
                            {cat.items.map((it) => (
                                <li key={it.name}>
                                    <div className="flex items-baseline gap-3">
                                        <span className="font-semibold">{it.name}</span>
                                        <span aria-hidden className="mb-1 flex-1 border-b border-dotted border-ink/25" />
                                        <span className="shrink-0 font-bold text-rubino">{it.price}</span>
                                    </div>
                                    {it.desc && <p className="mt-0.5 pr-16 text-sm text-muted">{it.desc}</p>}
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            ))}
        </div>
    );
}

export function WorkMenus() {
    return (
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
            {WORK_MENUS.map((m, i) => (
                <div key={m.name} data-reveal style={delay(i)}>
                    <article
                        className={`flex h-full flex-col rounded-xl border p-7 transition duration-300 hover:-translate-y-1 ${
                            m.highlight ? "border-vino bg-vino text-white" : "border-line bg-card"
                        }`}
                    >
                        <p className={`script text-xl ${m.highlight ? "text-oro" : "text-rubino"}`}>{m.note}</p>
                        <h3 className="font-serif text-2xl font-semibold">{m.name}</h3>
                        <p className="mt-3 font-serif text-5xl font-bold">
                            {m.price}
                            <span className={`ml-1.5 font-sans text-xs font-semibold ${m.highlight ? "text-rosa" : "text-muted"}`}>
                                a persona
                            </span>
                        </p>
                        <ul
                            className={`mt-5 flex-1 space-y-2.5 border-t pt-5 text-sm ${m.highlight ? "border-white/15 text-rosa" : "border-line text-muted"}`}
                        >
                            {m.items.map((it, j) => (
                                <li key={j} className="flex gap-2.5">
                                    <CheckCircleIcon
                                        aria-hidden
                                        size={18}
                                        className={`shrink-0 ${m.highlight ? "text-oro" : "text-rubino"}`}
                                    />
                                    {it}
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>
            ))}
        </div>
    );
}

export function BookingSection() {
    return (
        <section id="prenota" className="scroll-mt-16 px-6 py-24">
            <div className="vino mx-auto grid max-w-6xl items-start gap-10 overflow-hidden rounded-xl p-7 text-white md:p-12 lg:grid-cols-[1fr_1.25fr] lg:gap-14">
                <div data-reveal>
                    <p className="script text-2xl text-oro md:text-[1.75rem]">Il posto te lo teniamo noi</p>
                    <h2 className="mt-1 font-serif text-4xl font-semibold leading-tight md:text-5xl">Prenota il pranzo</h2>
                    <p className="mt-4 leading-relaxed text-rosa">
                        Giorno, orario e quante persone: la richiesta ci arriva su WhatsApp e ti rispondiamo per confermare.
                    </p>
                    <ul className="mt-6 space-y-2.5 text-sm">
                        {["Richiesta su WhatsApp", "Dal lunedì al sabato", "[Orari del pranzo da confermare]"].map((t) => (
                            <li key={t} className="flex items-center gap-2.5">
                                <CheckCircleIcon aria-hidden size={20} className="text-oro" />
                                {t}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-8 max-w-xs border-t border-white/15 pt-6">
                        <p className="text-sm font-bold text-oro">Siamo aperti</p>
                        <HoursList compact className="mt-3 text-sm text-rosa" />
                    </div>
                </div>
                <div data-reveal="zoom" style={delay(1)} className="rounded-lg bg-crema p-6 text-ink md:p-9">
                    <BookingForm />
                </div>
            </div>
        </section>
    );
}

export function ContactCard() {
    const rows = [
        { label: "Indirizzo", value: `${INFO.street}, ${INFO.zip} ${INFO.city} (${INFO.province})` },
        { label: "Telefono", value: INFO.phone, href: INFO.phoneHref },
        { label: "Email", value: INFO.email, href: `mailto:${INFO.email}` },
    ];
    return (
        <address data-reveal className="rounded-xl border border-line bg-card p-8 not-italic">
            <dl className="space-y-5">
                {rows.map((r) => (
                    <div key={r.label}>
                        <dt className="text-sm font-bold text-rubino">{r.label}</dt>
                        <dd className="mt-1 break-words font-serif text-xl font-semibold">
                            {r.href ? (
                                <a href={r.href} className="hover:text-rubino">
                                    {r.value}
                                </a>
                            ) : (
                                r.value
                            )}
                        </dd>
                    </div>
                ))}
            </dl>
            <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(INFO.mapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-vino mt-8"
            >
                Indicazioni stradali
            </a>
        </address>
    );
}

export function MapEmbed() {
    return (
        <div data-reveal style={delay(1)} className="min-h-80 overflow-hidden rounded-xl border border-line">
            <iframe
                title={`Mappa: ${INFO.fullName}, ${INFO.street}, ${INFO.city}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(INFO.mapsQuery)}&z=15&output=embed`}
                className="h-full min-h-80 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
}

export function CtaBand({ title, text }: { title: string; text: string }) {
    return (
        <section className="px-6 py-24 text-center">
            <Heading script="Ti aspettiamo" title={title} text={text} />
            <div data-reveal style={delay(1)} className="mx-auto mt-10 flex max-w-md flex-wrap justify-center gap-3">
                <Link href="/contatti#prenota" className="btn btn-vino">
                    Prenota il pranzo
                </Link>
                <a href={INFO.phoneHref} className="btn btn-line-dark">
                    Chiama
                </a>
            </div>
        </section>
    );
}
