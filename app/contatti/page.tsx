import type { Metadata } from "next";
import { BookingSection, ContactCard, MapEmbed } from "../components/sections";
import { HoursList } from "../components/site-footer";
import { Heading, PageHero } from "../components/ui";
import tagliatelle from "../../public/images/tagliatelle.jpg";

export const metadata: Metadata = {
    title: "Contatti e prenotazioni",
    description:
        "Prenota il pranzo alla Trattoria Cacciatori, Via Giusti 96, Somma Lombardo. Aperti dal lunedì al sabato, 7:30-14:30. Telefono 350 977 9099.",
};

export default function ContattiPage() {
    return (
        <>
            <PageHero
                script="Contatti"
                title="Ti aspettiamo a pranzo"
                text="Prenota online o chiamaci. Dal lunedì al sabato, dalle 7:30 alle 14:30."
                image={tagliatelle}
                alt="Tagliatelle al ragù"
            />
            <BookingSection />
            <section className="px-6 pb-24">
                <Heading script="Dove siamo" title="Via Giusti 96, Somma Lombardo" />
                <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-[1fr_1.4fr]">
                    <div className="space-y-6">
                        <ContactCard />
                        <div data-reveal className="rounded-xl border border-line bg-card p-8">
                            <h3 className="text-sm font-bold text-rubino">Orari</h3>
                            <HoursList className="mt-4 text-sm" />
                            <p className="mt-4 text-xs text-muted">Orari della cucina: [da confermare].</p>
                        </div>
                    </div>
                    <MapEmbed />
                </div>
            </section>
        </>
    );
}
