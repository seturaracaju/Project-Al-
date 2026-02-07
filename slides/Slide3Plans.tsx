
import React from 'react';

const Slide3Plans: React.FC = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-slate-900 mb-2 italic">🧱 Estrutura de Planos</h2>
        <p className="text-slate-500 text-sm">Desenhado para maximizar LTV e margem operacional.</p>
      </div>

      <div className="grid grid-cols-3 gap-4 flex-1">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col">
          <div className="mb-6">
            <h3 className="text-lg font-black text-green-600 uppercase">Starter</h3>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Entrada Perfeita</p>
          </div>
          <p className="text-4xl font-black text-slate-900 mb-6">R$ 297</p>
          <ul className="space-y-3 flex-1 text-xs text-slate-600">
            <li>• WhatsApp Ilimitado</li>
            <li>• Agendamento 24/7</li>
            <li>• Lembretes Automáticos</li>
            <li>• 1 Agenda Profissional</li>
            <li className="text-red-500 font-bold">• Sem Voz Incluída</li>
          </ul>
        </div>

        <div className="bg-blue-600 rounded-3xl p-6 flex flex-col text-white shadow-xl scale-105 z-10">
          <div className="mb-6">
            <h3 className="text-lg font-black uppercase">PRO</h3>
            <p className="text-[10px] text-blue-200 font-bold uppercase tracking-widest">Mais Vendido</p>
          </div>
          <p className="text-4xl font-black mb-6">R$ 597</p>
          <ul className="space-y-3 flex-1 text-xs text-blue-50">
            <li>• Tudo do Starter</li>
            <li className="font-bold underline">• 30 Ligações de Voz/mês</li>
            <li>• Atendimento Híbrido</li>
            <li>• Relatórios de Conversão</li>
            <li>• Suporte Prioritário</li>
          </ul>
          <div className="mt-4 pt-4 border-t border-blue-400">
             <p className="text-[10px] font-bold uppercase">Margem Bruta: > 60%</p>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col">
          <div className="mb-6">
            <h3 className="text-lg font-black text-indigo-600 uppercase">Clínica</h3>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Escala Real</p>
          </div>
          <p className="text-4xl font-black text-slate-900 mb-6">R$ 997</p>
          <ul className="space-y-3 flex-1 text-xs text-slate-600">
            <li>• Tudo do Pro</li>
            <li className="font-bold underline">• 100 Ligações de Voz/mês</li>
            <li>• Até 5 Agendas</li>
            <li>• Scripts Personalizados</li>
            <li>• Onboarding Assistido</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Slide3Plans;
