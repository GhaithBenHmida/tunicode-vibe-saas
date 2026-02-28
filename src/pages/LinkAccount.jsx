import { Github } from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

export default function LinkAccount() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <Card className="w-full max-w-md p-10 space-y-8 !bg-zinc-900 shadow-2xl">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">Link GitHub</h1>
          <p className="text-zinc-400 text-sm">Connect your account to enable seamless deployment.</p>
        </div>

        <Button variant="primary" className="w-full py-4">
          <Github size={20} />
          Continue with GitHub
        </Button>

        <p className="text-center text-xs text-zinc-500">
          By linking your account, you agree to our <span className="text-brand-blue cursor-pointer">Terms of Service</span>.
        </p>
      </Card>
    </div>
  )
}