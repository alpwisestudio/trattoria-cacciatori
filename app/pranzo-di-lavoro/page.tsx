import type { Metadata } from "next";
import { CompanyForm } from "../booking-form";
import { delay } from "../components/delay";
import { WorkMenus } from "../components/sections";
import { Feature, Heading, PageHero } from "../components/ui";
import cotoletta from "../../public/images/cotoletta.jpg";
import risotto from "../../public/images/risotto.jpg";

export const metadata: Metadata = {
    title: "Pranzo di lavoro e convenzioni",
    description:
        "Pranzo di lavoro a Somma Lombardo, vicino a Malpensa, alla Trattoria Cacciatori. Dal lunedì al sabato.",
};

const POINTS = [
    { title: "Veloce", text: "[Tempi del servizio a pranzo: da confermare]" },
    { title: "Fattura", text: "Fattura intestata all'azienda: chiedila alla cassa." },
    { title: "Gruppi", text: "[Accoglienza dei gruppi: da confermare]" },
    { title: "Convenzioni", text: "[Condizioni per le aziende: da confermare]" },
];

export default function PranzoDiLavoroPage() {
    return (
        <>
            <PageHero
                script="Pranzo di lavoro"
                title="Si mangia bene anche in pausa pranzo"
                text="Per chi lavora intorno a Malpensa. [Formule e convenzioni da confermare]"
                image={risotto}
                alt="Risotto alla milanese allo zafferano"
            />

            <section className="px-6 py-24">
                <Heading script="Le formule" title="Tre modi di fare pausa" text="[Formule e prezzi da confermare]" />
                <div className="mt-14">
                    <WorkMenus />
                </div>
            </section>

            <section className="px-6 pb-24">
                <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {POINTS.map((p, i) => (
                        <article key={p.title} data-reveal style={delay(i)} className="h-full rounded-xl border border-line bg-card p-7">
                                                        <h2 className="font-serif text-2xl font-semibold">{p.title}</h2>
                            <p className="mt-3 text-sm leading-relaxed text-muted">{p.text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="px-6 py-24">
                <Feature
                    reverse
                    script="Chi passa da noi"
                    title="Il pranzo vicino a Malpensa"
                    image={cotoletta}
                    alt="Foto illustrativa: cotoletta alla milanese con patatine e insalata"
                >
                    <p>[La storia del locale e di chi ci viene a pranzo, da raccontare con il titolare.]</p>
                </Feature>
            </section>

            <section id="convenzione" className="scroll-mt-16 px-6 pb-24">
                <div className="vino mx-auto grid max-w-6xl items-start gap-10 rounded-xl p-7 text-white md:p-12 lg:grid-cols-[1fr_1.25fr] lg:gap-14">
                    <div data-reveal>
                        <p className="script text-2xl text-oro md:text-[1.75rem]">Per le aziende</p>
                        <h2 className="mt-1 font-serif text-4xl font-semibold leading-tight md:text-5xl">Chiedi una convenzione</h2>
                        <p className="mt-4 leading-relaxed text-rosa">
                            Dicci quante persone pranzano da voi e in quali giorni: ti ricontattiamo con una proposta.
                            [Condizioni da confermare]
                        </p>
                    </div>
                    <div data-reveal="zoom" style={delay(1)} className="rounded-lg bg-crema p-6 text-ink md:p-9">
                        <CompanyForm />
                    </div>
                </div>
            </section>
        </>
    );
}
