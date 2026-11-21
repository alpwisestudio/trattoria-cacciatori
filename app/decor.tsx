/**
 * Marchio del concept: nome in Playfair e riga in maiuscoletto.
 * Il locale non ha un logo pubblicato: questo è una proposta, da sostituire se ne hanno uno.
 */
export function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
    return (
        <span className={`inline-flex flex-col leading-none ${className}`}>
            <span className={`font-serif text-2xl font-bold md:text-[1.75rem] ${light ? "text-white" : "text-vino"}`}>
                Cacciatori
            </span>
            <span className={`mt-1.5 text-[0.62rem] font-bold tracking-[0.22em] ${light ? "text-oro" : "text-rubino"}`}>
                TRATTORIA · SOMMA LOMBARDO
            </span>
        </span>
    );
}
