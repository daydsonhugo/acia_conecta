type BrandMarkProps = {
  light?: boolean;
};

export function BrandMark({ light = false }: BrandMarkProps) {
  const subtitleClassName = light ? "text-white/70" : "text-conecta-700";
  const titleClassName = light ? "text-white" : "text-conecta-900";
  const logoImageClassName = light
    ? "drop-shadow-[0_14px_28px_rgba(0,0,0,0.22)]"
    : "drop-shadow-[0_10px_20px_rgba(6,20,15,0.10)]";

  return (
    <div className="flex items-center gap-3">
      <div className="flex h-14 w-[9.25rem] items-center justify-center">
        <img
          src="/images/logo_acia_conecta.png"
          alt="Logo ACIA Conecta"
          className={`h-auto w-full max-w-[7.9rem] rounded-[1rem] object-contain ${logoImageClassName}`}
        />
      </div>
      <div>
        <p className={`text-[11px] uppercase tracking-[0.28em] ${subtitleClassName}`}>
          Araguari • MG
        </p>
        <p className={`font-display text-lg font-semibold ${titleClassName}`}>ACIA Conecta</p>
      </div>
    </div>
  );
}
