
import React from 'react';

const Slide6Projections: React.FC = () => {
  const scenarios = [
    { label: "50 Clientes", revenue: "R$ 25.750", profit: "R$ 12.750", perPartner: "R$ 3.220" },
    { label: "200 Clientes", revenue: "R$ 103.000", profit: "R$ 51.000", perPartner: "R$ 12.880" },
    { label: "1.000 Clientes", revenue: "R$ 515.000", profit: "R$ 255.000", perPartner: "R$ 64.400" },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <h2 className="text-3xl font-black text-slate-900 mb-1 italic">📊 Cenários de Escala</h2>
        <p className="text-slate-500 text-xs italic">
          Premissas: Ticket Médio R$ 515 | Custo Médio R$ 260 | Margem Bruta 50% | Retenção Caixa 12%.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 flex-1">
        {scenarios.map((s, i) => (
          <div key={i} className={`flex flex-col rounded-[2rem] p-6 border transition-all ${i === 2 ? 'bg-slate-900 text-white border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <div className="mb-4">
               <span className="text-[10px] font-black opacity-60 uppercase tracking-widest">{s.label}</span>
            </div>
            
            <div className="space-y-6 flex-1">
               <div>
                 <p className={`text-[10px] font-bold uppercase mb-1 ${i === 2 ? 'text-blue-400' : 'text-slate-400'}`}>Receita Bruta</p>
                 <p className="text-2xl font-black">{s.revenue}</p>
               </div>
               
               <div className="pt-4 border-t border-white/10">
                 <p className={`text-[10px] font-bold uppercase mb-1 ${i === 2 ? 'text-blue-400' : 'text-slate-400'}`}>Lucro Distribuível</p>
                 <p className="text-xl font-black">{s.profit}</p>
               </div>

               <div className={`mt-auto p-4 rounded-xl ${i === 2 ? 'bg-blue-600' : 'bg-blue-100 text-blue-800'}`}>
                 <p className="text-[9px] font-black uppercase opacity-80">R$ / Sócio (33%)</p>
                 <p className="text-lg font-black">{s.perPartner} <span className="text-xs font-normal">/mês</span></p>
               </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-blue-50 border border-blue-100 rounded-2xl flex justify-between items-center">
         <div className="text-center flex-1 border-r border-blue-200">
            <p className="text-[10px] font-black text-blue-500 uppercase">Faturamento Anual (1.000 Clientes)</p>
            <p className="text-xl font-black text-blue-900 italic">R$ 6.180.000</p>
         </div>
         <div className="text-center flex-1">
            <p className="text-[10px] font-black text-blue-500 uppercase">Caixa Acumulado Anual (12%)</p>
            <p className="text-xl font-black text-blue-900 italic">R$ 741.600</p>
         </div>
      </div>
    </div>
  );
};

export default Slide6Projections;
