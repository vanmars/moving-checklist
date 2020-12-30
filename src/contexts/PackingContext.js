import React, { useState, createContext } from 'react';

export const PackingContext = createContext();

const PackingContextProvider = (props) => {
  const [items, setItems] = useState([
    { name: 'pans', room: 'kitchen', id: 1},
    { name: 'books', room: 'office', id: 2}
  ])

  return ( 
    <PackingContext.Provider value={{items}}>
      { props.children }
    </PackingContext.Provider>
   );
}
 
export default PackingContextProvider;