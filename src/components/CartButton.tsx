/*

"use client";

import { useState } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

export default function CartButton() {
  const [itemCount, setItemCount] = useState(0);

  return (
    <button
      type="button"
      className="relative rounded-full bg-white p-2 text-gray-800 hover:bg-gray-50"
    >
      <span className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-indigo-600 text-xs text-white flex items-center justify-center">
        {itemCount}
      </span>
      <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
  
}
*/