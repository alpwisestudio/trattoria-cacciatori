"use client";

import { useState, useSyncExternalStore } from "react";
import { INFO } from "./info";

const SLOTS = ["12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30", "13:45", "14:00"];

const field =
    "mt-1.5 w-full rounded-md border border-ink/25 bg-white px-3.5 py-3 text-sm outline-none transition placeholder:text-ink/55 focus:border-vino focus:ring-2 focus:ring-vino/20 aria-[invalid=true]:border-rubino";

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
    return (
        <span className="text-xs font-bold text-ink/80">
            {children}
            {required && <span className="text-rubino"> *</span>}
        </span>
    );
}

function openWhatsApp(lines: (string | false)[]) {
    const text = lines.filter(Boolean).join("\n");
    window.open(`https://wa.me/${INFO.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
}

function formatDate(iso: string) {
    const [y, m, d] = iso.split("-");
    return `${d}/${m}/${y}`;
}

function todayIso() {
    return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Rome" }).format(new Date());
}

const noop = () => () => {};

const isSunday = (iso: string) => new Date(`${iso}T12:00:00`).getDay() === 0;

const SubmitNote = () => (
    <p className="text-xs text-ink/65">
        La richiesta arriva su WhatsApp e ti rispondiamo in mattinata. Oppure chiama il{" "}
        <a href={INFO.phoneHref} className="font-bold text-vino underline underline-offset-2">
            {INFO.phone}
        </a>
    </p>
);

const WaIcon = () => (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.4.6-.3.4c-.1.1-.3.3-.1.6.1.3.7 1.1 1.4 1.8 1 .9 1.8 1.1 2.1 1.3.3.1.4.1.6-.1l.8-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.1.1.7-.2 1.3z" />
    </svg>
);

/** Prenotazione del pranzo: solo dal lunedì al sabato, 12:00-14:00. */
export function BookingForm() {
    const [dateError, setDateError] = useState("");
    // Calcolata dopo il montaggio: niente date nel prerender
    const minDate = useSyncExternalStore(noop, todayIso, () => undefined);

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const date = String(data.get("date"));
        if (isSunday(date)) {
            setDateError("La domenica siamo chiusi: scegli un giorno dal lunedì al sabato.");
            e.currentTarget.querySelector<HTMLInputElement>("input[name=date]")?.focus();
            return;
        }
        openWhatsApp([
            `Ciao, vorrei prenotare il pranzo alla Trattoria ${INFO.name}.`,
            `Nome: ${data.get("name")}`,
            `Data: ${formatDate(date)} alle ${data.get("time")}`,
            `Persone: ${data.get("guests")}`,
            `Menù: ${data.get("menu")}`,
            data.get("work") === "on" && "Siamo un gruppo di lavoro, ci serve la fattura.",
            data.get("notes") ? `Note: ${data.get("notes")}` : false,
        ]);
    }

    return (
        <form onSubmit={onSubmit} className="grid gap-5 text-left sm:grid-cols-2">
            <label className="sm:col-span-2">
                <Label required>Nome e cognome</Label>
                <input name="name" required autoComplete="name" className={field} />
            </label>
            <label>
                <Label required>Giorno</Label>
                <input
                    name="date"
                    type="date"
                    required
                    min={minDate}
                    aria-invalid={dateError ? true : undefined}
                    aria-describedby="date-hint"
                    onChange={() => setDateError("")}
                    className={field}
                />
                <span id="date-hint" role={dateError ? "alert" : undefined} className={`mt-1 block text-xs ${dateError ? "font-bold text-rubino" : "text-ink/60"}`}>
                    {dateError || "Dal lunedì al sabato"}
                </span>
            </label>
            <label>
                <Label required>Orario</Label>
                <select name="time" required className={field} defaultValue="">
                    <option value="" disabled>
                        Scegli l&apos;orario
                    </option>
                    {SLOTS.map((s) => (
                        <option key={s}>{s}</option>
                    ))}
                </select>
            </label>
            <label>
                <Label required>Persone</Label>
                <select name="guests" required className={field} defaultValue="2">
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                        <option key={n}>{n}</option>
                    ))}
                    <option>Più di 20</option>
                </select>
            </label>
            <label>
                <Label required>Menù</Label>
                <select name="menu" required className={field} defaultValue="Menù del giorno">
                    <option>Menù del giorno</option>
                    <option>Alla carta</option>
                    <option>Ancora non so</option>
                </select>
            </label>
            <label className="flex items-start gap-3 rounded-md border border-oro bg-sabbia/60 p-3.5 sm:col-span-2">
                <input name="work" type="checkbox" className="mt-0.5 h-4 w-4 accent-vino" />
                <span className="text-sm text-ink/85">
                    <strong className="text-vino">Pranzo di lavoro</strong>: ci serve la fattura intestata all&apos;azienda
                </span>
            </label>
            <label className="sm:col-span-2">
                <Label>Note</Label>
                <textarea name="notes" rows={3} placeholder="Allergie, seggiolone, abbiamo poco tempo…" className={`${field} resize-none`} />
            </label>
            <div className="flex flex-col items-start gap-3 pt-1 sm:col-span-2">
                <button type="submit" className="btn btn-wa">
                    <WaIcon />
                    Invia su WhatsApp
                </button>
                <SubmitNote />
            </div>
        </form>
    );
}

/** Richiesta di convenzione per le aziende della zona. */
export function CompanyForm() {
    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        openWhatsApp([
            `Ciao, vorrei informazioni su una convenzione per il pranzo alla Trattoria ${INFO.name}.`,
            `Azienda: ${data.get("company")}`,
            `Referente: ${data.get("name")}`,
            `Persone al giorno: circa ${data.get("people")}`,
            `Giorni: ${data.getAll("days").join(", ") || "da definire"}`,
            data.get("notes") ? `Note: ${data.get("notes")}` : false,
        ]);
    }

    return (
        <form onSubmit={onSubmit} className="grid gap-5 text-left sm:grid-cols-2">
            <label className="sm:col-span-2">
                <Label required>Azienda</Label>
                <input name="company" required autoComplete="organization" className={field} />
            </label>
            <label>
                <Label required>Referente</Label>
                <input name="name" required autoComplete="name" className={field} />
            </label>
            <label>
                <Label required>Persone al giorno</Label>
                <input name="people" type="number" min={1} max={80} required placeholder="Circa" className={field} />
            </label>
            <fieldset className="sm:col-span-2">
                <legend className="text-xs font-bold text-ink/80">Giorni</legend>
                <div className="mt-1.5 grid grid-cols-3 gap-2 sm:grid-cols-6">
                    {["Lun", "Mar", "Mer", "Gio", "Ven", "Sab"].map((d) => (
                        <label
                            key={d}
                            className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-ink/20 bg-white py-2.5 text-sm font-bold text-ink/80 has-[:checked]:border-vino has-[:checked]:bg-vino has-[:checked]:text-white has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-vino/30"
                        >
                            <input type="checkbox" name="days" value={d} defaultChecked={d !== "Sab"} className="sr-only" />
                            {d}
                        </label>
                    ))}
                </div>
            </fieldset>
            <label className="sm:col-span-2">
                <Label>Note</Label>
                <textarea name="notes" rows={3} placeholder="Orari dei turni, buoni pasto, esigenze particolari…" className={`${field} resize-none`} />
            </label>
            <div className="flex flex-col items-start gap-3 pt-1 sm:col-span-2">
                <button type="submit" className="btn btn-wa">
                    <WaIcon />
                    Chiedi la convenzione
                </button>
                <SubmitNote />
            </div>
        </form>
    );
}
