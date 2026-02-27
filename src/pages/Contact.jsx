import { Mail, MessageSquare, Twitter, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-900 border border-zinc-200/10 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
              Contact Us
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100">Get in touch</h1>
            <p className="text-lg text-zinc-400 max-w-md leading-relaxed">
              Have questions about TuniCode? We're here to help you build the future of software with intelligence and style.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-5 text-zinc-400 hover:text-zinc-100 transition-colors group cursor-default">
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-200/10 flex items-center justify-center group-hover:border-zinc-200/30 transition-all duration-300">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Email</p>
                <p className="text-sm font-medium">hello@tunicode.ai</p>
              </div>
            </div>

            <div className="flex items-center gap-5 text-zinc-400 hover:text-zinc-100 transition-colors group cursor-default">
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-200/10 flex items-center justify-center group-hover:border-zinc-200/30 transition-all duration-300">
                <Twitter size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Twitter</p>
                <p className="text-sm font-medium">@tunicode_ai</p>
              </div>
            </div>

            <div className="flex items-center gap-5 text-zinc-400 hover:text-zinc-100 transition-colors group cursor-default">
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-200/10 flex items-center justify-center group-hover:border-zinc-200/30 transition-all duration-300">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Office</p>
                <p className="text-sm font-medium">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-200/10 p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-zinc-100/5 blur-[100px] rounded-full group-hover:bg-zinc-100/10 transition-colors duration-700" />
          
          <form className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-1">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-zinc-950 border border-zinc-200/10 rounded-2xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-zinc-200/40 focus:ring-1 focus:ring-zinc-200/10 transition-all duration-200 placeholder:text-zinc-700"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-1">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-zinc-950 border border-zinc-200/10 rounded-2xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-zinc-200/40 focus:ring-1 focus:ring-zinc-200/10 transition-all duration-200 placeholder:text-zinc-700"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-1">Message</label>
              <textarea 
                className="w-full bg-zinc-950 border border-zinc-200/10 rounded-2xl px-4 py-4 text-sm text-zinc-100 focus:outline-none focus:border-zinc-200/40 focus:ring-1 focus:ring-zinc-200/10 transition-all duration-200 min-h-[160px] resize-none placeholder:text-zinc-700"
                placeholder="Tell us about your project..."
              />
            </div>

            <button 
              type="button"
              className="w-full py-4 rounded-3xl bg-zinc-100 text-zinc-950 font-bold text-sm hover:bg-white transition-all duration-200 transform active:scale-[0.98] flex items-center justify-center gap-2 shadow-xl"
            >
              <MessageSquare size={16} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}