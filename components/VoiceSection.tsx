
import React, { useState } from 'react';

const VoiceSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] p-8 lg:p-20 relative overflow-hidden text-center lg:text-left">
          {/* Animated Background Grid */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                Ouça a diferença: <br/>
                <span className="text-indigo-400">Zero robótica. 100% Humana.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 max-w-xl">
                Diferente de sistemas de URA travados ou chatbots frios, a Alê utiliza modelos neurais de última geração para conversar de forma fluida, entender gírias médicas e até acolher o paciente com empatia.
              </p>
              
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  </div>
                  <span>Sotaque brasileiro natural (Neutro, SP ou RJ)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  </div>
                  <span>Respostas instantâneas sem "delay"</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-sm">
                <div className="flex justify-center mb-8">
                  <div className={`relative w-32 h-32 rounded-full flex items-center justify-center transition-all ${isPlaying ? 'bg-indigo-600 scale-110' : 'bg-slate-800'}`}>
                    {isPlaying && (
                      <div className="absolute inset-0 rounded-full border-4 border-indigo-400 animate-ping opacity-25"></div>
                    )}
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-xl"
                    >
                      {isPlaying ? (
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                      ) : (
                        <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                      )}
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs font-bold text-indigo-400 uppercase tracking-widest">
                    <span>Demonstração de Voz</span>
                    <span>00:24</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r from-indigo-500 to-blue-500 transition-all duration-1000 ${isPlaying ? 'w-3/4' : 'w-0'}`}></div>
                  </div>
                  <p className="text-center text-sm text-slate-400 italic">
                    "Olá, sou a Alê da Clínica Vida. Vi que você tentou ligar. Como posso ajudar com seu agendamento?"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceSection;
