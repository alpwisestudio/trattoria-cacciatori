import type { Metadata } from "next";
import { Suspense } from "react";
import { delay } from "../components/delay";
import { Lavagna } from "../components/lavagna";
import { CtaBand } from "../components/sections";
import { Heading, PageHero } from "../components/ui";
import { MenuFilter, MenuFilterFallback } from "./menu-filter";
import polenta from "../../public/images/polenta.jpg";

export const metadata: Metadata = {
    title: "Menù",
    description:
        "Il menù della Trattoria Cacciatori a Somma Lombardo: menù fisso a pranzo e piatti della casa.",
};

export default function MenuPage() {
    return (
        <>
            <PageHero
                script="Il menù"
                title="Cosa si mangia da noi"
                text="[Come funzionano il menù fisso e la carta: da confermare]"
                image={polenta}
                alt="Foto illustrativa: cotechino con polenta e lenticchie"
            />
            <section className="px-6 pt-24">
                <Heading script="A pranzo" title="Il menù fisso" text="[Prezzo e cosa comprende: da confermare]" />
                <div data-reveal="zoom" style={delay(1)} className="mx-auto mt-12 max-w-4xl">
                    <Lavagna />
                </div>
            </section>
            <section className="pt-24">
                <Heading script="Alla carta" title="Tutti i piatti" text="[Piatti e prezzi da confermare] Tocca una categoria per vedere solo quella." />
                <div className="mt-10">
                    <Suspense fallback={<MenuFilterFallback />}>
                        <MenuFilter />
                    </Suspense>
                </div>
            </section>
            <p className="mx-auto max-w-xl px-6 text-center text-xs leading-relaxed text-muted">
                Per allergie e intolleranze chiedi la tabella degli allergeni al personale.
            </p>
            <CtaBand title="Hai già scelto?" text="Prenota il tavolo per pranzo o chiamaci." />
        </>
    );
}
