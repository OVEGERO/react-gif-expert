import { useState } from "react";
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    //console.log('onAddCategory: ', newCategory);
    if ( categories.includes(newCategory) ) return;
    setCategories( [ newCategory,...categories ] );
  }

  return (
    <>
        {/** Titulo */}
        <h1>GifExpertApp</h1>


        {/** Input */}
        <AddCategory 
          //setCategories={ setCategories }
          // on... significa, comunmente, que es un evento y emite un valor
          onNewCategory={ onAddCategory }
        />

        {/** Listado gifs */}
        { 
          categories.map( category => (
              <GifGrid key={category} category={ category } />
            )
          )
        }
        
    </>
  )
}
