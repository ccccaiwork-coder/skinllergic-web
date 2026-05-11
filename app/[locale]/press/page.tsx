import { setRequestLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/Container";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "press" });
  return { title: t("title") };
}

export default async function PressPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("press");

  const ataKeys = [
    ["app", "appV"],
    ["platform", "platformV"],
    ["category", "categoryV"],
    ["languages", "languagesV"],
    ["price", "priceV"],
    ["launch", "launchV"],
  ] as const;

  const differentiators = t.raw("differentiators") as string[];
  const appleList = t.raw("builtwithAppleList") as string[];
  const complianceList = t.raw("builtwithComplianceList") as string[];
  const infraList = t.raw("builtwithInfraList") as string[];

  return (
    <Container className="py-16 md:py-24 max-w-4xl">
      {/* Header */}
      <header className="mb-14 border-b border-line pb-10">
        <p className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-tint px-4 py-1.5 text-xs font-medium text-brand">
          <span className="size-1.5 rounded-full bg-brand" />
          {t("wad")}
        </p>
        <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-ink text-balance">
          {t("title")}
        </h1>
        <p className="mt-5 text-lg text-ink-muted leading-relaxed max-w-2xl">{t("subtitle")}</p>
      </header>

      {/* 30-second pitch */}
      <Section title={t("pitchTitle")}>
        <p className="text-lg text-ink leading-relaxed">{t("pitch")}</p>
      </Section>

      {/* At a glance */}
      <Section title={t("ataglanceTitle")}>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 rounded-2xl border border-line bg-brand-tint/30 p-6 md:p-8">
          {ataKeys.map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4 py-1 border-b border-line/40 last:border-0 md:[&:nth-last-child(2)]:border-0">
              <dt className="text-sm text-ink-muted">{t(`ataglance.${k}`)}</dt>
              <dd className="text-sm font-medium text-ink text-right">{t(`ataglance.${v}`)}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Differentiators */}
      <Section title={t("differentiatorsTitle")}>
        <ul className="space-y-3">
          {differentiators.map((d, i) => (
            <li key={i} className="flex gap-3 text-ink leading-relaxed">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Why it matters */}
      <Section title={t("whyTitle")}>
        <Prose text={t("why")} />
      </Section>

      {/* Founder */}
      <Section title={t("founderTitle")}>
        <Prose text={t("founder")} />
      </Section>

      {/* Built with */}
      <Section title={t("builtwithTitle")}>
        <Sub title={t("builtwithApple")} items={appleList} />
        <Sub title={t("builtwithCompliance")} items={complianceList} />
        <Sub title={t("builtwithInfra")} items={infraList} />
      </Section>

      {/* Download assets */}
      <Section title={t("assetsTitle")}>
        <p className="text-ink-muted">{t("assetsNote")}</p>
        <a
          href="mailto:ccccaiwork@gmail.com?subject=Skinllergic%20Cam%20Press%20Assets"
          className="mt-4 inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-medium text-white hover:bg-brand-hover transition"
        >
          ccccaiwork@gmail.com
        </a>
      </Section>

      {/* Contact */}
      <Section title={t("contactTitle")} last>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 rounded-2xl border border-line bg-brand-tint/30 p-6 md:p-8">
          <Row label={t("contactEmail")}>
            <a href="mailto:ccccaiwork@gmail.com" className="text-brand hover:text-brand-hover">
              ccccaiwork@gmail.com
            </a>
          </Row>
          <Row label={t("contactResponse")}>{t("contactResponseV")}</Row>
          <Row label={t("contactLangs")}>{t("contactLangsV")}</Row>
          <Row label={t("contactLocation")}>{t("contactLocationV")}</Row>
        </dl>
      </Section>
    </Container>
  );
}

function Section({
  title,
  children,
  last = false,
}: {
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <section className={last ? "" : "mb-14 pb-14 border-b border-line"}>
      <h2 className="mb-5 text-2xl md:text-3xl font-semibold tracking-tight text-ink">{title}</h2>
      {children}
    </section>
  );
}

function Sub({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mb-7 last:mb-0">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand">{title}</h3>
      <ul className="space-y-2">
        {items.map((it, i) => (
          <li key={i} className="flex gap-3 text-ink leading-relaxed">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-ink-muted/50" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Prose({ text }: { text: string }) {
  return (
    <div className="space-y-5 text-ink leading-relaxed">
      {text.split("\n\n").map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex justify-between gap-4 py-1 border-b border-line/40 last:border-0 md:[&:nth-last-child(2)]:border-0">
      <dt className="text-sm text-ink-muted">{label}</dt>
      <dd className="text-sm font-medium text-ink text-right">{children}</dd>
    </div>
  );
}
