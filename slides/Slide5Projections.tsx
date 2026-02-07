
import React from 'react';

const Slide5Projections: React.FC = () => {
  const scenarios = [
    { label: "Início", qty: 50, revenue: "R$ 25k", share: "R$ 3,2k" },
    { label: "Validado", qty: 200, revenue: "R$ 103k", share: "R$ 12,8k" },
    { label: "Escala", qty: 1000, revenue: "R$ 515k", share: "R$ 64,4k" },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="mb-10">
        <h2 className="text-3xl font-black text-slate-900 mb-2 italic">📈 Projeções de Escala</h2>
        <p className="text-slate-500 text-sm italic">Baseado em Ticket Médio Ponderado de R$ 515,00 e Lucro Op de R$ 255/cliente.</p>
      </div>

      <div className="grid grid-cols-3 gap-6 flex-1">
        {scenarios.map((s, i) => (
          <div key={i} className="flex flex-col bg-slate-50 border border-slate-200 rounded-[2rem] p-8 transition-all hover:-translate-y-2">
            <div className="mb-6 flex justify-between items-center">
               <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{s.label}</span>
               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-black text-blue-600 shadow-sm">{s.qty}</div>
            </div>
            
            <div className="space-y-6 flex-1">
               <div>
                 <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Receita Mensal</p>
                 <p className="text-3xl font-black text-slate-900">{s.revenue}</p>
               </div>
               
               <div className="pt-4 border-t border-slate-200">
                 <p className="text-[10px] font-bold text-blue-500 uppercase mb-1">Distribuição p/ Sócio</p>
                 <p className="text-2xl font-black text-blue-600">~ {s.share}</p>
               </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4">
         <div className="bg-slate-900 p-4 rounded-2xl flex justify-between items-center text-white">
            <span className="text-xs font-bold uppercase opacity-60">Faturamento Anual (1.000 un)</span>
            <span className="text-xl font-black text-blue-400">R$ 6,18 Milhões</span>
         </div>
         <div className="bg-blue-600 p-4 rounded-2xl flex justify-between items-center text-white">
            <span className="text-xs font-bold uppercase opacity-80">Caixa de Guerra Acumulado (12%)</span>
            <span className="text-xl font-black text-white">R$ 741.600,00</span>
         </div>
      </div>
    </div>
  );
};

export default Slide5Projections;
