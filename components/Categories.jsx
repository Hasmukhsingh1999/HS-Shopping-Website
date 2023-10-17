import React from 'react';
import { categories } from './assests/data'; // Corrected the import path
import CategoryItems from './CategoryItems';

const Categories = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 p-2 sm:p-8 md:p-10 lg:p-12">
      {categories.map((item, index) => (
        <CategoryItems item={item} key={index} />
      ))}
    </div>
  );
};

export default Categories;

