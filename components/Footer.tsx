import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { Container } from "./Container";

export async function Footer() {
  const t = await getTranslations("footer");
  const tn = await getTranslations("nav");

  return (
    <footer className="mt-24 border-t border-line bg-brand-tint/30">
      <Container className="py-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-ink-muted">
        <div className="flex flex-col gap-1">
          <span className="font-medium text-ink">Skinllergic Cam · 肌敏雷達</span>
          <span>{t("tagline")}</span>
          <span className="opacity-70">{t("copyright")}</span>
        </div>
        <nav className="flex flex-wrap items-center gap-6">
          <Link href="/" className="hover:text-ink transition">{tn("home")}</Link>
          <Link href="/press" className="hover:text-ink transition">{tn("press")}</Link>
          <Link href="/privacy" className="hover:text-ink transition">{tn("privacy")}</Link>
          <Link href="/support" className="hover:text-ink transition">{tn("support")}</Link>
          <a href="mailto:ccccaiwork@gmail.com" className="hover:text-ink transition">
            {t("contact")}
          </a>
        </nav>
      </Container>
    </footer>
  );
}
