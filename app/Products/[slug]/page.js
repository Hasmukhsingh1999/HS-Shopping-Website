"use client";
import React from "react";

const page = ({ params }) => {
  const { slug } = params;
  console.log(slug);
  return <div>hi</div>;
};

export default page;
