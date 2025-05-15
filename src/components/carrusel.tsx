import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

export default function NewProductsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowSize, setWindowSize] = useState(4);

  const newProducts = [
    { id: 1, name: "Botella Térmica", price: 30, image: "/api/placeholder/400/400", description: "Botella térmica personalizable 500ml" },
    { id: 2, name: "Mouse Pad XL", price: 22, image: "/api/placeholder/400/400", description: "Mouse pad premium personalizado" },
    { id: 3, name: "Stickers", price: 12, image: "/api/placeholder/400/400", description: "Pack de 10 stickers personalizados" },
    { id: 4, name: "Carcasa", price: 18, image: "/api/placeholder/400/400", description: "Carcasa personalizada para smartphone" },
    { id: 5, name: "Álbum", price: 40, image: "/api/placeholder/400/400", description: "Álbum de fotos personalizado 30 páginas" },
    { id: 6, name: "Bolsa Ecológica", price: 20, image: "/api/placeholder/400/400", description: "Bolsa de tela personalizable ecológica" }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setWindowSize(1);
      } else if (window.innerWidth < 1024) {
        setWindowSize(2);
      } else {
        setWindowSize(4);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, newProducts.length - windowSize);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + windowSize));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - windowSize));
  };

  const visibleProducts = newProducts.slice(currentIndex, currentIndex + windowSize);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Productos Nuevos</h2>
          <div className="flex space-x-2">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Siguiente"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleProducts.map((product) => (
            <div key={product.id} className="relative">
              <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                NUEVO
              </span>
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* Indicadores de página */}
        <div className="flex justify-center space-x-2 mt-6">
          {Array.from({ length: Math.ceil(newProducts.length / windowSize) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * windowSize)}
              className={`w-2 h-2 rounded-full transition-colors ${
                Math.floor(currentIndex / windowSize) === index ? 'bg-gray-800' : 'bg-gray-300'
              }`}
              aria-label={`Página ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
