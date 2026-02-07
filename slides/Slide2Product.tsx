
import React from 'react';

const Slide2Product: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="mb-10">
        <h2 className="text-3xl font-black text-slate-900 mb-2 italic">A Inteligência por Trás da Alê</h2>
        <p className="text-slate-500 text-sm">Integração perfeita entre Voz, Texto e Gestão.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-4">
          <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl">🎙️</div>
          <h3 className="font-black text-slate-900 uppercase text-sm">Voz Neural Realista</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Ligação ativa e receptiva. Atendimento humano, sem delay e capaz de agendar/confirmar consultas direto na agenda.
          </p>
        </div>

        <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-4">
          <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-2xl">💬</div>
          <h3 className="font-black text-slate-900 uppercase text-sm">WhatsApp Inteligente</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Integração Z-API ilimitada. Transcreve áudios de pacientes e analisa imagens de exames em tempo real.
          </p>
        </div>

        <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-4">
          <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-2xl">📊</div>
          <h3 className="font-black text-slate-900 uppercase text-sm">Cockpit SaaS</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Gestão via Kanban. O médico vê o funil de agendamentos e o status de cada lead em um dashboard profissional.
          </p>
        </div>
      </div>

      <div className="mt-10 p-6 bg-slate-900 rounded-2xl text-white">
        <div className="flex items-center space-x-6">
          <div className="flex-1">
            <h4 className="text-xs font-black text-blue-400 uppercase mb-1">Diferencial Único</h4>
            <p className="text-sm">A Alê não é um "bot de menu". É uma SDR (Sales Dev Rep) de voz e texto.</p>
          </div>
          <div className="h-10 w-px bg-white/10"></div>
          <div className="flex-1">
            <h4 className="text-xs font-black text-blue-400 uppercase mb-1">Integração</h4>
            <p className="text-sm">Google Calendar e agendas médicas legadas via API.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide2Product;
