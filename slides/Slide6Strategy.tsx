
import React from 'react';

const Slide6Strategy: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center max-w-4xl mx-auto">
      <div className="mb-12 border-b border-slate-200 pb-8">
        <h2 className="text-4xl font-black text-slate-900 mb-2 italic">🎯 Governança e Veredito</h2>
        <p className="text-slate-500">Próximos passos para a aprovação imediata.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div>
            <h4 className="text-sm font-black text-slate-800 uppercase mb-4 flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              Política de Caixa
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Manteremos <strong>12% da receita bruta</strong> como retenção de capital. Este fundo será destinado exclusivamente a infraestrutura de Cloud, marketing de escala e contingência operacional.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-black text-slate-800 uppercase mb-4 flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              Modelo de Lucro
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Distribuição mensal aos sócios após dedução de custos diretos e reserva de capital. Modelo maduro, sustentável e com alta previsibilidade de churn.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200">
          <h4 className="text-xs font-black text-slate-400 uppercase mb-6 tracking-widest">Resumo Estratégico</h4>
          <ul className="space-y-4 text-sm font-bold text-slate-800">
            <li className="flex space-x-3">
              <span className="text-green-600">✓</span>
              <span>Modelo financeiramente sólido</span>
            </li>
            <li className="flex space-x-3">
              <span className="text-green-600">✓</span>
              <span>Margem operacional resiliente</span>
            </li>
            <li className="flex space-x-3">
              <span className="text-green-600">✓</span>
              <span>Upsell saudável (Add-ons)</span>
            </li>
            <li className="flex space-x-3">
              <span className="text-green-600">✓</span>
              <span>Escala técnica validada</span>
            </li>
          </ul>
          
          <button className="w-full mt-10 bg-slate-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-600 transition-all shadow-xl active:scale-95">
             APROVAR E SEGUIR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slide6Strategy;
