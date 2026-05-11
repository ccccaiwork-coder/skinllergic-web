import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Container } from "./Container";
import { LangSwitch } from "./LangSwitch";

export async function Header() {
  const t = await getTranslations("nav");

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/icon.png"
            alt="Skinllergic Cam"
            width={36}
            height={36}
            className="rounded-lg shadow-sm"
            priority
          />
          <span className="font-semibold tracking-tight text-ink group-hover:text-brand transition">
            Skinllergic Cam
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-ink-muted">
          <Link href="/press" className="hover:text-ink transition">{t("press")}</Link>
          <Link href="/privacy" className="hover:text-ink transition">{t("privacy")}</Link>
          <Link href="/support" className="hover:text-ink transition">{t("support")}</Link>
        </nav>
        <LangSwitch />
      </Container>
    </header>
  );
}
