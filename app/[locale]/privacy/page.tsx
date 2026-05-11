import { setRequestLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/Container";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });
  return { title: t("title") };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("privacy");

  const tldr = t.raw("tldr") as string[];

  const sections = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({
    title: t(`section${n}Title`),
    body: t(`section${n}`),
  }));

  return (
    <Container className="py-16 md:py-24 max-w-3xl">
      <header className="mb-12 border-b border-line pb-10">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-ink text-balance">
          {t("title")}
        </h1>
        <p className="mt-3 text-sm text-ink-muted">{t("lastUpdated")}</p>
        <p className="mt-6 text-lg text-ink leading-relaxed">{t("intro")}</p>
      </header>

      <section className="mb-12 rounded-3xl border border-brand/20 bg-brand-tint/40 p-7 md:p-9">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-ink">{t("tldrTitle")}</h2>
        <ul className="mt-4 space-y-3">
          {tldr.map((item, i) => (
            <li key={i} className="flex gap-3 text-ink leading-relaxed">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="space-y-10">
        {sections.map(({ title, body }, i) => (
          <section key={i}>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-ink mb-3">
              {title}
            </h2>
            <div className="space-y-3 text-ink leading-relaxed">
              {body.split("\n\n").map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Container>
  );
}
