import { useState } from 'react';

import { AddCategory, GifGrid } from './components';

export const GifsApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (category) => {
    const newCategory = category.toLowerCase();
    if (categories.some((cat) => cat.toLowerCase() === newCategory)) return;

    setCategories([category, ...categories]);
  };

  return (
    <>
      <h1>Gifs App</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
