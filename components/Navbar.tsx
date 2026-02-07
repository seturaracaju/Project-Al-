
import React from 'react';

interface NavbarProps {
  currentSlide: number;
  totalSlides: number;
}

const Navbar: React.FC<NavbarProps> = ({ currentSlide, totalSlides }) => {
  return (
    <nav className="h-32 bg-white border-b border-slate-200 px-8 flex items-center justify-between z-50">
      <div className="flex items-center space-x-8">
        <img 
          src="https://pub-872633efa2d545638be12ea86363c2ca.r2.dev/Logomarca%20Al%C3%AA%2C%20fundo%20claro.png" 
          alt="Alê Logo" 
          className="h-[200px] w-auto py-2 object-contain"
        />
        <div className="h-12 w-px bg-slate-200"></div>
        <div className="flex flex-col">
          <span className="text-sm font-black text-slate-800 uppercase tracking-wider">Apresentação Estratégica v1.0</span>
          <span className="text-xs text-blue-600 font-bold uppercase">Protótipo Funcional Finalizado</span>
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-2">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Etapa:</span>
        <span className="text-lg font-black text-slate-900">{currentSlide + 1} / {totalSlides}</span>
      </div>
    </nav>
  );
};

export default Navbar;
