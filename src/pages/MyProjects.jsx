import { useState, useMemo } from 'react'
import { Search, SortAsc, SortDesc, MoreVertical, Edit2, Trash2, Globe, Lock, Clock, Calendar, Download } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import GridBackground from '../components/ui/GridBackground'
import Modal from '../components/ui/Modal'

const MOCK_PROJECTS = [
  { id: 1, name: 'SaaS Dashboard', status: 'private', lastModified: '2024-03-10T14:30:00Z', lastAdded: '2024-03-01T10:00:00Z', thumb: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400' },
  { id: 2, name: 'Portfolio 2024', status: 'public', lastModified: '2024-03-12T09:15:00Z', lastAdded: '2024-02-15T12:00:00Z', thumb: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400' },
  { id: 3, name: 'E-commerce Redesign', status: 'private', lastModified: '2024-03-05T18:45:00Z', lastAdded: '2024-03-05T18:00:00Z', thumb: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=400' },
  { id: 4, name: 'Crypto Tracker', status: 'public', lastModified: '2024-01-20T11:00:00Z', lastAdded: '2024-01-10T09:00:00Z', thumb: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=400' },
]

export default function MyProjects() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('lastModified')
  const [projects, setProjects] = useState(MOCK_PROJECTS)
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, projectId: null })

  const filteredAndSortedProjects = useMemo(() => {
    return [...projects]
      .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name)
        return new Date(b[sortBy]) - new Date(a[sortBy])
      })
  }, [projects, search, sortBy])

  const handleDelete = () => {
    setProjects(prev => prev.filter(p => p.id !== deleteModal.projectId))
    setDeleteModal({ isOpen: false, projectId: null })
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 relative">
      <GridBackground />
      
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">My Projects</h1>
            <p className="text-zinc-400">Manage and monitor your TuniCode creations.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="secondary" className="!rounded-2xl">
              <Download size={16} />
              Import Projects
            </Button>
            <Button variant="brand" onClick={() => navigate('/?new=true')}>New Project</Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
            <input 
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-200/10 rounded-2xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-brand-blue/40 transition-all"
            />
          </div>

          <div className="flex items-center gap-2 w-full lg:w-auto">
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest hidden sm:block">Sort By:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-1 lg:flex-none bg-zinc-900 border border-zinc-200/10 rounded-2xl px-4 py-3 text-sm focus:outline-none cursor-pointer"
            >
              <option value="lastModified">Last Modified</option>
              <option value="lastAdded">Last Added</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredAndSortedProjects.map((project) => (
            <Card key={project.id} className="group hover:border-zinc-200/20">
              <div className="aspect-[16/9] overflow-hidden bg-zinc-800 relative">
                <img 
                  src={project.thumb} 
                  alt={project.name}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute top-4 right-4">
                   <div className={`px-2 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest backdrop-blur-md border ${project.status === 'public' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-zinc-950/40 border-zinc-200/10 text-zinc-300'}`}>
                    {project.status === 'public' ? <span className="flex items-center gap-1.5"><Globe size={10} /> Public</span> : <span className="flex items-center gap-1.5"><Lock size={10} /> Private</span>}
                   </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg leading-tight mb-1">{project.name}</h3>
                    <div className="flex items-center gap-3 text-[11px] text-zinc-500">
                      <span className="flex items-center gap-1"><Clock size={12}/> {new Date(project.lastModified).toLocaleDateString()}</span>
                      <span className="flex items-center gap-1"><Calendar size={12}/> {new Date(project.lastAdded).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <Button 
                    variant="secondary" 
                    className="flex-1 h-10 rounded-2xl !text-[11px] uppercase tracking-wider"
                    onClick={() => navigate(`/workspace?p_id=${project.id}`)}
                  >
                    <Edit2 size={14} />
                    Edit
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-10 h-10 p-0 rounded-2xl text-zinc-500 hover:text-red-400 hover:bg-red-500/10"
                    onClick={() => setDeleteModal({ isOpen: true, projectId: project.id })}
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}

          {filteredAndSortedProjects.length === 0 && (
            <div className="col-span-full py-20 text-center space-y-4">
              <div className="w-16 h-16 bg-zinc-900 border border-zinc-200/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Search size={24} className="text-zinc-600" />
              </div>
              <h3 className="text-lg font-semibold">No projects found</h3>
              <p className="text-zinc-500">Try adjusting your search or sort parameters.</p>
            </div>
          )}
        </div>
      </div>

      <Modal 
        isOpen={deleteModal.isOpen} 
        onClose={() => setDeleteModal({ isOpen: false, projectId: null })}
        onConfirm={handleDelete}
        title="Delete Project"
        message="Are you sure you want to delete this project? This action cannot be undone and all associated code will be permanently removed."
        confirmLabel="Delete Project"
        variant="danger"
      />
    </div>
  )
}