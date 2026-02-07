
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 rounded-lg px-4 py-2 mb-8 shadow-sm">
              <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Destinatário:</span>
              <span className="text-blue-600 text-xs font-black uppercase tracking-widest">Alfredo Tanimoto</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
              Projeto Alê: <br/>
              <span className="text-blue-600">Protótipo Funcional Finalizado</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Sr. Alfredo, este documento digital apresenta o estágio final de desenvolvimento técnico da <strong>Alê</strong>. O núcleo tecnológico (Voz Neurais + Integração Z-API) está operando com 100% de estabilidade, pronto para o repasse ao setor de marketing para envelopamento e lançamento comercial.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Status Técnico</p>
                <p className="text-sm font-bold text-slate-900">Produção / Estável</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Integração SaaS</p>
                <p className="text-sm font-bold text-slate-900">100% Sincronizado</p>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#arquitetura" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center space-x-2">
                <span>Explorar Ativos Técnicos</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white p-2 rounded-3xl shadow-2xl border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
                alt="Ambiente de Desenvolvimento Clínico" 
                className="rounded-2xl w-full h-[450px] object-cover"
              />
              <div className="absolute top-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-xs shadow-lg">
                READY FOR DEPLOY
              </div>
            </div>
            {/* Background elements to look more "tech" and less "marketing" */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
