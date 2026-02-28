import { useState } from 'react';
import { Check, Info } from 'lucide-react';
import Card from './ui/Card';
import Button from './ui/Button';

const tiers = [
  {
    label: 'Hobby',
    price: 0,
    features: {
      projects: '1/month',
      requests: '1/day',
      backend: 'No',
      fullstack: 'No',
      customDesign: 'No'
    }
  },
  {
    label: 'Starter',
    price: 15,
    popular: true,
    features: {
      projects: '2/month',
      requests: '10/day',
      backend: 'No',
      fullstack: 'No',
      customDesign: 'Yes'
    }
  },
  {
    label: 'Pro',
    price: 29,
    features: {
      projects: '8/month',
      requests: '40/day',
      backend: 'Coming soon',
      fullstack: 'No',
      customDesign: 'Yes'
    }
  },
  {
    label: 'Agency',
    price: 79,
    features: {
      projects: '25/month',
      requests: 'Unlimited/day',
      backend: 'Coming soon',
      fullstack: 'Coming soon',
      customDesign: 'Yes'
    }
  }
];

export default function PricingSection({ title = "Simple Pricing", subtitle = "Choose the plan that fits your ambition." }) {
  const [isYearly, setIsYearly] = useState(false);

  const calculatePrice = (basePrice) => {
    if (basePrice === 0) return 0;
    const price = isYearly ? basePrice * 0.95 : basePrice;
    return price.toFixed(2);
  };

  return (
    <section className="py-12 space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-100">{title}</h2>
        <p className="text-zinc-400 max-w-lg mx-auto">{subtitle}</p>
        
        <div className="flex items-center justify-center gap-4 pt-4">
          <span className={`text-sm ${!isYearly ? 'text-zinc-100 font-medium' : 'text-zinc-500'}`}>Monthly</span>
          <button 
            onClick={() => setIsYearly(!isYearly)}
            className="w-12 h-6 rounded-full bg-zinc-900 border border-zinc-200/10 relative transition-colors duration-300"
          >
            <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-brand-blue transition-transform duration-300 ${isYearly ? 'translate-x-6' : ''}`} />
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-sm ${isYearly ? 'text-zinc-100 font-medium' : 'text-zinc-500'}`}>Yearly</span>
            <span className="px-2 py-0.5 rounded-full bg-brand-blue/10 text-brand-blue text-[10px] font-bold uppercase tracking-wider">
              5% OFF
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {tiers.map((tier) => (
          <Card 
            key={tier.label} 
            gradient={tier.popular}
            className={`p-8 flex flex-col h-full relative ${tier.popular ? 'border-brand-blue/20 ring-1 ring-brand-blue/20' : ''}`}
          >
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full">
                Most Popular
              </div>
            )}
            
            <div className="space-y-6 flex-1">
              <div className="space-y-1">
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500">{tier.label}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{calculatePrice(tier.price)}</span>
                  <span className="text-zinc-500 text-sm font-medium">DT/mo</span>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-zinc-200/5">
                <FeatureItem label="Projects" value={tier.features.projects} />
                <FeatureItem label="Requests" value={tier.features.requests} />
                <FeatureItem label="Backend" value={tier.features.backend} />
                <FeatureItem label="Full Stack" value={tier.features.fullstack} />
                <FeatureItem label="Custom Design" value={tier.features.customDesign} isBoolean />
              </div>
            </div>

            <div className="pt-10">
              <Button 
                variant={tier.popular ? 'brand' : 'secondary'} 
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function FeatureItem({ label, value, isBoolean = false }) {
  const isAvailable = value !== 'No' && value !== false;
  const isSpecial = value === 'Coming soon';

  return (
    <div className="flex items-start gap-3">
      <div className={`mt-0.5 rounded-full p-0.5 ${isAvailable ? 'text-brand-blue' : 'text-zinc-600'}`}>
        {isAvailable ? <Check size={14} /> : <div className="w-3.5 h-3.5" />}
      </div>
      <div className="space-y-0.5">
        <p className={`text-[13px] ${isAvailable ? 'text-zinc-300' : 'text-zinc-600'}`}>
          <span className="font-medium">{label}:</span> {isBoolean ? '' : value}
        </p>
        {isSpecial && (
          <div className="flex items-center gap-1.5 opacity-60">
            <Info size={10} />
            <span className="text-[9px] uppercase tracking-wider font-bold">Beta</span>
          </div>
        )}
      </div>
    </div>
  );
}