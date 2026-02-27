import { useState, useRef } from 'react'
import { 
  Maximize2, 
  Monitor, 
  Smartphone, 
  ExternalLink, 
  Send, 
  Paperclip, 
  RotateCcw,
  AlertCircle,
  ChevronLeft,
  History,
  Layers,
  MessageSquare,
  Eye
} from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'

export default function Workspace() {
  const [searchParams] = useSearchParams()
  const projectId = searchParams.get('p_id')
  const [view, setView] = useState('desktop')
  const [activeTab, setActiveTab] = useState('chat')
  const [prompt, setPrompt] = useState('')
  const fileInputRef = useRef(null)

  const messages = [
    { 
      role: 'user', 
      content: 'Build a minimalist landing page for a creative agency. Use a dark theme with neon accents, a bento grid layout for services, and a contact form with glassmorphism effects.' 
    },
    { 
      role: 'ai', 
      content: 'I have updated the design with a custom Bento Grid implementation and refined the neon accent palette (Zinc-100 with Emerald-400 glows). The architecture follows TuniCode standards.',
      version: '2.2'
    }
  ]

  const ErrorComponent = () => (
    <div className="mx-6 my-4 p-5 rounded-2xl bg-red-500/5 border border-red-500/20 flex flex-col gap-3 group animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-red-500/10 text-red-500">
          <AlertCircle size={18} />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-red-200">Preview Sync Failed</h4>
          <p className="text-xs text-red-400/80">Unable to hot-reload the latest changes to the frame.</p>
        </div>
      </div>
      <button className="w-full py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-bold transition-all border border-red-500/20 active:scale-95">
        TRY AGAIN
      </button>
    </div>
  )

  return (
    <div className="h-screen w-full flex bg-zinc-950 overflow-hidden selection:bg-zinc-100 selection:text-zinc-950">
      {/* Mobile Tab Switcher */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex bg-zinc-900/80 backdrop-blur-xl border border-zinc-200/10 p-1.5 rounded-3xl shadow-2xl items-center">
        <button 
          onClick={() => setActiveTab('chat')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-2xl text-xs font-bold transition-all ${activeTab === 'chat' ? 'bg-zinc-100 text-zinc-950 shadow-xl' : 'text-zinc-400 hover:text-zinc-200'}`}
        >
          <MessageSquare size={16} />
          Chat
        </button>
        <button 
          onClick={() => setActiveTab('preview')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-2xl text-xs font-bold transition-all ${activeTab === 'preview' ? 'bg-zinc-100 text-zinc-950 shadow-xl' : 'text-zinc-400 hover:text-zinc-200'}`}
        >
          <Eye size={16} />
          Preview
        </button>
      </div>

      {/* Left Panel: Conversation */}
      <div className={`w-full lg:w-[380px] xl:w-[420px] flex-shrink-0 flex flex-col border-r border-zinc-200/10 glass z-10 transition-transform duration-300 ${activeTab === 'preview' ? 'max-lg:hidden' : 'max-lg:flex'}`}>
        <header className="h-16 px-6 border-b border-zinc-200/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="p-2 -ml-2 text-zinc-500 hover:text-zinc-100 hover:bg-zinc-900 rounded-xl transition-all">
              <ChevronLeft size={20} />
            </Link>
            <div>
              <h1 className="text-xs font-semibold tracking-tight truncate max-w-[120px]">{projectId === 'new' ? 'Untitled' : 'Creative Agency'}</h1>
              <p className="text-[9px] text-zinc-500 font-mono uppercase">Syncing</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
             <button className="p-2 text-zinc-400 hover:text-zinc-100">
               <History size={16} />
             </button>
             <button className="p-2 text-zinc-400 hover:text-zinc-100">
               <Layers size={16} />
             </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto pt-6 pb-24 custom-scrollbar">
          <div className="px-6 space-y-8">
            {messages.map((msg, i) => (
              <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div 
                  className={`max-w-[90%] px-5 py-4 rounded-3xl text-[13px] leading-relaxed ${ 
                    msg.role === 'user' 
                    ? 'bg-zinc-100 text-zinc-950 font-medium' 
                    : 'bg-zinc-900/50 text-zinc-300 border border-zinc-200/5 shadow-sm'
                  }`}
                >
                  {msg.content}
                </div>
                
                {msg.role === 'ai' && msg.version && (
                  <div className="mt-3">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-zinc-900 border border-zinc-200/10 text-[10px] font-bold text-zinc-400 hover:text-zinc-100 hover:border-zinc-200/30 transition-all active:scale-95">
                      <RotateCcw size={12} className="text-zinc-500" />
                      RESTORE V{msg.version}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
          <ErrorComponent />
        </div>

        <div className="p-4 xl:p-6 bg-zinc-950/50 border-t border-zinc-200/10">
          <div className="relative rounded-3xl bg-zinc-900 border border-zinc-200/10 p-3 focus-within:border-zinc-200/30 transition-all">
            <textarea 
              className="w-full bg-transparent border-none text-[13px] px-3 py-2 focus:ring-0 resize-none h-20 xl:h-24 placeholder:text-zinc-600"
              placeholder="Type instructions..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <div className="flex items-center justify-between pt-2 border-t border-zinc-200/5">
               <button 
                onClick={() => fileInputRef.current?.click()}
                className="p-2 text-zinc-500 hover:text-zinc-100 hover:bg-zinc-800 rounded-xl transition-all"
               >
                 <Paperclip size={18} />
                 <input type="file" ref={fileInputRef} className="hidden" />
               </button>
               <button className="bg-zinc-100 px-4 py-1.5 rounded-2xl text-zinc-950 hover:bg-white text-[11px] font-black uppercase tracking-wider flex items-center gap-2 transition-all active:scale-95">
                 <span>Update</span>
                 <Send size={14} />
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel: Preview */}
      <div className={`flex-1 bg-zinc-950 flex flex-col relative transition-transform duration-300 ${activeTab === 'chat' ? 'max-lg:hidden' : 'max-lg:flex'}`}>
        <div className="h-16 flex items-center justify-between px-6 border-b border-zinc-200/10 bg-zinc-950/50 backdrop-blur-sm z-10">
          <div className="flex items-center gap-1 bg-zinc-900/80 p-1 rounded-2xl border border-zinc-200/5">
            <button 
              onClick={() => setView('desktop')}
              className={`p-2 rounded-xl transition-all ${view === 'desktop' ? 'bg-zinc-800 text-zinc-100' : 'text-zinc-500 hover:text-zinc-300'}`}
              title="Desktop"
            >
              <Monitor size={16} />
            </button>
            <button 
              onClick={() => setView('phone')}
              className={`p-2 rounded-xl transition-all ${view === 'phone' ? 'bg-zinc-800 text-zinc-100' : 'text-zinc-500 hover:text-zinc-300'}`}
              title="Phone"
            >
              <Smartphone size={16} />
            </button>
            <div className="w-px h-3 bg-zinc-200/10 mx-1" />
            <button className="p-2 text-zinc-500 hover:text-zinc-100 transition-colors" title="Maximize">
              <Maximize2 size={16} />
            </button>
          </div>
          
          <button className="group text-[10px] font-black tracking-widest text-zinc-400 hover:text-zinc-100 flex items-center gap-2 px-5 py-2.5 rounded-2xl border border-zinc-200/10 hover:border-zinc-200/30 hover:bg-zinc-900 transition-all active:scale-95">
            LAUNCH
            <ExternalLink size={12} />
          </button>
        </div>

        <div className="flex-1 p-4 lg:p-12 flex items-center justify-center overflow-auto bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_0%,transparent_100%)]">
          <div 
            className={`bg-zinc-900 border border-zinc-200/10 custom-shadow transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden ${
              view === 'desktop' ? 'w-full h-full rounded-2xl' : 'w-[320px] h-[640px] lg:w-[375px] lg:h-[750px] rounded-[3rem] border-[8px] border-zinc-800 shadow-2xl'
            }`}
          >
            <div className="w-full h-full bg-zinc-950 flex flex-col items-center justify-center text-zinc-800">
                <div className="animate-pulse flex flex-col items-center gap-3">
                    <div className="w-10 h-10 rounded-full border-2 border-dashed border-zinc-900" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Rendering</span>
                </div>
                <iframe src="about:blank" className="w-full h-full border-none hidden" title="Live Preview" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}