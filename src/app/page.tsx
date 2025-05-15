"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import NewProductsCarousel from "@/components/carrusel";

const navigation = [
  { name: "Tienda", href: "#" },
  { name: "Acerca de ", href: "#" },
  { name: "Novedades", href: "#" },
  { name: "Contacto", href: "#" },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
<header className="fixed inset-x-0 top-0 z-40 bg-white/80 backdrop-blur-md shadow">
        <nav 
          aria-label="Global"
          className="flex items-center justify-between p-2 lg:px-4"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                src="/imagenes/Logo.jpg"
                alt="Logo de la web"
                width={60}
                height={60}
                className="object-contain"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Inicia sesion <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative w-full h-screen">
        <Image
          src="/imagenes/portada.jpg"
          alt="Imagen de portada"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-400 to-purple-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              />
            </div>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
              <div className="text-center">
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Explora
                  </a>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-pink-400 to-purple-400 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 px-5 max-w-7xl mx-auto font-sans">
        <section>
          <h2 className="text-3xl mb-10 text-center text-gray-800">
            Categorías Principales
          </h2>
          <div className="flex justify-center gap-8 flex-wrap mb-16">
            {[
              {
                id: 1,
                name: "Bolsos",
                icon: "/imagenes/categorias/bolsos.jpg",
                description: "Explora nuestra colección de ropa",
              },
              {
                id: 2,
                name: "Secadores",
                icon: "/imagenes/categorias/Secadores.jpg",
                description: "Descubre productos electrónicos",
              },
              {
                id: 3,
                name: "Peluches",
                icon: "/imagenes/categorias/Peluches.jpg",
                description: "Encuentra artículos para el hogar",
              },
              {
                id: 4,
                name: "Cajas",
                icon: "/imagenes/categorias/Cajaseconomica.jpg",
                description: "Explora productos de belleza",
              },
            ].map((category) => (
              <a
                key={category.id}
                href={`/categoria/${category.name.toLowerCase()}`}
                aria-label={category.description}
                className="flex flex-col items-center p-5 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer no-underline text-gray-800 w-36 focus:outline-none"
                role="link"
                tabIndex={0}
              >
                <div className="relative w-full h-36 mb-3">
                  <Image
                    src={category.icon || "/imagenes/placeholder.jpg"}
                    alt={category.name}
                    fill
                    className="object-cover object-center rounded-lg"
                  />
                </div>
                <span className="font-medium text-center">{category.name}</span>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl mb-10 text-center text-gray-800">
            Categorías Destacadas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                name: "Agendas & Calendarios",
                image: "/imagenes/categorias/agendas.jpg",
                description: "Agendas & Calendarios",
              },
              {
                id: 2,
                name: "Accesorios Personalizados",
                image: "/imagenes/categorias/llaveros.jpg",
                description: "Llaveros decorativos",
              },
              {
                id: 3,
                name: "Bolsos & Estuches",
                image: "/imagenes/categorias/bolsa.jpg",
                description: "Bolsos & Estuches",
              },
              {
                id: 4,
                name: "Regalos & Detalles",
                image: "/imagenes/categorias/cajas.jpg",
                description: "Cajas y empaques especiales",
              },
              {
                id: 5,
                name: "Textiles Sublimables",
                image: "/imagenes/categorias/polos.jpg",
                description: "Polos para personalizar",
              },
           
            ].map((category) => (
              <a
                key={category.id}
                href={`/categoria/${category.name.toLowerCase()}`}
                aria-label={category.description}
                className="flex flex-col items-center p-5 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer no-underline text-gray-800 focus:outline-none"
                role="link"
                tabIndex={0}
              >
                <div className="relative w-full h-64 mb-4">
                  <Image
                    src={category.image || "/imagenes/placeholder.jpg"}
                    alt={category.name}
                    fill
                    className="object-cover object-center rounded-lg"
                  />
                </div>
                <span className="font-medium text-lg text-center">
                  {category.name}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
              Productos Destacados
            </h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {[
                {
                  id: 1,
                  name: "Taza Personalizada",
                  price: 25,
                  image:
                    "https://images.pexels.com/photos/16733794/pexels-photo-16733794.jpeg",
                  description: "Taza de cerámica personalizable",
                },
                {
                  id: 2,
                  name: "Llavero Custom",
                  price: 15,
                  image:
                    "https://images.pexels.com/photos/18367582/pexels-photo-18367582.jpeg",
                  description: "Llavero personalizado de acrílico",
                },
                {
                  id: 3,
                  name: "Agenda 2024",
                  price: 35,
                  image:
                    "https://images.pexels.com/photos/7054724/pexels-photo-7054724.jpeg",
                  description: "Agenda personalizada premium",
                },
                {
                  id: 4,
                  name: "Polo Sublimado",
                  price: 45,
                  image:
                    "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg",
                  description: "Polo 100% algodón sublimado",
                },
              ].map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  description={product.description}
                />
              ))}
            </div>
          </div>
        </section>
              <>
      <NewProductsCarousel />
 
    </>
        <Footer />
      </div>
    </div>
    



    
  );
}