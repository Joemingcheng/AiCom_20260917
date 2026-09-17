import type { ReactNode } from "react";

type Variant = "security" | "retail" | "factory" | "home" | "eldercare";

function SecurityIcon() {
  return (
    <svg viewBox="0 0 160 100" fill="none" className="h-full w-full" aria-hidden="true">
      {/* building */}
      <rect x="24" y="22" width="66" height="62" rx="3" stroke="#0f172a" strokeOpacity="0.3" />
      {[0, 1, 2].map((r) =>
        [0, 1].map((c) => (
          <rect
            key={`${r}-${c}`}
            x={36 + c * 24}
            y={34 + r * 16}
            width="12"
            height="10"
            rx="1"
            fill="#0f172a"
            fillOpacity={r === 1 && c === 1 ? 0.22 : 0.12}
          />
        )),
      )}
      {/* camera + scan cone */}
      <path d="M100 30 118 22 118 40 100 34Z" fill="#0f172a" fillOpacity="0.16" stroke="#0f172a" strokeOpacity="0.3" />
      <path d="M118 24 148 8M118 38 148 54" stroke="#0e7490" strokeOpacity="0.45" strokeDasharray="2 4" />
      <circle cx="134" cy="62" r="4" className="fill-cyan-600" />
      <circle cx="134" cy="62" r="10" stroke="#0e7490" strokeOpacity="0.5" />
    </svg>
  );
}

function RetailIcon() {
  const shelfY = [24, 46, 68];
  const items = [
    [0.12, 0.8],
    [1, 1, 0.15],
    [0.9, 0.85, 1],
  ];
  return (
    <svg viewBox="0 0 160 100" fill="none" className="h-full w-full" aria-hidden="true">
      {shelfY.map((y, i) => (
        <g key={y}>
          <line x1="20" y1={y} x2="132" y2={y} stroke="#0f172a" strokeOpacity="0.28" />
          {items[i].map((op, j) => (
            <rect
              key={j}
              x={28 + j * 26}
              y={y - 16}
              width="18"
              height="16"
              rx="2"
              fill={op === items[i][2] && op < 0.3 ? "none" : "#0f172a"}
              fillOpacity={op < 0.3 ? 0 : 0.14 * op + 0.08}
              stroke={op < 0.3 ? "#0e7490" : "#0f172a"}
              strokeOpacity={op < 0.3 ? 0.5 : 0.22}
              strokeDasharray={op < 0.3 ? "2 3" : undefined}
            />
          ))}
        </g>
      ))}
      {/* foot traffic path */}
      <path d="M110 84 C128 70 130 40 142 20" stroke="#0e7490" strokeOpacity="0.5" strokeDasharray="2 4" />
      <circle cx="142" cy="20" r="3.5" className="fill-cyan-600" />
    </svg>
  );
}

function FactoryIcon() {
  return (
    <svg viewBox="0 0 160 100" fill="none" className="h-full w-full" aria-hidden="true">
      {/* gear */}
      <g stroke="#0f172a" strokeOpacity="0.3">
        <circle cx="40" cy="52" r="20" />
        <circle cx="40" cy="52" r="7" />
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * Math.PI) / 4;
          const x1 = 40 + Math.cos(angle) * 20;
          const y1 = 52 + Math.sin(angle) * 20;
          const x2 = 40 + Math.cos(angle) * 26;
          const y2 = 52 + Math.sin(angle) * 26;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>
      {/* vibration waveform */}
      <path
        d="M76 52 88 52 94 30 102 74 110 40 118 60 126 52 140 52"
        stroke="#0e7490"
        strokeOpacity="0.65"
        strokeWidth="1.6"
      />
      <circle cx="102" cy="74" r="3.5" className="fill-cyan-600" />
      <path d="M96 66 L102 74 L108 66" stroke="#0f172a" strokeOpacity="0.4" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 160 100" fill="none" className="h-full w-full" aria-hidden="true">
      {/* house */}
      <path d="M30 54 66 28 102 54" stroke="#0f172a" strokeOpacity="0.32" />
      <rect x="38" y="54" width="56" height="34" rx="2" stroke="#0f172a" strokeOpacity="0.3" />
      <rect x="58" y="68" width="16" height="20" fill="#0f172a" fillOpacity="0.12" />
      {/* energy bolt */}
      <path d="M70 60 62 74 68 74 64 86 78 68 71 68Z" className="fill-cyan-600" />
      {/* mesh signal */}
      <path d="M114 44 A 20 20 0 0 1 146 44" stroke="#0e7490" strokeOpacity="0.4" strokeWidth="1.6" />
      <path d="M120 52 A 12 12 0 0 1 140 52" stroke="#0e7490" strokeOpacity="0.6" strokeWidth="1.6" />
      <circle cx="130" cy="60" r="3" className="fill-cyan-600" />
      {/* gauge */}
      <path d="M112 88 A 18 18 0 0 1 148 88" stroke="#0f172a" strokeOpacity="0.22" />
      <circle cx="130" cy="88" r="2" fill="#0f172a" fillOpacity="0.4" />
    </svg>
  );
}

function ElderCareIcon() {
  return (
    <svg viewBox="0 0 160 100" fill="none" className="h-full w-full" aria-hidden="true">
      {/* WiFi access point */}
      <rect x="14" y="58" width="18" height="10" rx="2" stroke="#0f172a" strokeOpacity="0.32" />
      <path d="M18 58 L18 50 M28 58 L28 50" stroke="#0f172a" strokeOpacity="0.32" strokeLinecap="round" />
      <circle cx="18" cy="63" r="1.6" fill="#0f172a" fillOpacity="0.3" />
      <circle cx="28" cy="63" r="1.6" fill="#0f172a" fillOpacity="0.3" />

      {/* CSI signal sweeping through the room toward the person */}
      <path d="M36 52 A 62 62 0 0 1 66 16" stroke="#0e7490" strokeOpacity="0.3" strokeWidth="1.6" />
      <path d="M34 64 A 74 74 0 0 1 98 22" stroke="#0e7490" strokeOpacity="0.42" strokeWidth="1.6" />
      <path d="M34 74 A 90 90 0 0 1 120 36" stroke="#0e7490" strokeOpacity="0.55" strokeWidth="1.6" />

      {/* person silhouette, no camera in sight */}
      <circle cx="120" cy="40" r="7" fill="#0f172a" fillOpacity="0.28" />
      <path d="M106 82 C106 66 134 66 134 82" fill="#0f172a" fillOpacity="0.2" />

      {/* motion / anomaly detection ping */}
      <circle cx="120" cy="40" r="16" stroke="#0e7490" strokeOpacity="0.4" />
      <circle cx="136" cy="25" r="3.5" className="fill-cyan-600" />
    </svg>
  );
}

const icons: Record<Variant, () => ReactNode> = {
  security: SecurityIcon,
  retail: RetailIcon,
  factory: FactoryIcon,
  home: HomeIcon,
  eldercare: ElderCareIcon,
};

export function CaseGraphic({ variant }: { variant: Variant }) {
  const Icon = icons[variant];
  return (
    <div className="h-28 w-full rounded-xl border border-slate-900/8 bg-slate-900/[0.015] p-3 sm:h-32">
      <Icon />
    </div>
  );
}
