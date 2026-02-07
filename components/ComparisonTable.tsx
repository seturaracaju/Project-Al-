
import React from 'react';

const ComparisonTable: React.FC = () => {
  const rows = [
    { label: "Disponibilidade", human: "8h às 18h (C/ Pausas)", ale: "24 horas por dia, 7 dias por semana" },
    { label: "Custo Mensal", human: "R$ 3.500+ (Salário + Encargos)", ale: "Menos que 15% de uma secretária" },
    { label: "Velocidade de Resposta", human: "Depende da ocupação", ale: "Instantânea (Zero fila)" },
    { label: "Escalabilidade", human: "Limitada a 1 ligação por vez", ale: "Atende 100 ligações simultâneas" },
    { label: "Treinamento", human: "Curva de meses", ale: "Pronta em 48 horas" },
    { label: "Humor e Empatia", human: "Variável", ale: "Sempre acolhedora e educada" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 italic">A Evolução do Atendimento.</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Por que contratar mais uma pessoa se você pode ter uma inteligência completa?
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-y-4">
            <thead>
              <tr className="text-slate-400 text-sm uppercase font-black tracking-widest">
                <th className="px-8 py-4">Diferencial</th>
                <th className="px-8 py-4 bg-slate-50 rounded-t-2xl">Secretária Comum</th>
                <th className="px-8 py-4 bg-blue-600 text-white rounded-t-2xl">Alê Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="group transition-all">
                  <td className="px-8 py-6 text-slate-900 font-bold border-b border-slate-100">{row.label}</td>
                  <td className="px-8 py-6 text-slate-500 bg-slate-50 border-b border-slate-100">{row.human}</td>
                  <td className="px-8 py-6 text-white bg-blue-600 font-medium border-b border-blue-500/20">{row.ale}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-20 text-center">
          <div className="bg-indigo-50 inline-block p-10 rounded-[3rem] border border-indigo-100">
             <h3 className="text-2xl font-black text-indigo-900 mb-4">Pronto para recuperar seu faturamento?</h3>
             <button className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all hover:-translate-y-1 active:scale-95">
               Solicitar Demonstração Grátis
             </button>
             <p className="mt-6 text-indigo-600/60 font-medium italic">
               *Sem taxas de instalação. Implementação em até 48h.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
