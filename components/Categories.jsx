import React from 'react';
import { categories } from './assests/data';
import CategoryItems from './CategoryItems';

const Categories = () => {
  return (
    <div className={`grid grid-cols-3 gap-5 p-[7vw]`}>
      {categories.map((item, index) => (
        <CategoryItems item={item} key={index} />
      ))}
    </div>
  );
};

export default Categories;
