
import React from 'react';

const Slide3CostBasis: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="mb-10">
        <h2 className="text-3xl font-black text-slate-900 mb-2 italic">📊 Base de Custo Validada</h2>
        <p className="text-slate-500">Resumo real da infraestrutura técnica necessária.</p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex justify-between items-center">
            <div>
              <p className="text-xs font-black text-slate-400 uppercase mb-1">WhatsApp (Z-API)</p>
              <p className="text-sm font-bold text-slate-800 italic">Custo fixo ilimitado</p>
            </div>
            <p className="text-xl font-black text-blue-600">R$ 99/mês</p>
          </div>
          
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex justify-between items-center">
            <div>
              <p className="text-xs font-black text-slate-400 uppercase mb-1">Voz (VAPI + ElevenLabs)</p>
              <p className="text-sm font-bold text-slate-800 italic">Custo por ligação (média)</p>
            </div>
            <p className="text-xl font-black text-blue-600">~R$ 4,20</p>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex justify-between items-center">
            <div>
              <p className="text-xs font-black text-slate-400 uppercase mb-1">Infra Fixa Diluída</p>
              <p className="text-sm font-bold text-slate-800 italic">Scale servers & Suporte</p>
            </div>
            <p className="text-xl font-black text-blue-600">R$ 40 - 60</p>
          </div>
        </div>

        <div className="bg-slate-900 p-8 rounded-3xl text-white flex flex-col justify-between">
          <div>
            <h4 className="text-xs font-black text-blue-400 uppercase tracking-widest mb-6">👉 Regra de Ouro</h4>
            <div className="space-y-6">
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-bold">W</div>
                <div>
                  <p className="text-sm font-bold text-white">WhatsApp = Escala</p>
                  <p className="text-xs text-slate-400 italic">Volume ilimitado, custo fixo por atendimento: ~R$ 0,05.</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-bold">V</div>
                <div>
                  <p className="text-sm font-bold text-white">Voz = Cota Controlada</p>
                  <p className="text-xs text-slate-400 italic">Upsell de alto valor percebido e cota fixa.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-white/10 mt-6">
            <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Custo Médio Unitário Projetado</p>
            <p className="text-3xl font-black">≈ R$ 260,00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide3CostBasis;
