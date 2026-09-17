export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="3.4" fill="currentColor" className="text-cyan-600" />
      <circle cx="5" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.4" className="text-slate-700/70" />
      <circle cx="27" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.4" className="text-slate-700/70" />
      <circle cx="16" cy="28" r="2.4" stroke="currentColor" strokeWidth="1.4" className="text-slate-700/70" />
      <path
        d="M6.7 9.6 14 15M25.3 9.6 18 15M16 19.4V25.6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        className="text-slate-500/50"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark className="h-7 w-7" />
      <div className="leading-none">
        <p className="text-[15px] font-semibold tracking-wide text-slate-900">康全電訊</p>
        <p className="mt-1 text-[10px] tracking-[0.25em] text-slate-400">COMTREND</p>
      </div>
    </div>
  );
}
