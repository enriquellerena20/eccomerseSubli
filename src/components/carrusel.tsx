import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Suponiendo que ya tienes un componente ProductCard
import ProductCard from './ProductCard';

export default function NewProductsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowSize, setWindowSize] = useState(4); // Número de productos visibles a la vez
  
  // Productos nuevos para el carrusel
  const newProducts = [
    {
      id: 1,
      name: "Botella Térmica",
      price: 30,
      image: "/api/placeholder/400/400",
      description: "Botella térmica personalizable 500ml"
    },
    {
      id: 2,
      name: "Mouse Pad XL",
      price: 22,
      image: "/api/placeholder/400/400",
      description: "Mouse pad premium personalizado"
    },
    {
      id: 3,
      name: "nuevo producto",
      price: 12,
      image: "/api/placeholder/400/400",
      description: "Pack de 10 stickers personalizados"
    },
    {
      id: 4,
      name: "nuevo producto",
      price: 18,
      image: "/api/placeholder/400/400",
      description: "Carcasa personalizada para smartphone"
    },
    {
      id: 5,
      name: "nuevo producto",
      price: 40,
      image: "/api/placeholder/400/400",
      description: "Álbum de fotos personalizado 30 páginas"
    },
    {
      id: 6,
      name: "nuevo producto",
      price: 20,
      image: "/api/placeholder/400/400",
      description: "Bolsa de tela personalizable ecológica"
    }
  ];

  // Ajustar el número de productos visibles según el tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setWindowSize(1); // Móvil
      } else if (window.innerWidth < 1024) {
        setWindowSize(2); // Tablet
      } else {
        setWindowSize(4); // Desktop
      }
    };

    // Establecer el tamaño inicial
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + windowSize;
      return nextIndex >= newProducts.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - windowSize;
      return nextIndex < 0 ? Math.max(0, newProducts.length - windowSize) : nextIndex;
    });
  };

 

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Productos Nuevos
          </h2>
          <div className="flex space-x-2">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Productos anteriores"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Productos siguientes"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / windowSize)}%)` }}
          >
            {newProducts.map((product) => (
              <div key={product.id} className="relative">
                <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                  NUEVO
                </span>
                <ProductCard
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  description={product.description}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Indicadores de paginación */}
        <div className="flex justify-center space-x-2 mt-6">
          {Array.from({ length: Math.ceil(newProducts.length / windowSize) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * windowSize)}
              className={`w-2 h-2 rounded-full transition-colors ${
                Math.floor(currentIndex / windowSize) === index 
                  ? 'bg-gray-800' 
                  : 'bg-gray-300'
              }`}
              aria-label={`Página ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}