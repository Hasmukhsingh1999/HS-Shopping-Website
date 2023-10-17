import React from "react";
import { popularProducts } from "./assests/data"; // Corrected the import path
import Product from "./Product";
import Link from "next/link";

const Products = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 p-2 sm:p-8 md:p-10 lg:p-12">
        {popularProducts.map((item, id) => (
          <Product item={item} key={item.id} id={id} />
        ))}

        {/* Center the link within all columns */}
        <div className="col-span-full sm:col-span-2 md:col-span-3   flex justify-center">
          <Link href="/Products" className="text-center mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-slate-800 text-white">
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;

