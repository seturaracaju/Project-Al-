
import React from 'react';

const Slide4Plans: React.FC = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-slate-900 mb-2 italic">🧱 Estrutura de Planos (SaaS)</h2>
        <p className="text-slate-500 text-sm italic">Baseado em: Pagar custo + Setup + Crescimento.</p>
      </div>

      <div className="grid grid-cols-3 gap-4 flex-1">
        {/* Starter */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col relative overflow-hidden">
          <div className="mb-4">
            <h3 className="text-lg font-black text-slate-900 uppercase">Starter</h3>
            <p className="text-[10px] text-slate-500 font-bold">ORGANIZAÇÃO INTELIGENTE</p>
          </div>
          <p className="text-3xl font-black text-slate-900 mb-6">R$ 297<span className="text-xs font-normal text-slate-400 italic"> /mês</span></p>
          <ul className="space-y-2 flex-1 text-[11px] text-slate-600">
            <li>• WhatsApp Ilimitado</li>
            <li>• Agendamento/Lembretes</li>
            <li>• 1 Agenda Profissional</li>
            <li>• Até 400 atendimentos/mês</li>
            <li className="text-red-500 font-bold">• ❌ Voz Não Incluída</li>
          </ul>
          <div className="mt-4 pt-4 border-t border-slate-200">
             <p className="text-[10px] text-slate-400 font-bold uppercase">Porta de Entrada Perfeita</p>
          </div>
        </div>

        {/* PRO */}
        <div className="bg-blue-600 rounded-3xl p-6 flex flex-col text-white shadow-2xl scale-105 z-10 border-4 border-blue-400">
          <div className="absolute top-4 right-4 bg-white text-blue-600 px-2 py-0.5 rounded text-[10px] font-black uppercase">Main</div>
          <div className="mb-4">
            <h3 className="text-lg font-black uppercase">PRO</h3>
            <p className="text-[10px] text-blue-200 font-bold">VOZ QUE CONVERTE</p>
          </div>
          <p className="text-3xl font-black mb-6">R$ 597<span className="text-xs font-normal text-blue-200 italic"> /mês</span></p>
          <ul className="space-y-2 flex-1 text-[11px] text-blue-50">
            <li>• Tudo do Starter +</li>
            <li className="font-bold underline">• Até 30 ligações de Voz/mês</li>
            <li>• Respostas por Áudio (WA)</li>
            <li>• Relatórios de Conversão</li>
            <li>• Até 600 atendimentos/mês</li>
          </ul>
          <div className="mt-4 pt-4 border-t border-blue-400">
             <p className="text-[10px] font-black uppercase">Margem Bruta > 60% ✅</p>
          </div>
        </div>

        {/* Clinica */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col">
          <div className="mb-4">
            <h3 className="text-lg font-black text-indigo-600 uppercase">Clínica</h3>
            <p className="text-[10px] text-slate-500 font-bold">ESCALA PROFISSIONAL</p>
          </div>
          <p className="text-3xl font-black text-slate-900 mb-6">R$ 997<span className="text-xs font-normal text-slate-400 italic"> /mês</span></p>
          <ul className="space-y-2 flex-1 text-[11px] text-slate-600">
            <li>• Tudo do Pro +</li>
            <li className="font-bold underline">• Até 100 ligações de Voz/mês</li>
            <li>• Até 5 Agendas/Profissionais</li>
            <li>• Fluxos Personalizados</li>
            <li>• Até 1.200 atendimentos/mês</li>
          </ul>
          <div className="mt-4 pt-4 border-t border-slate-200">
             <p className="text-[10px] text-slate-400 font-bold uppercase">Margem ≈ 42% (Alto Valor)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide4Plans;
