"use client";
import React from "react";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
import Link from "next/link";

const Product = ({ item, id }) => {
  return (
    <div className="flex-1 m-3 relative" style={{ height: "70vh" }}>
      <div style={{ height: "100%", overflow: "hidden" }}>
        <Link href={`/Products/${id}`}>
          <img
            src={item.img}
            alt="images"
            style={{ width: "100%", objectFit: "cover", height: "100%" }}
          />
        </Link>
      </div>

      <div
        className={`absolute h-[100%] w-[100%] top-0 left-0 flex items-center justify-center`}
      >
        <div
          className={`flex gap-2 px-[20px] py-[10px] rounded-3xl bg-black bg-opacity-40`}
        >
          <ShoppingCartOutlined className="text-white" />
          <SearchOutlined className="text-white" />
          <FavoriteBorderOutlined className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Product;
