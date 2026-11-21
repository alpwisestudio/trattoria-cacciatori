import type { Metadata } from "next";
import { Caveat, Manrope, Playfair_Display } from "next/font/google";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { RevealObserver } from "./components/motion";
import "./globals.css";

const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin"],
});

const playfair = Playfair_Display({
    variable: "--font-playfair",
    subsets: ["latin"],
    weight: ["500", "600", "700"],
});

// Solo per le righe in corsivo a mano sopra i titoli
const caveat = Caveat({
    variable: "--font-caveat",
    subsets: ["latin"],
    weight: ["600"],
});

export const metadata: Metadata = {
    title: {
        default: "Trattoria Cacciatori Somma Lombardo | Menù del giorno vicino a Malpensa",
        template: "%s | Trattoria Cacciatori Somma Lombardo",
    },
    description:
        "Trattoria Cacciatori a Somma Lombardo (VA), Via Giusti 96, a pochi minuti da Malpensa: cucina lombarda, menù del giorno a € 14 e pranzi di lavoro dal lunedì al sabato. Bar e colazioni dalle 7:30. Prenota su WhatsApp.",
    // Concept dimostrativo: non deve finire nei motori di ricerca.
    robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="it"
            data-scroll-behavior="smooth"
            className={`${manrope.variable} ${playfair.variable} ${caveat.variable} h-full antialiased`}
        >
            <body className="flex min-h-full flex-col font-sans">
                <SiteHeader />
                <main className="flex-1 overflow-x-clip">{children}</main>
                <SiteFooter />
                <RevealObserver />
            </body>
        </html>
    );
}
