"use client";

import { useState, useSyncExternalStore } from "react";
import { DAILY, DAILY_INCLUDES, DAILY_PRICE } from "../info";

const DAYS = [
    { idx: 1, short: "Lun", long: "lunedì" },
    { idx: 2, short: "Mar", long: "martedì" },
    { idx: 3, short: "Mer", long: "mercoledì" },
    { idx: 4, short: "Gio", long: "giovedì" },
    { idx: 5, short: "Ven", long: "venerdì" },
    { idx: 6, short: "Sab", long: "sabato" },
];

/** Giorno della settimana a Roma (0 = domenica). */
function romeWeekday() {
    const name = new Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: "Europe/Rome" }).format(new Date());
    return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(name);
}

const noop = () => () => {};

/** Menù del giorno: si apre sul giorno di oggi, la domenica mostra il lunedì. */
export function Lavagna() {
    // Solo nel browser: nel prerender parte dal lunedì
    const today = useSyncExternalStore(noop, romeWeekday, () => null);
    const [picked, setDay] = useState<number | null>(null);
    const day = picked ?? (today ? today : 1);

    const menu = DAILY[day];
    const label = DAYS.find((d) => d.idx === day)?.long;
    const title = today === 0 && day === 1 ? "Domani, lunedì" : day === today ? "Oggi in cucina" : `Il ${label}`;

    return (
        <div className="grid overflow-hidden rounded-xl border border-line bg-card md:grid-cols-[1fr_15rem]">
            <div className="p-6 sm:p-9">
                <div role="group" aria-label="Scegli il giorno" className="flex flex-wrap gap-1.5">
                    {DAYS.map((d) => (
                        <button
                            key={d.idx}
                            type="button"
                            aria-pressed={day === d.idx}
                            onClick={() => setDay(d.idx)}
                            className={`min-w-12 rounded-full px-3.5 py-2 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vino ${
                                day === d.idx ? "bg-vino text-white" : "bg-crema text-muted hover:text-ink"
                            }`}
                        >
                            {d.short}
                            {today === d.idx && <span className="sr-only"> (oggi)</span>}
                        </button>
                    ))}
                </div>

                <div aria-live="polite" key={day} className="animate-menu-in">
                    <p className="script mt-7 text-3xl text-rubino">{title}</p>
                    <div className="mt-4 grid gap-6 sm:grid-cols-2">
                        <div>
                            <h3 className="text-sm font-bold text-muted">Primi</h3>
                            <ul className="mt-2 space-y-1.5 font-serif text-xl font-semibold leading-snug">
                                {menu.primi.map((p) => (
                                    <li key={p}>{p}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-muted">Secondi</h3>
                            <ul className="mt-2 space-y-1.5 font-serif text-xl font-semibold leading-snug">
                                {menu.secondi.map((s) => (
                                    <li key={s}>{s}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="vino flex flex-col justify-center p-6 text-white sm:p-9">
                <p className="text-sm font-bold text-oro">Menù completo</p>
                <p className="mt-1 font-serif text-6xl font-bold">{DAILY_PRICE}</p>
                <p className="mt-3 text-sm leading-relaxed text-rosa">{DAILY_INCLUDES}</p>
            </div>
        </div>
    );
}
