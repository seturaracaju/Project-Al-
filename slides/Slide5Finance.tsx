
import React, { useState, useEffect } from 'react';

const Slide5Finance: React.FC = () => {
  const [leads, setLeads] = useState(20);
  const [ticket, setTicket] = useState(300);
  
  const [loss, setLoss] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [payback, setPayback] = useState(0);

  const SUBSCRIPTION = 697;

  useEffect(() => {
    const monthlyLoss = leads * 22 * ticket;
    const monthlyRecovered = monthlyLoss * 0.25; 
    const days = Math.ceil(SUBSCRIPTION / (monthlyRecovered / 30));

    setLoss(monthlyLoss);
    setRecovered(monthlyRecovered);
    setPayback(days);
  }, [leads, ticket]);

  return (
    <div className="h-full flex flex-col">
      <div className="mb-10">
        <h2 className="text-3xl font-black text-slate-900 mb-2 italic">Análise de Viabilidade Financeira</h2>
        <p className="text-slate-600">Simulação de retorno direto sobre o faturamento em risco.</p>
      </div>

      <div className="flex-1 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-10 bg-slate-50 p-8 rounded-3xl border border-slate-100">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-xs font-black text-slate-500 uppercase">Leads Perdidos/Dia</label>
              <span className="text-xl font-black text-blue-600">{leads}</span>
            </div>
            <input type="range" min="5" max="100" value={leads} onChange={e => setLeads(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none accent-blue-600" />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-xs font-black text-slate-500 uppercase">Valor Médio Consulta (R$)</label>
              <span className="text-xl font-black text-blue-600">R$ {ticket}</span>
            </div>
            <input type="range" min="150" max="2500" step="50" value={ticket} onChange={e => setTicket(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none accent-blue-600" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="flex justify-between items-center p-6 bg-red-50 rounded-2xl border border-red-100">
             <span className="text-xs font-bold text-red-600 uppercase">Faturamento em Risco (Mês)</span>
             <span className="text-2xl font-black text-red-700">R$ {loss.toLocaleString('pt-BR')}</span>
          </div>
          <div className="flex justify-between items-center p-6 bg-green-50 rounded-2xl border border-green-100">
             <span className="text-xs font-bold text-green-600 uppercase">Lucro Recuperado (25%)</span>
             <span className="text-2xl font-black text-green-700">R$ {recovered.toLocaleString('pt-BR')}</span>
          </div>
          <div className="p-8 bg-slate-900 rounded-3xl text-white shadow-xl shadow-slate-200">
             <p className="text-xs font-bold uppercase opacity-50 mb-4 tracking-widest text-center">Tempo de Amortização do Ativo (Payback)</p>
             <div className="text-center">
                <span className="text-7xl font-black text-blue-400 leading-none">{payback}</span>
                <span className="text-xl font-bold uppercase ml-2 text-blue-400">{payback === 1 ? 'Dia' : 'Dias'}</span>
             </div>
             <p className="text-[10px] text-slate-400 text-center mt-4">Calculado sobre custo mensal de R$ 697,00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide5Finance;
