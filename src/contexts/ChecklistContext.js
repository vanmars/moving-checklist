import React, { useState, createContext } from 'react';
import { v4 } from 'uuid';

export const ChecklistContext = createContext();

const ChecklistContextProvider = (props) => {
  const [items, setItems] = useState([
    { name: 'Pack office books', complete: false, id: 1},
    { name: 'Reserve U-Haul', complete: false, id: 2}
  ])

  const addItem = (name) => {
    setItems([...items, {name, complete: false, id: v4()} ]);
  }

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  }

  const updateName = (id, name) => {
    let item = items.filter(item => item.id == id )[0];
    item.name = name;
    setItems(items.filter(item => item.id !== id).concat([...item]));
  }

  const toggleComplete = (id) => {
    let item = items.filter(item => item.id == id)[0];
    item.complete = !item.complete;
    setItems(items.filter(item => item.id !== id).concat([...item]));
  }

  return ( 
    <ChecklistContext.Provider value={{ items, addItem, deleteItem, updateName, toggleComplete }}>
      { props.children }
    </ChecklistContext.Provider>
   );
}
 
export default ChecklistContextProvider;