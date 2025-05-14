"use client";

import { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/20/solid";

// This would come from your database in a real app
const product = {
  name: "Taza Personalizada",
  price: "S/. 25.00",
  rating: 4,
  images: [
    {
      id: 1,
      src: "https://images.pexels.com/photos/16733794/pexels-photo-16733794.jpeg",
      alt: "Taza personalizada vista frontal.",
    },
    // Add more images as needed
  ],
  colors: [
    { name: "Blanco", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Negro", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "11oz", inStock: true },
    { name: "15oz", inStock: true },
  ],
  description:
    "Taza de cerámica de alta calidad para sublimación, perfecta para personalizar con tus diseños favoritos.",
  details: [
    "Material de cerámica premium",
    "Apta para microondas",
    "Lavable en lavavajillas",
    "Acabado brillante",
  ],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetail() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <div className="flex flex-col-reverse">
            <div className="aspect-h-1 aspect-w-1 w-full">
              <Image
                src={product.images[0].src}
                alt={product.images[0].alt}
                width={600}
                height={600}
                className="h-full w-full object-cover object-center sm:rounded-lg"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {product.name}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                {product.price}
              </p>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        product.rating > rating
                          ? "text-yellow-400"
                          : "text-gray-300",
                        "h-5 w-5 flex-shrink-0",
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{product.rating} out of 5 stars</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-base text-gray-900">{product.description}</p>
            </div>

            <form className="mt-6">
              {/* Colors */}
              <div>
                <h3 className="text-sm text-gray-600">Color</h3>
                <div className="mt-2">
                  <div className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        type="button"
                        className={classNames(
                          color.class,
                          selectedColor.name === color.name
                            ? "ring ring-offset-1"
                            : "ring-2 ring-transparent",
                          "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none",
                        )}
                        onClick={() => setSelectedColor(color)}
                      >
                        <span className="sr-only">{color.name}</span>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            "h-8 w-8 rounded-full border border-black border-opacity-10",
                          )}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sizes */}
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm text-gray-600">Tamaño</h3>
                </div>
                <div className="mt-2">
                  <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                    {product.sizes.map((size) => (
                      <button
                        key={size.name}
                        type="button"
                        className={classNames(
                          selectedSize.name === size.name
                            ? "border-indigo-600 ring-2 ring-indigo-600"
                            : "border-gray-200",
                          "relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1",
                        )}
                        onClick={() => setSelectedSize(size)}
                      >
                        <span>{size.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Agregar al carrito
              </button>
            </form>

            {/* Product details */}
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Detalles</h2>
              <div className="mt-4 space-y-6">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.details.map((detail) => (
                    <li key={detail} className="text-gray-400">
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
