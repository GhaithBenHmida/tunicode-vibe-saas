import { Mail, MessageSquare, Twitter, MapPin } from 'lucide-react'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Card from '../components/ui/Card'

export default function Contact() {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-900 border border-zinc-200/10 text-[10px] font-bold uppercase tracking-widest text-brand-blue">
              Contact Us
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100">Get in touch</h1>
            <p className="text-lg text-zinc-400 max-w-md leading-relaxed">
              Have questions about TuniCode? We're here to help you build the future of software.
            </p>
          </div>

          <div className="space-y-6">
            {[ 
              { icon: Mail, label: 'Email', value: 'hello@tunicode.ai' },
              { icon: Twitter, label: 'Twitter', value: '@tunicode_ai' },
              { icon: MapPin, label: 'Office', value: 'San Francisco, CA' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-5 text-zinc-400 hover:text-zinc-100 transition-colors group cursor-default">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-200/10 flex items-center justify-center group-hover:border-brand-blue/30 transition-all duration-300">
                  <item.icon size={20} className="group-hover:text-brand-blue transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">{item.label}</p>
                  <p className="text-sm font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Card gradient className="p-8 lg:p-10 relative group">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-blue/5 blur-[100px] rounded-full group-hover:bg-brand-blue/10 transition-colors duration-700" />
          
          <form className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Name" placeholder="John Doe" />
              <Input label="Email" placeholder="john@example.com" type="email" />
            </div>
            
            <div className="space-y-2.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-1">Message</label>
              <textarea 
                className="w-full bg-zinc-950 border border-zinc-200/10 rounded-2xl px-4 py-4 text-sm text-zinc-100 focus:outline-none focus:border-brand-blue/40 focus:ring-1 focus:ring-brand-blue/10 transition-all duration-200 min-h-[160px] resize-none placeholder:text-zinc-700"
                placeholder="Tell us about your project..."
              />
            </div>

            <Button variant="brand" className="w-full py-4 shadow-xl">
              <MessageSquare size={16} />
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </div>
  )
}