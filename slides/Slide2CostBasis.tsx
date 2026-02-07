
import React from 'react';

const Slide2CostBasis: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="mb-10">
        <h2 className="text-3xl font-black text-slate-900 mb-2 italic">📊 Base de Custo Validada</h2>
        <p className="text-slate-500">Custos operacionais por cliente (SLA de alta escala).</p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex justify-between items-center">
            <div>
              <p className="text-xs font-black text-slate-400 uppercase mb-1">WhatsApp (Z-API)</p>
              <p className="text-sm font-bold text-slate-800 italic">Ilimitado por número</p>
            </div>
            <p className="text-xl font-black text-blue-600">R$ 99/mês</p>
          </div>
          
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex justify-between items-center">
            <div>
              <p className="text-xs font-black text-slate-400 uppercase mb-1">Custo Voz (VAPI/Eleven)</p>
              <p className="text-sm font-bold text-slate-800 italic">Preço médio por ligação</p>
            </div>
            <p className="text-xl font-black text-blue-600">~R$ 4,20</p>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex justify-between items-center">
            <div>
              <p className="text-xs font-black text-slate-400 uppercase mb-1">Infra Fixa Diluída</p>
              <p className="text-sm font-bold text-slate-800 italic">Servidores e Manutenção</p>
            </div>
            <p className="text-xl font-black text-blue-600">R$ 40 - 60</p>
          </div>
        </div>

        <div className="bg-slate-900 p-8 rounded-3xl text-white">
          <h4 className="text-xs font-black text-blue-400 uppercase tracking-widest mb-6">Regra de Ouro ExcelêncIA</h4>
          <div className="space-y-6">
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center font-bold text-white">W</div>
              <div>
                <p className="text-sm font-bold">WhatsApp = Escala</p>
                <p className="text-xs text-slate-400">Baixo custo marginal, alto volume percebido.</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center font-bold text-white">V</div>
              <div>
                <p className="text-sm font-bold">Voz = Cota Controlada</p>
                <p className="text-xs text-slate-400">Produto Premium. Sempre via cotas + Upsell.</p>
              </div>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-white/10">
            <p className="text-[10px] text-slate-500 font-bold uppercase mb-2">Custo Médio Unitário</p>
            <p className="text-3xl font-black">≈ R$ 260,00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide2CostBasis;
