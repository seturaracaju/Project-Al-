
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Slide1Intro from './slides/Slide1Intro';
import Slide2Product from './slides/Slide2Product';
import Slide3CostBasis from './slides/Slide3CostBasis';
import Slide4Plans from './slides/Slide4Plans';
import Slide5Addons from './slides/Slide5Addons';
import Slide6Projections from './slides/Slide6Projections';
import Slide7Strategy from './slides/Slide7Strategy';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <Slide1Intro />,
    <Slide2Product />,
    <Slide3CostBasis />,
    <Slide4Plans />,
    <Slide5Addons />,
    <Slide6Projections />,
    <Slide7Strategy />
  ];

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  return (
    <div className="h-screen w-full bg-slate-100 flex flex-col overflow-hidden font-sans">
      <Navbar currentSlide={currentSlide} totalSlides={slides.length} />
      
      <main className="flex-1 relative flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-6xl h-full max-h-[800px] bg-white rounded-[2rem] shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto p-8 md:p-12">
            {slides[currentSlide]}
          </div>
          
          {/* Navigation Controls */}
          <div className="h-20 border-t border-slate-100 px-8 flex justify-between items-center bg-slate-50/80">
            <div className="flex space-x-2">
              {slides.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 w-8 rounded-full transition-all duration-300 ${currentSlide === i ? 'bg-blue-600 w-12' : 'bg-slate-300'}`}
                />
              ))}
            </div>
            
            <div className="flex space-x-4">
              <button 
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="px-6 py-2 rounded-xl font-bold text-slate-500 hover:bg-slate-200 disabled:opacity-20 transition-all"
              >
                Anterior
              </button>
              <button 
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="px-8 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 disabled:opacity-20 transition-all shadow-lg shadow-blue-200"
              >
                {currentSlide === slides.length - 1 ? 'Finalizar' : 'Próximo'}
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="h-10 border-t border-slate-200 bg-white flex items-center justify-center px-8">
        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
          CONSOLIDADO FINANCEIRO E ESTRATÉGICO | EXCELÊNCIA © 2026
        </p>
      </footer>
    </div>
  );
};

export default App;
