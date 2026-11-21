import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { delay } from "./delay";

/** Titolo di sezione: riga a mano, titolo in Playfair e testo breve. */
export function Heading({
    script,
    title,
    text,
    light,
    align = "center",
}: {
    script?: string;
    title: string;
    text?: string;
    light?: boolean;
    align?: "center" | "left";
}) {
    const center = align === "center";
    return (
        <div data-reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
            {script && <p className={`script text-2xl md:text-[1.75rem] ${light ? "text-oro" : "text-rubino"}`}>{script}</p>}
            <h2
                className={`mt-1 font-serif text-4xl font-semibold leading-tight md:text-5xl ${light ? "text-white" : "text-ink"}`}
            >
                {title}
            </h2>
            {text && (
                <p className={`mt-4 leading-relaxed ${center ? "mx-auto max-w-lg" : ""} ${light ? "text-rosa" : "text-muted"}`}>
                    {text}
                </p>
            )}
        </div>
    );
}

/** Testata delle pagine interne: fondo vino, testo a sinistra, piatto tondo a destra. */
export function PageHero({
    script,
    title,
    text,
    image,
    alt,
}: {
    script: string;
    title: string;
    text?: string;
    image: StaticImageData;
    alt: string;
}) {
    return (
        <section className="vino relative overflow-hidden px-6 pb-20 pt-32 text-white md:pb-24 md:pt-40">
            <div className="relative mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.2fr_1fr]">
                <div>
                    <p className="hero-in script text-2xl text-oro md:text-3xl">{script}</p>
                    <h1 style={delay(1)} className="hero-in mt-2 font-serif text-5xl font-semibold leading-[1.08] md:text-6xl">
                        {title}
                    </h1>
                    {text && (
                        <p style={delay(2)} className="hero-in mt-5 max-w-lg text-lg leading-relaxed text-rosa">
                            {text}
                        </p>
                    )}
                </div>
                <div style={delay(2)} className="hero-in relative mx-auto hidden aspect-square w-full max-w-sm md:block">
                    <div aria-hidden className="absolute inset-0 translate-x-[9%] translate-y-[9%] rounded-full bg-oro" />
                    <div className="relative aspect-square overflow-hidden rounded-full border-[10px] border-vino-deep shadow-[0_30px_60px_-20px_rgb(30_4_8/0.7)]">
                        <Image src={image} alt={alt} fill priority placeholder="blur" sizes="384px" className="object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}

/** Foto e testo affiancati. */
export function Feature({
    script,
    title,
    children,
    image,
    alt,
    reverse,
    cta,
}: {
    script: string;
    title: string;
    children: React.ReactNode;
    image: StaticImageData;
    alt: string;
    reverse?: boolean;
    cta?: { href: string; label: string };
}) {
    return (
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
            <div data-reveal={reverse ? "right" : "left"} className={`group relative ${reverse ? "md:order-2" : ""}`}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl md:aspect-[5/6]">
                    <Image
                        src={image}
                        alt={alt}
                        fill
                        sizes="(max-width: 768px) 90vw, 520px"
                        placeholder="blur"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                </div>
            </div>
            <div data-reveal style={delay(1)}>
                <p className="script text-2xl text-rubino md:text-[1.75rem]">{script}</p>
                <h2 className="mt-1 font-serif text-4xl font-semibold leading-tight md:text-5xl">{title}</h2>
                <div className="mt-5 space-y-4 leading-relaxed text-muted">{children}</div>
                {cta && (
                    <Link href={cta.href} className="btn btn-vino mt-8">
                        {cta.label}
                    </Link>
                )}
            </div>
        </div>
    );
}
