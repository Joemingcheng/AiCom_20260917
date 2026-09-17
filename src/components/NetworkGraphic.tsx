export function NetworkGraphic() {
  return (
    <svg viewBox="0 0 480 480" fill="none" className="w-full max-w-md mx-auto" aria-hidden="true">
      <circle cx="240" cy="270" r="200" stroke="#0f172a" strokeOpacity="0.06" />
      <circle cx="240" cy="270" r="150" stroke="#0f172a" strokeOpacity="0.08" />
      <circle cx="240" cy="270" r="100" stroke="#0f172a" strokeOpacity="0.1" />

      {/* mesh nodes */}
      {[
        [92, 140],
        [388, 150],
        [360, 390],
        [110, 380],
      ].map(([x, y], i) => (
        <g key={i}>
          <line x1={x} y1={y} x2="240" y2="270" stroke="#0f172a" strokeOpacity="0.18" strokeDasharray="3 5" />
          <circle cx={x} cy={y} r="16" fill="#0f172a" fillOpacity="0.03" stroke="#0f172a" strokeOpacity="0.2" />
          <circle cx={x} cy={y} r="3.5" className="fill-cyan-600" />
        </g>
      ))}

      {/* wifi arcs above device */}
      <path d="M186 210 A 76 76 0 0 1 294 210" stroke="#0e7490" strokeOpacity="0.3" strokeWidth="2" />
      <path d="M202 226 A 54 54 0 0 1 278 226" stroke="#0e7490" strokeOpacity="0.5" strokeWidth="2" />
      <path d="M218 242 A 32 32 0 0 1 262 242" stroke="#0e7490" strokeOpacity="0.8" strokeWidth="2" />

      {/* device */}
      <rect x="180" y="252" width="120" height="66" rx="14" fill="#0b1220" stroke="white" strokeOpacity="0.15" />
      <rect x="180" y="252" width="120" height="66" rx="14" fill="url(#deviceSheen)" />
      <circle cx="200" cy="298" r="3" className="fill-cyan-300" />
      <circle cx="213" cy="298" r="3" fill="white" fillOpacity="0.3" />
      <circle cx="226" cy="298" r="3" fill="white" fillOpacity="0.3" />
      <rect x="196" y="270" width="88" height="4" rx="2" fill="white" fillOpacity="0.12" />
      <rect x="196" y="280" width="60" height="4" rx="2" fill="white" fillOpacity="0.08" />

      <defs>
        <linearGradient id="deviceSheen" x1="180" y1="252" x2="300" y2="318" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.06" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
