
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0">
            <img 
              src="https://pub-872633efa2d545638be12ea86363c2ca.r2.dev/Logomarca%20Al%C3%AA%2C%20fundo%20claro.png" 
              alt="Alê Logo" 
              className="h-[200px] w-auto object-contain mb-4"
            />
            <p className="mt-4 text-slate-500 text-sm max-w-xs">
              Módulo funcional validado pela <strong>ExcelêncIA</strong>. <br/>
              Próxima fase: Go-to-market.
            </p>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-center space-x-6">
            <div className="text-right">
              <p className="text-[10px] text-slate-400 uppercase font-black mb-1">Desenvolvimento por</p>
              <p className="text-sm font-bold text-slate-900">Samuel Hipólito</p>
              <p className="text-xs text-blue-600 font-medium italic">Especialista IBM</p>
            </div>
            <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden grayscale">
               <img src="https://picsum.photos/seed/samuel/100/100" alt="Samuel Hipólito" />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 text-center text-slate-400 text-[10px] uppercase font-bold tracking-widest">
          Este ambiente é uma visualização técnica confidencial para sócios e investidores da ExcelêncIA.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
