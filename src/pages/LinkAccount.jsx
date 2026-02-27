import { Github } from 'lucide-react'

export default function LinkAccount() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md p-10 rounded-3xl bg-zinc-900 border border-zinc-200/10 shadow-2xl space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">Link Your GitHub Account</h1>
          <p className="text-zinc-400 text-sm">Connect your GitHub to enable seamless deployment and code storage.</p>
        </div>

        <button className="w-full py-4 px-6 rounded-2xl bg-white text-zinc-950 font-semibold flex items-center justify-center gap-3 hover:bg-zinc-200 transition-all">
          <Github size={20} />
          Continue with GitHub
        </button>

        <p className="text-center text-xs text-zinc-500">
          By linking your account, you agree to our Terms of Service.
        </p>
      </div>
    </div>
  )
}