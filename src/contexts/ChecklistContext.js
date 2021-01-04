import React, { useState, createContext } from 'react';
import { v4 } from 'uuid';

export const ChecklistContext = createContext();

const ChecklistContextProvider = (props) => {
  const [items, setItems] = useState({
    1: { name: 'Pack office books', complete: false, id: 1},
    2: { name: 'Reserve U-Haul', complete: false, id: 2}
  })

  const addItem = (name) => {
    const id = v4();
    setItems({...items, [id]: {name, complete: false, id}});
  }

  const deleteItem = (id) => {
    let newState = {...items}
    delete newState[id];
    setItems(newState);
  }

  const updateName = (id, name) => {
    let newState = {...items}
    let itemToUpdate = newState[id];
    itemToUpdate.name = name;
    setItems(newState);
  }

  const toggleComplete = (id) => {
    let newState = {...items}
    let itemToUpdate = newState[id];
    itemToUpdate.complete = !itemToUpdate.complete;
    setItems(newState);
  }

  return ( 
    <ChecklistContext.Provider value={{ items, addItem, deleteItem, updateName, toggleComplete }}>
      { props.children }
    </ChecklistContext.Provider>
   );
}
 
export default ChecklistContextProvider;