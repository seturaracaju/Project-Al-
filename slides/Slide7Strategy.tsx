
import React from 'react';

const Slide7Strategy: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center max-w-5xl mx-auto">
      <div className="mb-6 border-b border-slate-200 pb-4">
        <h2 className="text-3xl font-black text-slate-900 mb-1 italic">🎯 Governança & Demonstração Ao Vivo</h2>
        <p className="text-slate-500 text-sm">Estrutura de gestão e teste prático do módulo de voz.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="space-y-6 flex flex-col">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h4 className="text-xs font-black text-slate-800 uppercase mb-2 flex items-center">
              🛡️ Gestão de Caixa e Lucro
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fixamos <strong>12% de retenção bruta</strong> para segurança e escala. Distribuição mensal de 33% para cada sócio após custos e reserva.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-xl flex-1">
            <h4 className="text-xs font-black text-blue-400 uppercase mb-4 tracking-widest">🧠 VEREDITO FINAL</h4>
            <ul className="space-y-2 text-[11px] font-bold text-slate-300">
              <li className="flex space-x-2"><span className="text-green-500">✓</span> <span>Modelo financeiramente sólido</span></li>
              <li className="flex space-x-2"><span className="text-green-500">✓</span> <span>Diferencial claro (VOZ)</span></li>
              <li className="flex space-x-2"><span className="text-green-500">✓</span> <span>Escala real para milhares de clientes</span></li>
              <li className="flex space-x-2"><span className="text-green-500">✓</span> <span>Valuation agressivo (SaaS MRR)</span></li>
            </ul>
            
            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-[10px] text-slate-500 uppercase font-black mb-3">Aprovação de Sócio</p>
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-black text-xs hover:bg-blue-700 transition-all shadow-lg active:scale-95">
                 AUTORIZAR LANÇAMENTO
              </button>
            </div>
          </div>
        </div>

        {/* Live Demo Form Container */}
        <div className="bg-white rounded-[2rem] border border-slate-200 shadow-2xl overflow-hidden flex flex-col min-h-[450px]">
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Teste a Alê Agora</span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono">demo-live-voice-v1</span>
          </div>
          
          <div className="flex-1 w-full h-full relative">
            <iframe 
              src="https://tally.so/r/obG1WV" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0} 
              title="Teste de Voz da Alê"
              className="absolute inset-0"
            ></iframe>
          </div>

          <div className="p-4 bg-blue-50 text-center">
            <p className="text-[10px] text-blue-700 font-bold italic">
              Insira seu número acima para receber uma chamada imediata da Alê.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide7Strategy;
