
import React from 'react';

const Slide5Addons: React.FC = () => {
  return (
    <div className="h-full grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-black text-slate-900 mb-4 italic">➕ Add-ons (Upsell Explosivo)</h2>
        <p className="text-slate-600 text-sm mb-8">
          Onde otimizamos o ticket médio e capturamos a margem excedente.
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
             <p className="text-[9px] font-black text-slate-400 uppercase mb-2">Pacotes de Voz</p>
             <p className="text-sm font-bold text-slate-800">+20 lig → <span className="text-blue-600">R$ 99</span></p>
             <p className="text-sm font-bold text-slate-800">+100 lig → <span className="text-blue-600">R$ 399</span></p>
          </div>
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
             <p className="text-[9px] font-black text-slate-400 uppercase mb-2">Agendas Extras</p>
             <p className="text-sm font-bold text-slate-800">R$ 79 /mês</p>
             <p className="text-[10px] text-slate-500 italic">Por novo profissional</p>
          </div>
          <div className="col-span-2 p-6 bg-indigo-50 rounded-2xl border border-indigo-100 flex justify-between items-center">
             <div>
               <p className="text-[9px] font-black text-indigo-400 uppercase mb-1">Personalização de Fluxos</p>
               <p className="text-lg font-black text-indigo-700 leading-none">Setup Único: R$ 497 – R$ 1.497</p>
             </div>
             <span className="text-2xl">🧠</span>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white">
        <h4 className="text-xs font-black text-blue-400 uppercase tracking-widest mb-6">Política de Uso Justo (ESSENCIAL)</h4>
        <div className="space-y-6 text-sm text-slate-300">
          <div className="flex space-x-4">
             <div className="text-blue-400 font-bold">01</div>
             <p><strong>WhatsApp Ilimitado:</strong> Travas automáticas para uso abusivo/spam.</p>
          </div>
          <div className="flex space-x-4">
             <div className="text-blue-400 font-bold">02</div>
             <p><strong>Voz por Cota:</strong> Transparência total no painel, excedente vira add-on automático.</p>
          </div>
          <div className="flex space-x-4">
             <div className="text-blue-400 font-bold">03</div>
             <p><strong>Clareza no Upgrade:</strong> O cliente sente o limite e vê o upgrade como solução lógica.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide5Addons;
