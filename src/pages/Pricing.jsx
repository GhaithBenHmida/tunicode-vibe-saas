import PricingSection from '../components/PricingSection';
import GridBackground from '../components/ui/GridBackground';

export default function Pricing() {
  return (
    <div className="min-h-screen relative pt-32 pb-20 px-6">
      <GridBackground />
      <div className="max-w-7xl mx-auto">
        <PricingSection 
          title="Build without limits"
          subtitle="From solo hobbyists to full-scale agencies, we have a plan that grows with your vision."
        />

        <div className="mt-32 max-w-3xl mx-auto text-center space-y-12">
           <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
              <p className="text-zinc-400">Everything you need to know about TuniCode pricing.</p>
           </div>
           
           <div className="grid gap-4">
              {[ 
                { q: "What happens when I reach my request limit?", a: "Requests will be paused until the next day reset or you can upgrade to a higher tier instantly." },
                { q: "Can I cancel my subscription anytime?", a: "Yes, you can cancel at any time through your dashboard. You will retain access until the end of your billing cycle." },
                { q: "Is the 5% discount permanent?", a: "Yes, as long as you maintain an active yearly subscription, you will benefit from the discounted rate." }
              ].map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-200/5 text-left">
                  <h4 className="text-sm font-semibold text-zinc-100 mb-2">{faq.q}</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}