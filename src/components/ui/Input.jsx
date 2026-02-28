export default function Input({ label, ...props }) {
  return (
    <div className="space-y-2">
      {label && <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-1">{label}</label>}
      <input 
        {...props}
        className="w-full bg-zinc-950 border border-zinc-200/10 rounded-2xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-brand-blue/40 focus:ring-1 focus:ring-brand-blue/10 transition-all duration-200 placeholder:text-zinc-700"
      />
    </div>
  );
}