
import React from 'react';

const Slide4Cockpit: React.FC = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-10">
        <h2 className="text-3xl font-black text-slate-900 mb-4 italic">Módulo 03: Cockpit de Operações</h2>
        <p className="text-slate-600 max-w-2xl leading-relaxed">
          O médico recupera o controle total. Um dashboard realista para gerir o funil de conversão e a agenda, sem depender de relatórios manuais da secretária.
        </p>
      </div>

      <div className="flex-1 grid md:grid-cols-4 gap-4">
        <div className="md:col-span-3 bg-slate-100 rounded-3xl border border-slate-200 overflow-hidden relative shadow-inner">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bbbda5402742?auto=format&fit=crop&q=80&w=1200" 
            className="w-full h-full object-cover opacity-80" 
            alt="Dashboard" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
          <div className="absolute bottom-6 left-6 flex space-x-4">
            <div className="bg-white/90 backdrop-blur p-3 rounded-xl border border-white/20 shadow-lg">
               <p className="text-[10px] text-slate-400 font-bold uppercase">Leads Hoje</p>
               <p className="text-xl font-black text-slate-900">142</p>
            </div>
            <div className="bg-blue-600/90 backdrop-blur p-3 rounded-xl border border-blue-500/20 shadow-lg">
               <p className="text-[10px] text-blue-100 font-bold uppercase">Agendados</p>
               <p className="text-xl font-black text-white">48</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
           <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 h-1/2 flex flex-col justify-center">
             <h5 className="text-[10px] font-black text-slate-400 uppercase mb-2">Google Calendar</h5>
             <p className="text-sm font-bold text-slate-800 leading-snug">Sincronização Bidirecional em Tempo Real.</p>
           </div>
           <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 h-1/2 flex flex-col justify-center">
             <h5 className="text-[10px] font-black text-slate-400 uppercase mb-2">Kanban de Leads</h5>
             <p className="text-sm font-bold text-slate-800 leading-snug">Visualização Clara do Funil de Atendimento.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Slide4Cockpit;
