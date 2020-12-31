import React, { useContext } from 'react';
import { PackingContext } from '../contexts/PackingContext';
import ItemDetail from './ItemDetail';
import NewPackingItemForm from './NewPackingItemForm';

const PackingList = () => {
  const { items } = useContext(PackingContext);

  return ( 
    <div className='packing-list'>
      <h1>Packing List</h1>
      <hr />
      <p>You have {items.length} items left to pack.</p>
      <ul>
        {items.map(item => {
          return ( <ItemDetail item={item} key={item.id} />)
        })}
      </ul>
      <hr />
      <NewPackingItemForm />
    </div>
   );
}
 
export default PackingList;