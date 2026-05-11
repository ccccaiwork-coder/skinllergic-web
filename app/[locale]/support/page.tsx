import { setRequestLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/Container";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "support" });
  return { title: t("title") };
}

type Faq = { q: string; a: string };

export default async function SupportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("support");

  const faqs = t.raw("faq") as Faq[];

  return (
    <Container className="py-16 md:py-24 max-w-3xl">
      <header className="mb-12 border-b border-line pb-10">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-ink text-balance">
          {t("title")}
        </h1>
        <p className="mt-5 text-lg text-ink-muted leading-relaxed">{t("subtitle")}</p>
      </header>

      <section className="mb-14 rounded-3xl border border-brand/20 bg-gradient-to-br from-brand-tint via-white to-brand-light/40 p-7 md:p-9">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-ink">
          {t("contactTitle")}
        </h2>
        <p className="mt-3 text-ink leading-relaxed">{t("contactBody")}</p>
        <a
          href="mailto:ccccaiwork@gmail.com?subject=Skinllergic%20Cam%20Support"
          className="mt-5 inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-medium text-white hover:bg-brand-hover transition"
        >
          {t("contactCta")} →
        </a>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink mb-6">
          {t("faqTitle")}
        </h2>
        <div className="divide-y divide-line/60 rounded-2xl border border-line overflow-hidden">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group bg-white open:bg-brand-tint/30 transition"
            >
              <summary className="cursor-pointer list-none px-6 py-5 flex items-start justify-between gap-4 hover:bg-brand-tint/30 transition">
                <span className="font-medium text-ink">{f.q}</span>
                <span className="mt-1 size-5 shrink-0 rounded-full border border-line text-ink-muted text-xs flex items-center justify-center group-open:rotate-45 transition">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 -mt-1 text-ink leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </section>
    </Container>
  );
}
