import { setRequestLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/Container";
import { AppStoreButton } from "@/components/AppStoreButton";
import { Screenshot } from "@/components/Screenshot";
import { Link } from "@/i18n/navigation";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("hero");
  const tf = await getTranslations("features");
  const ts = await getTranslations("screenshots");
  const tp = await getTranslations("privacyBanner");
  const tc = await getTranslations("cta");

  const featureKeys = [
    "verdict",
    "compare",
    "family",
    "ai",
    "icloud",
    "seasonal",
    "widgets",
    "ocr",
    "shortcuts",
  ] as const;

  const captions = ts.raw("captions") as string[];
  const screenshotSrcs = [
    "/screenshots/1-verdict.png",
    "/screenshots/2-family.png",
    "/screenshots/3-compare.png",
    "/screenshots/4-widget.png",
    "/screenshots/5-ai-explain.png",
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-tint via-white to-white" />
        <Container className="pt-20 pb-24 md:pt-28 md:pb-32 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/60 px-4 py-1.5 text-xs font-medium text-brand">
            <span className="size-1.5 rounded-full bg-brand animate-pulse" />
            {process.env.NEXT_PUBLIC_APP_LAUNCHED === "true"
              ? t("launchStatusPost")
              : t("launchStatus")}
          </p>
          <h1 className="mt-7 text-balance text-5xl md:text-7xl font-semibold tracking-tight text-ink leading-[1.05]">
            {t("title")}
          </h1>
          <p className="mt-2 text-sm md:text-base font-medium text-brand uppercase tracking-widest">
            {t("eyebrow")}
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-balance text-lg md:text-xl text-ink-muted leading-relaxed">
            {t("subtitle")}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <AppStoreButton label={t("ctaPrimary")} variant="primary" />
            <Link
              href="/press"
              className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3 text-sm font-medium text-ink hover:bg-brand-tint transition"
            >
              {t("ctaSecondary")}
            </Link>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="border-t border-line/60 bg-white py-24">
        <Container>
          <header className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-ink text-balance">
              {tf("title")}
            </h2>
            <p className="mt-4 text-lg text-ink-muted">{tf("subtitle")}</p>
          </header>
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featureKeys.map((k) => (
              <li
                key={k}
                className="group rounded-3xl border border-line bg-brand-tint/30 p-7 hover:bg-brand-tint hover:border-brand/30 transition"
              >
                <h3 className="text-lg font-semibold text-ink">{tf(`${k}.title`)}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
                  {tf(`${k}.body`)}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Screenshots */}
      <section className="border-t border-line/60 bg-gradient-to-b from-brand-tint/30 to-white py-24">
        <Container>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-ink text-balance">
            {ts("title")}
          </h2>
          <div className="mt-12 -mx-6 md:-mx-8 overflow-x-auto snap-x snap-mandatory">
            <div className="flex gap-6 px-6 md:px-8 pb-4">
              {captions.map((caption, i) => (
                <Screenshot
                  key={i}
                  src={screenshotSrcs[i]}
                  caption={caption}
                  index={i}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Privacy banner */}
      <section className="border-t border-line/60 bg-white py-24">
        <Container>
          <div className="rounded-3xl border border-brand/20 bg-gradient-to-br from-brand-tint via-white to-brand-light/40 p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Privacy
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-ink text-balance">
              {tp("title")}
            </h2>
            <p className="mt-5 max-w-3xl text-lg text-ink-muted leading-relaxed">
              {tp("body")}
            </p>
            <Link
              href="/privacy"
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-hover"
            >
              {tp("learnMore")} →
            </Link>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="border-t border-line/60 bg-white py-24 text-center">
        <Container>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-ink text-balance">
            {tc("title")}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink-muted leading-relaxed">
            {tc("body")}
          </p>
          <div className="mt-9">
            <AppStoreButton label={tc("button")} variant="primary" />
          </div>
        </Container>
      </section>
    </>
  );
}
