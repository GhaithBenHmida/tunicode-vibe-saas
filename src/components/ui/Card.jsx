export default function Card({ children, className = "", gradient = false }) {
  return (
    <div className={`
      rounded-2xl border border-zinc-200/10 overflow-hidden
      ${gradient ? 'bg-gradient-to-b from-zinc-900 to-zinc-950' : 'bg-zinc-900/50'}
      shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300
      ${className}
    `}>
      {children}
    </div>
  );
}