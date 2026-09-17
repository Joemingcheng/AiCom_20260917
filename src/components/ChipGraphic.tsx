export function ChipGraphic() {
  const pins = [70, 110, 150, 190, 230, 270];

  return (
    <svg viewBox="0 0 400 400" fill="none" className="mx-auto w-full max-w-sm" aria-hidden="true">
      {/* cloud (ACS) */}
      <g opacity="0.85">
        <path
          d="M120 96h120a34 34 0 0 0 0-68 44 44 0 0 0-84-12 34 34 0 0 0-36 80Z"
          stroke="#0f172a"
          strokeOpacity="0.22"
        />
        <circle cx="180" cy="62" r="3" className="fill-cyan-600" />
      </g>
      <path d="M180 96 V150" stroke="#0f172a" strokeOpacity="0.2" strokeDasharray="3 5" />

      {/* chip pins */}
      {pins.map((y) => (
        <g key={`l-${y}`}>
          <rect x="96" y={y - 3} width="20" height="6" rx="1.5" fill="#64748b" fillOpacity="0.6" />
          <rect x="284" y={y - 3} width="20" height="6" rx="1.5" fill="#64748b" fillOpacity="0.6" />
        </g>
      ))}
      {[130, 170, 210, 250].map((x) => (
        <g key={`t-${x}`}>
          <rect x={x - 3} y="164" width="6" height="20" rx="1.5" fill="#64748b" fillOpacity="0.6" />
          <rect x={x - 3} y="316" width="6" height="20" rx="1.5" fill="#64748b" fillOpacity="0.6" />
        </g>
      ))}

      {/* chip body */}
      <rect x="116" y="184" width="168" height="132" rx="16" fill="#0b1220" stroke="white" strokeOpacity="0.18" />
      <rect x="116" y="184" width="168" height="132" rx="16" fill="url(#chipSheen)" />

      <text
        x="200"
        y="236"
        textAnchor="middle"
        fontSize="15"
        fontFamily="ui-monospace, monospace"
        fill="white"
        fillOpacity="0.75"
      >
        ESP32
      </text>

      {/* mini neural grid = on-device AI */}
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <circle
            key={`${row}-${col}`}
            cx={158 + col * 30}
            cy={262 + row * 18}
            r="2.2"
            className={row === 1 && col === 2 ? "fill-cyan-300" : "fill-white/20"}
          />
        )),
      )}

      <defs>
        <linearGradient id="chipSheen" x1="116" y1="184" x2="284" y2="316" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.06" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
