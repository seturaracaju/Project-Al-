
import React from 'react';

const Slide1Intro: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center max-w-4xl mx-auto">
      <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-[10px] font-black uppercase mb-6 w-fit">
        <span>Apresentação Estratégica de Negócio</span>
      </div>
      <h1 className="text-5xl font-black text-slate-900 leading-tight mb-6">
        Projeto Alê: <br/>
        <span className="text-blue-600 underline decoration-slate-200 decoration-4 underline-offset-8 italic">Ecossistema de Atendimento Médico</span>
      </h1>
      <p className="text-lg text-slate-600 leading-relaxed mb-8">
        A Alê é um ecossistema de atendimento inteligente para a área da saúde que resolve o principal gargalo das clínicas: <strong>o desperdício de faturamento por falta de atendimento humano imediato.</strong>
      </p>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
          <h4 className="font-bold text-slate-900 text-sm mb-2 uppercase flex items-center">
            <span className="mr-2">🚀</span> Visão 2026/2027
          </h4>
          <p className="text-xs text-slate-500 leading-relaxed">Transformar a Alê no principal ativo digital de clínicas brasileiras, com escala SaaS e margens operacionais superiores a 50%.</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
          <h4 className="font-bold text-slate-900 text-sm mb-2 uppercase flex items-center">
            <span className="mr-2">💎</span> Valor Agregado
          </h4>
          <p className="text-xs text-slate-500 leading-relaxed">Não vendemos software, vendemos recuperação de lucro. A Alê atende onde a secretária humana não alcança.</p>
        </div>
      </div>
      
      <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl text-amber-800 text-xs">
        <strong>Confidencial:</strong> Este documento contém a modelagem financeira completa para validação de sócios.
      </div>
    </div>
  );
};

export default Slide1Intro;
