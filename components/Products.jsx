import React from "react";
import { popularProducts } from "./assests/data";
import Product from "./Product";
import Link from "next/link";

const Products = () => {
  return (
    <div className={`w-[100]`}>
      <div className={`grid grid-cols-3 gap-5 px-[7vw] py-[3vw] w-[100%]`}>
        {popularProducts.map((item,id) => (
          <Product item={item} key={item.id} id={id}/>
        ))}

        <div className="col-span-3 flex justify-center"> {/* Center the link within all 3 columns */}
          <Link href="/Products" className={`text-center mt-[2vw] px-[2vw] py-[1vw] bg-slate-800 text-white`}>SHOP NOW</Link>
        </div>
      </div>
    </div>
  );
};

export default Products;

