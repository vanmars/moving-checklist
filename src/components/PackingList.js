import React, { useContext } from 'react';
import { PackingContext } from '../contexts/PackingContext';
import ItemDetail from './ItemDetail';

const PackingList = () => {
  const { items } = useContext(PackingContext);

  return ( 
    <div className='packing-list'>
      <ul>
        {items.map(item => {
          return ( <ItemDetail item={item} key={item.id} />)
        })}
      </ul>
    </div>
   );
}
 
export default PackingList;