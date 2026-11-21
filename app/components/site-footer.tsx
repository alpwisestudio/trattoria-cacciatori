import Link from "next/link";
import { Logo } from "../decor";
import { HOURS, INFO, NAV } from "../info";

export function HoursList({ className = "", compact }: { className?: string; compact?: boolean }) {
    if (compact) {
        return (
            <dl className={`space-y-1.5 ${className}`}>
                <div className="flex justify-between gap-6">
                    <dt className="whitespace-nowrap">Lunedì-sabato</dt>
                    <dd className="whitespace-nowrap">7:30-14:30</dd>
                </div>
                <div className="flex justify-between gap-6">
                    <dt>Cucina</dt>
                    <dd className="whitespace-nowrap">12:00-14:30</dd>
                </div>
                <div className="flex justify-between gap-6">
                    <dt>Domenica</dt>
                    <dd className="whitespace-nowrap">Chiuso</dd>
                </div>
            </dl>
        );
    }
    return (
        <ul className={`space-y-1.5 ${className}`}>
            {HOURS.map((h) => (
                <li key={h.day} className="flex gap-4">
                    <span className="w-24 shrink-0 font-semibold">{h.day}</span>
                    <span>{h.hours ?? "Chiuso"}</span>
                </li>
            ))}
        </ul>
    );
}

export function SiteFooter() {
    return (
        <footer className="text-white">
            <div className="bg-vino-deep px-6 pb-10 pt-20">
                <div className="mx-auto grid max-w-6xl gap-12 text-center md:grid-cols-2 md:text-left lg:grid-cols-[1.1fr_0.8fr_1.1fr_1.2fr]">
                    <div className="flex flex-col items-center md:items-start">
                        <Logo light />
                        <p className="mt-5 text-sm leading-relaxed text-rosa">
                            {INFO.street}
                            <br />
                            {INFO.zip} {INFO.city} ({INFO.province})
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-oro">Pagine</h3>
                        <ul className="mt-4 space-y-2 text-sm text-rosa">
                            {NAV.map((n) => (
                                <li key={n.href}>
                                    <Link href={n.href} className="hover:text-oro">
                                        {n.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mx-auto w-full max-w-60 md:mx-0">
                        <h3 className="text-sm font-bold text-oro">Orari</h3>
                        <HoursList compact className="mt-4 text-left text-sm text-rosa" />
                    </div>
                    <div className="flex flex-col items-center gap-2 md:items-start lg:items-end">
                        <h3 className="text-sm font-bold text-oro">Prenotazioni</h3>
                        <a href={INFO.phoneHref} className="mt-2 whitespace-nowrap font-serif text-2xl font-semibold hover:text-oro xl:text-3xl">
                            {INFO.phone}
                        </a>
                        <a href={`https://wa.me/${INFO.whatsapp}`} className="text-sm text-rosa hover:text-oro">
                            Anche su WhatsApp
                        </a>
                        <Link href="/contatti#prenota" className="btn btn-oro mt-4">
                            Prenota il pranzo
                        </Link>
                    </div>
                </div>

                <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center gap-4 border-t border-white/10 pt-6 text-xs text-white/65 md:flex-row md:justify-between">
                    <div className="flex items-center gap-5">
                        <a href={INFO.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white">
                            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                                <path d="M14 8h3V4h-3c-2.8 0-4 1.7-4 4.3V10H7v4h3v8h4v-8h3l1-4h-4V8.6c0-.4.3-.6.6-.6z" />
                            </svg>
                        </a>
                        <span>© {INFO.fullName}</span>
                    </div>
                    <span>Allergeni disponibili in sala. Accessibile in sedia a rotelle.</span>
                </div>

                {/* Dicitura del concept */}
                <div className="mx-auto mt-6 max-w-6xl space-y-1 text-center text-[0.7rem] leading-relaxed text-white/60 md:text-left">
                    <p>
                        Concept a cura di{" "}
                        <a href="https://www.alpwise.studio" className="underline underline-offset-2 hover:text-rosa">
                            Alpwise Studio
                        </a>
                        . Non è il sito ufficiale della Trattoria Cacciatori. Piatti e prezzi sono di esempio.
                    </p>
                    <p>
                        Foto illustrative via Wikimedia Commons: ossobuco con risotto e cotoletta, pier (CC BY-SA 4.0); risotto
                        alla milanese, Number55 (CC BY-SA 3.0); cassoeula, Remulazz (CC BY-SA 4.0); tagliatelle al ragù, Alex
                        Sirac (CC BY 4.0); cotechino con polenta, J.P.Lon (CC BY-SA 3.0).
                    </p>
                </div>
            </div>
        </footer>
    );
}
