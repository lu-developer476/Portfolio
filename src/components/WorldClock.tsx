"use client";

import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/lib/i18n";

type Props = {
  open: boolean;
  onClose: () => void;
};

type Zone = { labelEs: string; labelEn: string; tz: string; flag: string };

const ZONES: Zone[] = [
  { labelEs: "Argentina", labelEn: "Argentina", tz: "America/Argentina/Buenos_Aires", flag: "🇦🇷" },
  { labelEs: "Chile", labelEn: "Chile", tz: "America/Santiago", flag: "🇨🇱" },
  { labelEs: "Brasil", labelEn: "Brazil", tz: "America/Sao_Paulo", flag: "🇧🇷" },
  { labelEs: "Perú", labelEn: "Peru", tz: "America/Lima", flag: "🇵🇪" },
  { labelEs: "México", labelEn: "Mexico", tz: "America/Mexico_City", flag: "🇲🇽" },
  { labelEs: "EE. UU. (NY)", labelEn: "USA (New York)", tz: "America/New_York", flag: "🇺🇸" },
  { labelEs: "EE. UU. (LA)", labelEn: "USA (Los Angeles)", tz: "America/Los_Angeles", flag: "🇺🇸" },
  { labelEs: "España", labelEn: "Spain", tz: "Europe/Madrid", flag: "🇪🇸" },
  { labelEs: "Reino Unido", labelEn: "United Kingdom", tz: "Europe/London", flag: "🇬🇧" },
  { labelEs: "Japón", labelEn: "Japan", tz: "Asia/Tokyo", flag: "🇯🇵" }
];

function formatTime(date: Date, tz: string, locale: string) {
  return new Intl.DateTimeFormat(locale, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: tz
  }).format(date);
}

function formatDate(date: Date, tz: string, locale: string) {
  return new Intl.DateTimeFormat(locale, {
    weekday: "short",
    day: "2-digit",
    month: "short",
    timeZone: tz
  }).format(date);
}

function offsetLabel(date: Date, tz: string) {
  try {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: tz,
      timeZoneName: "shortOffset"
    }).formatToParts(date);
    return parts.find((p) => p.type === "timeZoneName")?.value ?? "";
  } catch {
    return "";
  }
}

export default function WorldClock({ open, onClose }: Props) {
  const { language, t } = useLanguage();
  const [now, setNow] = useState<Date | null>(null);

  const localTz = useMemo(() => {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch {
      return "UTC";
    }
  }, []);

  const locale = language === "es" ? "es-ES" : "en-US";

  useEffect(() => {
    if (!open) return;
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, [open]);

  if (!open || !now) return null;

  return (
    <div
      className="world-clock-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={t.worldClock.title}
    >
      <div
        className="world-clock relative w-full max-w-md animate-scaleIn rounded-2xl border border-cyber-gold/60 bg-black/95 p-6 text-center shadow-[0_0_28px_rgba(250,204,21,0.22)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label={language === "es" ? "Cerrar" : "Close"}
          className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black text-sm text-white transition hover:border-cyber-neonGreen"
        >
          ✕
        </button>

        {/* Zona local detectada */}
        <div className="mt-4 rounded-xl border border-cyber-neonGreen/40 bg-white/5 p-4 text-center">
          <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyber-neonGreen">
            {t.worldClock.local}
          </div>
          <div className="mt-1 font-mono text-3xl font-bold text-white tabular-nums">
            {formatTime(now, localTz, locale)}
          </div>
          <div className="mt-1 flex flex-wrap items-center justify-center gap-x-2 text-xs text-white/70">
            <span>{localTz.replace(/_/g, " ")}</span>
            <span className="text-cyber-gold">{offsetLabel(now, localTz)}</span>
            <span>• {formatDate(now, localTz, locale)}</span>
          </div>
        </div>

        {/* Otras zonas del mundo */}
        <div className="mt-4">
          <div className="mb-2 text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">
            {t.worldClock.world}
          </div>
          <ul className="max-h-64 space-y-1 overflow-y-auto pr-1">
            {ZONES.map((zone) => {
              const isLocal = zone.tz === localTz;
              return (
                <li
                  key={zone.tz}
                  className={`flex items-center justify-between rounded-lg border px-3 py-2 text-sm ${
                    isLocal
                      ? "border-cyber-neonGreen/50 bg-cyber-neonGreen/10"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <span className="flex items-center gap-2 text-white/80">
                    <span aria-hidden>{zone.flag}</span>
                    {language === "es" ? zone.labelEs : zone.labelEn}
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="font-mono text-white tabular-nums">
                      {formatTime(now, zone.tz, locale)}
                    </span>
                    <span className="text-[10px] text-cyber-gold">{offsetLabel(now, zone.tz)}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
