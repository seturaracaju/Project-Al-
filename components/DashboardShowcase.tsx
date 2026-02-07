
import React from 'react';

const DashboardShowcase: React.FC = () => {
  const modules = [
    {
      title: "Módulo Cockpit",
      status: "Finalizado",
      desc: "Interface de monitoramento em tempo real. Dashboard consolidado com métricas de conversão e saúde financeira da clínica.",
      icon: "📊"
    },
    {
      title: "Fluxo Kanban (CRM)",
      status: "Finalizado",
      desc: "Gestão de leads via pipeline. Sincronização bidirecional entre atendimento de voz e status de agendamento.",
      icon: "🔀"
    },
    {
      title: "Núcleo de Voz",
      status: "Produção",
      desc: "Motor neural configurado para baixa latência. Capacidade de múltiplos atendimentos simultâneos sem perda de performance.",
      icon: "🎙️"
    }
  ];

  return (
    <section id="arquitetura" className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-2xl font-black text-slate-900 mb-2">Visão Geral dos Módulos Operacionais</h2>
          <p className="text-slate-500">Componentes técnicos validados para a entrega final.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {modules.map((mod, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <div className="text-4xl mb-6">{mod.icon}</div>
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="text-xl font-bold text-slate-900">{mod.title}</h3>
                <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded font-bold uppercase">{mod.status}</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {mod.desc}
              </p>
            </div>
          ))}
        </div>

        <div id="cockpit" className="mt-20 relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
          <div className="bg-slate-900 p-4 flex items-center space-x-2">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-xs text-slate-500 font-mono">https://cockpit.ale.ai/admin/dashboard</span>
            </div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1551288049-bbbda5402742?auto=format&fit=crop&q=80&w=1200" 
            alt="Dashboard Technical View" 
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;
