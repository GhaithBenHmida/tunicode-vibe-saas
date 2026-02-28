import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User, CreditCard, FolderKanban, LogOut, Save } from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import PricingSection from '../components/PricingSection'
import GridBackground from '../components/ui/GridBackground'

export default function Profile() {
  const [activeTab, setActiveTab] = useState('account_info')
  const [userName, setUserName] = useState('Alex Rivera')
  const navigate = useNavigate()

  const menuItems = [
    { id: 'account_info', label: 'Account Info', icon: User },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'myprojects', label: 'My Projects', icon: FolderKanban, onClick: () => navigate('/my-projects') },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'account_info':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-tight">Personal Details</h2>
              <p className="text-sm text-zinc-500">Manage your profile information and preferences.</p>
            </div>

            <Card className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  label="Username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <Input 
                  label="Email Address"
                  value="alex.rivera@example.com"
                  disabled
                  className="opacity-50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-1">Current Plan</label>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-lg bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase">
                    Starter Plan
                  </span>
                </div>
              </div>
              <div className="pt-4">
                <Button variant="brand" className="w-full sm:w-auto">
                  <Save size={16} />
                  Save Changes
                </Button>
              </div>
            </Card>
          </div>
        )
      case 'billing':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-tight">Subscription</h2>
              <p className="text-sm text-zinc-500">Manage your billing details and active plan.</p>
            </div>

            <Card className="p-8 bg-zinc-900/50">
               <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                 <div className="space-y-4">
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Active Plan</p>
                      <p className="text-lg font-semibold">Starter Monthly</p>
                    </div>
                    <div className="flex gap-8">
                      <div>
                        <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Start Date</p>
                        <p className="text-sm">Oct 12, 2023</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Next Billing</p>
                        <p className="text-sm">Nov 12, 2024</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Amount</p>
                        <p className="text-sm font-semibold text-brand-blue">15.00 DT</p>
                      </div>
                    </div>
                 </div>
                 <Button variant="secondary" className="!rounded-2xl">Manage Cards</Button>
               </div>
            </Card>

            <div className="pt-12 border-t border-zinc-200/10">
              <PricingSection title="Upgrade Your Plan" subtitle="Scale your productivity with more requests and advanced features." />
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 relative">
      <GridBackground />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full lg:w-72 flex flex-col gap-1">
          <div className="p-4 mb-4">
             <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-4">Settings</p>
             <div className="flex flex-col gap-1">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={item.onClick || (() => setActiveTab(item.id))}
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all ${ 
                      activeTab === item.id 
                      ? 'bg-zinc-100 text-zinc-950' 
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50'
                    }`}
                  >
                    <item.icon size={18} />
                    {item.label}
                  </button>
                ))}
             </div>
          </div>

          <div className="mt-auto p-4 border-t border-zinc-200/10">
             <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium text-red-400 hover:bg-red-500/10 transition-all">
                <LogOut size={18} />
                Logout
             </button>
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-1">
          {renderContent()}
        </div>
      </div>
    </div>
  )
}