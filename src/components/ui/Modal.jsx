import { X } from 'lucide-react';
import Button from './Button';

export default function Modal({ isOpen, onClose, onConfirm, title, message, confirmLabel = "Delete", variant = "primary" }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-zinc-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-200/10 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="p-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{title}</h3>
            <button onClick={onClose} className="text-zinc-500 hover:text-zinc-100">
              <X size={20} />
            </button>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed">
            {message}
          </p>
          <div className="flex items-center gap-3 pt-4">
            <Button variant="ghost" className="flex-1" onClick={onClose}>
              Cancel
            </Button>
            <Button 
              variant={variant === "danger" ? "primary" : "brand"}
              className={`flex-1 ${variant === "danger" ? "!bg-red-500 !text-white hover:!bg-red-600" : ""}`}
              onClick={() => {
                onConfirm();
                onClose();
              }}
            >
              {confirmLabel}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}