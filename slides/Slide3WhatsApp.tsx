
import React from 'react';

const Slide3WhatsApp: React.FC = () => {
  return (
    <div className="h-full grid lg:grid-cols-2 gap-12 items-center">
      <div className="order-2 lg:order-1 relative">
        <div className="bg-slate-100 w-full h-[450px] rounded-3xl overflow-hidden border border-slate-200 relative">
          <div className="bg-green-600 p-4 flex items-center space-x-3 text-white">
             <div className="w-10 h-10 bg-white/20 rounded-full"></div>
             <div>
               <p className="text-sm font-bold">Paciente Virtual (Demo)</p>
               <p className="text-[10px] opacity-80 italic">Digitando...</p>
             </div>
          </div>
          <div className="p-6 space-y-4">
             <div className="bg-white p-3 rounded-2xl rounded-tl-none text-xs text-slate-700 w-3/4 shadow-sm">
               Oi, gostaria de agendar um retorno para amanhã.
             </div>
             <div className="bg-green-100 p-3 rounded-2xl rounded-tr-none text-xs text-slate-700 w-3/4 ml-auto shadow-sm">
               Claro! Tenho 14h ou 16:30. Qual prefere?
             </div>
             <div className="bg-white p-3 rounded-2xl rounded-tl-none text-xs text-slate-700 w-3/4 shadow-sm flex flex-col space-y-2">
               <span className="text-blue-600 font-bold">[Imagem do Exame]</span>
               <span>Consegue mostrar isso pro médico?</span>
             </div>
          </div>
        </div>
        <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-3">
           <img src="https://z-api.io/favicon.ico" className="w-6 h-6" alt="Z-API" />
           <span className="text-[10px] font-black text-slate-400 uppercase">Integrado via Z-API</span>
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <h2 className="text-3xl font-black text-slate-900 mb-6 italic">Módulo 02: Cérebro WhatsApp</h2>
        <p className="text-slate-600 leading-relaxed mb-8">
          O sistema entende áudios e transcreve exames via visão computacional. Não é um menu de opções (digite 1), é uma conversa natural que termina no agendamento.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center space-x-3 text-sm text-slate-700 font-medium">
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-[10px]">✓</div>
            <span>Triagem automática de exames</span>
          </li>
          <li className="flex items-center space-x-3 text-sm text-slate-700 font-medium">
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-[10px]">✓</div>
            <span>Handoff humano para casos complexos</span>
          </li>
          <li className="flex items-center space-x-3 text-sm text-slate-700 font-medium">
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-[10px]">✓</div>
            <span>Respostas em menos de 10 segundos</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Slide3WhatsApp;
