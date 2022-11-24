import { Fragment, useState } from 'react';
import { AddCategory } from './components';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;

    setCategories([ newCategory, ...categories ]);
  };
 
  return (
    <Fragment>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={ (newCategory) => onAddCategory(newCategory) }/>
      { categories.map(category => <GifGrid key={`${category.toLowerCase()}-${Math.random() * 9999}`} category={ category }/>) }
    </Fragment>
  );
}

export default GifExpertApp;