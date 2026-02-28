import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Image, X, ChevronRight } from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import GridBackground from '../components/ui/GridBackground'

export default function Home() {
  const [prompt, setPrompt] = useState('')
  const [images, setImages] = useState([])
  const fileInputRef = useRef(null)
  const navigate = useNavigate()

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    const newImages = files.map(file => URL.createObjectURL(file))
    setImages([...images, ...newImages])
  }

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index))
  }

  const projects = [
    { id: 1, title: 'Dashboard UI', desc: 'Modern metrics tracking layout', thumb: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400' },
    { id: 2, title: 'E-commerce App', desc: 'Minimalist product grid design', thumb: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=400' },
    { id: 3, title: 'AI Portfolio', desc: 'Dark themed portfolio for creatives', thumb: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400' },
  ]

  return (
    <div className="relative pt-32 pb-20 px-6 overflow-hidden">
      <GridBackground />
      
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <div className="w-full space-y-6">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold tracking-tight text-zinc-100">
              Build with <span className="text-brand-blue">Vibe</span>
            </h1>
            <p className="text-zinc-400 max-w-lg mx-auto">Generate high-end applications with a single prompt. Powered by TuniCode Architecture.</p>
          </div>

          <div className="relative rounded-2xl bg-zinc-900 border border-zinc-200/10 shadow-2xl p-2 transition-all focus-within:border-brand-blue/30">
            <textarea
              className="w-full bg-transparent border-none text-lg p-4 focus:ring-0 resize-none min-h-[120px]"
              placeholder="Describe what you want to build..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            
            <div className="flex flex-wrap gap-2 px-4 pb-2">
              {images.map((img, i) => (
                <div key={i} className="relative group">
                  <img src={img} className="w-12 h-12 object-cover rounded-lg border border-zinc-200/10" />
                  <button 
                    onClick={() => removeImage(i)}
                    className="absolute -top-1 -right-1 bg-zinc-950 rounded-full p-0.5 border border-zinc-200/10 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  >
                    <X size={10} />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between p-2 border-t border-zinc-200/10">
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="p-2 text-zinc-400 hover:text-brand-blue transition-colors cursor-pointer"
              >
                <Image size={20} />
                <input type="file" multiple ref={fileInputRef} className="hidden" onChange={handleImageUpload} />
              </button>
              <Button 
                variant="brand" 
                onClick={() => navigate('/workspace?p_id=new')}
              >
                Generate Project
              </Button>
            </div>
          </div>
          
          <p className="text-center text-[10px] text-zinc-500 font-bold tracking-widest uppercase">
            AI-Powered • Custom Engine • <span className="text-brand-blue">V1.0</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-32 space-y-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Global Projects</h2>
          <button className="text-sm text-zinc-400 hover:text-brand-blue flex items-center gap-1 transition-colors cursor-pointer">
            View All <ChevronRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <Card key={p.id} className="group hover:border-brand-blue/20 hover:-translate-y-1">
              <div className="aspect-video w-full overflow-hidden bg-zinc-800">
                <img src={p.thumb} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-sm text-zinc-400">{p.desc}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center pt-8">
           <Button variant="secondary" className="px-12">
             Browse All Projects
           </Button>
        </div>
      </div>
    </div>
  )
}