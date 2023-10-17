"use client";
import React, { useEffect, useState } from "react";
import Announcement from "@/components/Announcement";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Products from "@/components/Products";
import Loader from "./loader"; // Import the loader component

const Page = () => {
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    // Simulate data loading with a setTimeout
    setTimeout(() => {
      setDataLoaded(true);
    }, 2000);
  }, []);

  return (
    <div>
      {!dataLoaded ? ( // Render the loader if data is not yet loaded
        <Loader />
      ) : (
        <>
          <Announcement />
          <Navbar />
          <div>
            <h1 className={`py-[3vw] px-[9vw] font-bold text-3xl`}>Dresses</h1>
            <div className="w-full flex items-center justify-between px-[9vw]">
              <div className="flex gap-3">
                <span className="text-xl font-semibold">Filter Product: </span>
                <select className="p-2 border border-gray-300 rounded">
                  <option disabled selected>
                    Color
                  </option>
                  <option>White</option>
                  <option>Black</option>
                  <option>Red</option>
                  <option>Blue</option>
                  <option>Yellow</option>
                  <option>Green</option>
                </select>
                <select className="p-2 border border-gray-300 rounded">
                  <option disabled selected>
                    Size
                  </option>
                  <option>Xs</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl font-bold">Sort Products:</span>
                <select className="p-2 border border-gray-300 rounded">
                  <option disabled selected>
                    Newest
                  </option>
                  <option>Price (asc)</option>
                  <option>Price (desc)</option>
                </select>
              </div>
            </div>
            <Products />
            <Newsletter />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
