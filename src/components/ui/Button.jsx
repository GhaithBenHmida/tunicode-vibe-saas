import React from 'react';

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  isLoading = false, 
  ...props 
}) {
  const baseStyles = "relative flex items-center justify-center gap-2 px-6 py-3 rounded-3xl font-bold text-sm transition-all duration-200 cubic-bezier(0.23,1,0.32,1) active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";
  
  const variants = {
    primary: "bg-zinc-100 text-zinc-950 hover:bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]",
    secondary: "bg-zinc-900 text-zinc-100 border border-zinc-200/10 hover:border-zinc-200/30 hover:bg-zinc-800",
    brand: "bg-brand-blue text-white hover:brightness-110 shadow-[0_0_20px_rgba(46,91,255,0.2)]",
    ghost: "bg-transparent text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading && (
        <div className="w-4 h-4 border-2 border-zinc-950/20 border-t-zinc-950 rounded-full animate-spin" />
      )}
      {children}
    </button>
  );
}