import { X, Code2, ExternalLink, Download } from 'lucide-react';
import Button from './ui/Button';
import Card from './ui/Card';

const MOCK_IMPORTABLE_PROJECTS = [
  { id: 'i1', name: 'Admin Dashboard Pro', lang: 'React + Vite', url: 'https://github.com/tunicode/admin-pro' },
  { id: 'i2', name: 'Marketing Landing Page', lang: 'Next.js', url: 'https://github.com/tunicode/marketing' },
  { id: 'i3', name: 'Mobile App API', lang: 'Node.js', url: 'https://github.com/tunicode/api' },
  { id: 'i4', name: 'Design System Library', lang: 'TypeScript', url: 'https://github.com/tunicode/ds-lib' }
];

export default function ImportProjectsModal({ isOpen, onClose, onImport }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-zinc-950/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="w-full max-w-2xl bg-zinc-900 border border-zinc-200/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.4)] overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="px-8 py-6 border-b border-zinc-200/10 flex items-center justify-between bg-zinc-900/50">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold tracking-tight">Import Projects</h2>
            <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest">Available from your linked accounts</p>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 rounded-xl text-zinc-500 hover:text-zinc-100 hover:bg-zinc-800 transition-all"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
          <div className="grid gap-4">
            {MOCK_IMPORTABLE_PROJECTS.map((project) => (
              <div 
                key={project.id} 
                className="group flex items-center justify-between p-5 rounded-2xl bg-zinc-950/50 border border-zinc-200/5 hover:border-brand-blue/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-200/10 flex items-center justify-center group-hover:bg-brand-blue/10 transition-colors">
                    <Code2 className="text-zinc-400 group-hover:text-brand-blue" size={20} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-zinc-100">{project.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md bg-zinc-900 text-[10px] font-bold text-zinc-500 uppercase tracking-tighter border border-zinc-200/5">
                        {project.lang}
                      </span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  variant="secondary" 
                  className="!rounded-2xl !py-2.5 !px-5 text-xs h-auto"
                  onClick={() => onImport(project)}
                >
                  <Download size={14} />
                  Import
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 bg-zinc-950/30 border-t border-zinc-200/10 flex justify-end gap-3">
          <Button variant="ghost" onClick={onClose} className="!rounded-2xl">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}