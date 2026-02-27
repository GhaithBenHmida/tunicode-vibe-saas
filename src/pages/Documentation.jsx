export default function Documentation() {
  const sections = [
    { id: 'best-practices', title: 'Best Practices' },
    { id: 'prompts', title: 'Prompt Engineering' },
    { id: 'assets', title: 'Asset Optimization' },
    { id: 'deployment', title: 'Deployment' }
  ]

  return (
    <div className="pt-24 min-h-screen max-w-7xl mx-auto px-6 flex gap-12">
      <aside className="w-64 hidden lg:block sticky top-24 h-fit space-y-2">
        {sections.map(s => (
          <button key={s.id} className="w-full text-left px-4 py-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
            {s.title}
          </button>
        ))}
      </aside>

      <div className="flex-1 space-y-12 pb-20">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Documentation</h1>
          <p className="text-lg text-zinc-400">Learn how to build and deploy modern applications with TuniCode.</p>
        </header>

        <section className="space-y-6">
          <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-200/10 space-y-4">
            <h2 className="text-xl font-semibold">Writing Effective Prompts</h2>
            <p className="text-zinc-400 leading-relaxed">
              To get the best results from the Vibe Coding interface, be specific about the technology stack and design patterns you prefer.
            </p>
            <div className="p-4 rounded-xl bg-zinc-950 font-mono text-sm text-zinc-300 border border-zinc-200/5">
              "Build a SaaS dashboard using Tailwind CSS and React. Focus on soft shadows, rounded corners, and a zinc color palette."
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-200/10 space-y-4">
            <h2 className="text-xl font-semibold">Code Structure</h2>
            <p className="text-zinc-400 leading-relaxed">
              TuniCode follows a clean architecture pattern, separating UI components from business logic.
            </p>
            <pre className="p-4 rounded-xl bg-zinc-950 font-mono text-sm text-blue-400 overflow-x-auto">
              <code>{
`src/
  components/  # UI Elements
  pages/       # Route components
  hooks/       # Business logic
  utils/       # Helper functions`}</code>
            </pre>
          </div>
        </section>
      </div>
    </div>
  )
}