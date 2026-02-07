
import React, { useState } from 'react';

const Slide2Voice: React.FC = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="h-full grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-black text-slate-900 mb-6 italic">Módulo 01: Voz Humana Neural</h2>
        <p className="text-slate-600 leading-relaxed mb-8">
          Utilizamos síntese de voz de última geração com latência inferior a 800ms. A Alê atende o telefone, entende a intenção do paciente e agenda sem que ele perceba que está falando com uma IA.
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0 5 5 0 01-10 0 1 1 0 00-2 0 7.001 7.001 0 005.93 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" /></svg>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 uppercase">Input de Áudio em Tempo Real</p>
              <p className="text-[10px] text-slate-500">Processamento neural direto via Webhook.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 rounded-[2rem] p-8 flex flex-col items-center justify-center space-y-8 h-[400px]">
        <div className="flex items-center space-x-2">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className={`w-1.5 bg-blue-500 rounded-full transition-all duration-300 ${playing ? 'animate-pulse opacity-100' : 'opacity-20'}`}
              style={{ height: playing ? `${Math.random() * 60 + 20}%` : '10%' }}
            />
          ))}
        </div>
        
        <button 
          onClick={() => setPlaying(!playing)}
          className="bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all flex items-center space-x-3"
        >
          {playing ? 'Parar Teste' : 'Reproduzir Amostra'}
        </button>
        <p className="text-xs text-slate-500 text-center italic max-w-[200px]">
          "Olá, sou a Alê. Estou pronta para atender sua clínica 24 horas por dia."
        </p>
      </div>
    </div>
  );
};

export default Slide2Voice;
