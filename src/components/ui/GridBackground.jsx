export default function GridBackground() {
  return (
    <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden">
      <div className="absolute inset-0 neon-grid" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-blue/5 blur-[120px] rounded-full" />
    </div>
  );
}