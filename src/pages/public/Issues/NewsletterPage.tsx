/* ─────────────────────────────────────
   NEWSLETTER PAGE WRAPPER
───────────────────────────────────── */

interface NewsletterPageProps {
    children: React.ReactNode;
}



export function NewsletterPage({
    children,
}: NewsletterPageProps) {

    return (
        <section
            className="
                relative
                aspect-[2/3]
                w-full
                overflow-hidden
                rounded-lg
                bg-white
                shadow-[0_15px_40px_rgba(15,23,42,0.15)]
            "
        >
            {children}
        </section>
    );
}