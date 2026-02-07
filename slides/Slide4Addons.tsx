
import React from 'react';

const Slide4Addons: React.FC = () => {
  return (
    <div className="h-full grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-black text-slate-900 mb-6 italic">➕ Add-ons e Upsell</h2>
        <p className="text-slate-600 leading-relaxed mb-8 italic">
          Onde o lucro explode e a margem bruta se estabiliza.
        </p>
        
        <div className="space-y-3">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center">
             <span className="text-sm font-bold text-slate-700">Pacote +20 Voz</span>
             <span className="text-blue-600 font-black">R$ 99</span>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center">
             <span className="text-sm font-bold text-slate-700">Pacote +100 Voz</span>
             <span className="text-blue-600 font-black">R$ 399</span>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center">
             <span className="text-sm font-bold text-slate-700">Agenda Extra</span>
             <span className="text-blue-600 font-black">R$ 79/mês</span>
          </div>
          <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100 flex justify-between items-center">
             <span className="text-sm font-bold text-indigo-700">Setup Personalizado</span>
             <span className="text-indigo-600 font-black">Até R$ 1.497</span>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white">
        <h4 className="text-xs font-black text-red-400 uppercase tracking-widest mb-6">Política de Uso Justo</h4>
        <div className="space-y-6 text-sm text-slate-300">
          <div className="flex space-x-4">
             <div className="text-red-400 font-bold">01</div>
             <p>WhatsApp ilimitado, com trava de segurança para abuso.</p>
          </div>
          <div className="flex space-x-4">
             <div className="text-red-400 font-bold">02</div>
             <p>Voz sempre por cota pré-paga para evitar estouro de custos.</p>
          </div>
          <div className="flex space-x-4">
             <div className="text-red-400 font-bold">03</div>
             <p>Transparência total no Dashboard para o cliente.</p>
          </div>
        </div>
        <div className="mt-12 bg-white/5 p-6 rounded-2xl border border-white/10">
          <p className="text-xs italic text-blue-300">"Add-ons representam hoje cerca de 15% do faturamento projetado, com margem líquida superior a 70%."</p>
        </div>
      </div>
    </div>
  );
};

export default Slide4Addons;
