
import React from 'react';

const Slide6Conclusion: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center text-center max-w-2xl mx-auto">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-8">
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
      </div>
      <h2 className="text-4xl font-black text-slate-900 mb-6">Pronto para o Mercado.</h2>
      <p className="text-lg text-slate-600 leading-relaxed mb-10">
        Alfredo, o protótipo funcional está finalizado e validado. Com sua aprovação, o próximo passo é o **envelopamento comercial** e o início da captação dos primeiros 10 clientes beta.
      </p>
      
      <div className="grid grid-cols-2 gap-4 w-full mb-12">
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
          <p className="text-[10px] font-black text-slate-400 uppercase">Investimento Requerido</p>
          <p className="text-lg font-bold text-slate-800">Módulo MKT / Vendas</p>
        </div>
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
          <p className="text-[10px] font-black text-slate-400 uppercase">Previsão Lançamento</p>
          <p className="text-lg font-bold text-slate-800">D + 15 Dias</p>
        </div>
      </div>

      <button className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all">
        APROVAR PROSSEGUIMENTO
      </button>
    </div>
  );
};

export default Slide6Conclusion;
