
import React, { useState, useEffect } from 'react';

const ROICalculator: React.FC = () => {
  const [leads, setLeads] = useState(15);
  const [ticket, setTicket] = useState(350);
  const [days, setDays] = useState(22);
  
  const [loss, setLoss] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [payback, setPayback] = useState(0);

  const SUBSCRIPTION_COST = 697; 

  useEffect(() => {
    const monthlyLoss = leads * days * ticket;
    const monthlyRecovered = monthlyLoss * 0.25; 
    const daysToPayback = Math.ceil(SUBSCRIPTION_COST / (monthlyRecovered / 30));

    setLoss(monthlyLoss);
    setRecovered(monthlyRecovered);
    setPayback(daysToPayback);
  }, [leads, ticket, days]);

  return (
    <div id="viabilidade" className="max-w-5xl mx-auto px-4">
      <div className="bg-slate-900 p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="mb-12 border-b border-white/10 pb-8">
            <h3 className="text-3xl font-bold text-white mb-2">Projeção de Eficiência e Viabilidade</h3>
            <p className="text-slate-400">Dados baseados no desempenho atual do algoritmo de recuperação da Alê.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-white">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-60">Volume de Leads/Dia</label>
                  <span className="text-2xl font-black text-blue-400">{leads}</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="100" 
                  value={leads} 
                  onChange={(e) => setLeads(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-white">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-60">Ticket Médio Consulta</label>
                  <span className="text-2xl font-black text-blue-400">R$ {ticket}</span>
                </div>
                <input 
                  type="range" 
                  min="150" 
                  max="3000" 
                  step="50"
                  value={ticket} 
                  onChange={(e) => setTicket(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>
              
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <p className="text-xs text-slate-400 leading-relaxed italic">
                  *Nota para Alfredo: O cálculo de "Lucro Recuperado" utiliza uma margem conservadora de 25% de conversão sobre leads que seriam descartados por falta de atendimento humano imediato.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-[10px] text-slate-500 uppercase font-black mb-1">Impacto Mensal Bruto</p>
                  <p className="text-2xl font-bold text-white">R$ {loss.toLocaleString('pt-BR')}</p>
                </div>
                <div className="p-6 bg-blue-600/20 rounded-2xl border border-blue-500/30">
                  <p className="text-[10px] text-blue-300 uppercase font-black mb-1">Recuperação Projetada</p>
                  <p className="text-2xl font-bold text-blue-400">R$ {recovered.toLocaleString('pt-BR')}</p>
                </div>
              </div>

              <div className="p-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl text-white shadow-2xl">
                <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-4">Payback do Investimento SaaS</p>
                <div className="flex items-baseline space-x-2 mb-4">
                   <span className="text-6xl font-black">{payback}</span>
                   <span className="text-xl font-bold uppercase">{payback === 1 ? 'Dia' : 'Dias'}</span>
                </div>
                <p className="text-sm text-blue-100 leading-relaxed">
                  Considerando o custo de infraestrutura Cloud + Licenciamento, o ativo torna-se lucrativo dentro da primeira semana de operação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
