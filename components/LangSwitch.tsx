"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LangSwitch() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("lang");

  return (
    <div className="inline-flex items-center rounded-full border border-line bg-white/70 backdrop-blur p-0.5 text-xs">
      {routing.locales.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            onClick={() => router.replace(pathname, { locale: l })}
            aria-pressed={active}
            className={
              "px-3 py-1.5 rounded-full transition " +
              (active
                ? "bg-brand text-white font-medium"
                : "text-ink-muted hover:text-ink")
            }
          >
            {t(l)}
          </button>
        );
      })}
    </div>
  );
}
