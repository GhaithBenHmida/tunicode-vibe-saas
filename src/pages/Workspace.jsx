import { useState } from 'react'
import { 
  Maximize2, 
  Monitor, 
  Smartphone, 
  ExternalLink, 
  Send, 
  Image as ImageIcon, 
  RotateCcw,
  AlertCircle,
  ArrowLeft
} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Workspace() {
  const [view, setView] = useState('desktop')
  const [prompt, setPrompt] = useState('')

  const messages = [
    { role: 'user', content: 'Can you build a modern landing page for a coffee brand?' },
    { role: 'ai', content: 'Absolutely! I will create a minimalist layout with rich earth tones, high-quality image placeholders, and a clean navigation menu.' }
  ]

  const ErrorBanner = () => (
    <div className="mx-6 my-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-3">
      <AlertCircle className="text-red-500 shrink-0 mt-0.5" size={16} />
      <div className="space-y-2">
        <p className="text-xs text-red-200">An error occurred while generating the preview. Please check your prompt or retry.</p>
        <button className="text-xs font-bold text-red-400 hover:text-red-300 transition-colors uppercase tracking-wider">Try Again</button>
      </div>
    </div>
  )

  return (
    <div className="h-screen w-full flex flex-col md:flex-row bg-zinc-950 overflow-hidden">
      {/* Left Panel: Conversation */}
      <div className="w-full md:w-[450px] flex flex-col border-r border-zinc-200/10 glass">
        <div className="p-4 border-b border-zinc-200/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
              <ArrowLeft size={18} />
            </Link>
            <h1 className="font-semibold tracking-tight">Coffee Brand Landing</h1>
          </div>
          <span className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-1 rounded-full">v2.2</span>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((msg, i) => (
            <div 
              key={i} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${ 
                  msg.role === 'user' 
                  ? 'bg-zinc-100 text-zinc-950 font-medium' 
                  : 'bg-zinc-900 text-zinc-300 border border-zinc-200/5 shadow-sm'
                }`}
              >
                {msg.content}
                {msg.role === 'ai' && (
                  <div className="mt-4">
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 text-[11px] font-semibold text-zinc-400 hover:text-zinc-100 transition-colors">
                      <RotateCcw size={12} />
                      Back up v2.2
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
          <ErrorBanner />
        </div>

        <div className="p-4 bg-zinc-950 border-t border-zinc-200/10 space-y-3">
          <div className="relative rounded-xl bg-zinc-900 border border-zinc-200/10 p-2">
            <textarea 
              className="w-full bg-transparent border-none text-sm p-2 focus:ring-0 resize-none h-20"
              placeholder="Ask for adjustments..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <div className="flex items-center justify-between mt-2 px-1">
               <button className="p-1.5 text-zinc-500 hover:text-zinc-100 transition-colors">
                 <ImageIcon size={18} />
               </button>
               <button className="bg-zinc-100 p-1.5 rounded-lg text-zinc-950 hover:bg-zinc-200">
                 <Send size={18} />
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel: Preview */}
      <div className="flex-1 bg-zinc-900/30 flex flex-col">
        <div className="h-14 glass border-b border-zinc-200/10 flex items-center justify-between px-6">
          <div className="flex items-center bg-zinc-900 rounded-xl p-1 border border-zinc-200/5">
            <button 
              onClick={() => setView('desktop')}
              className={`p-1.5 rounded-lg transition-all ${view === 'desktop' ? 'bg-zinc-800 text-zinc-100' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              <Monitor size={18} />
            </button>
            <button 
              onClick={() => setView('phone')}
              className={`p-1.5 rounded-lg transition-all ${view === 'phone' ? 'bg-zinc-800 text-zinc-100' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              <Smartphone size={18} />
            </button>
            <button className="p-1.5 text-zinc-500 hover:text-zinc-300">
              <Maximize2 size={18} />
            </button>
          </div>
          
          <button className="text-xs font-medium text-zinc-400 hover:text-zinc-100 flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-200/10 hover:bg-zinc-900 transition-all">
            Open in New Tab
            <ExternalLink size={14} />
          </button>
        </div>

        <div className="flex-1 p-6 flex items-center justify-center overflow-auto">
          <div 
            className={`bg-white rounded-xl shadow-2xl transition-all duration-500 overflow-hidden ${
              view === 'desktop' ? 'w-full h-full' : 'w-[375px] h-[667px]'
            }`}
          >
            <iframe 
              src="about:blank" 
              className="w-full h-full border-none"
              title="Live Preview"
            />
          </div>
        </div>
      </div>
    </div>
  )
}