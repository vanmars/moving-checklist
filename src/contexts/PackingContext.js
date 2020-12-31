import React, { useState, createContext } from 'react';
import { v4 } from 'uuid';

export const PackingContext = createContext();

const PackingContextProvider = (props) => {
  const [items, setItems] = useState([
    { name: 'pans', room: 'kitchen', id: 1},
    { name: 'books', room: 'office', id: 2}
  ])

  const addItem = (name, room) => {
    setItems([...items, {name, room, id: v4()} ])
  }

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  return ( 
    <PackingContext.Provider value={{items, addItem, deleteItem }}>
      { props.children }
    </PackingContext.Provider>
   );
}
 
export default PackingContextProvider;