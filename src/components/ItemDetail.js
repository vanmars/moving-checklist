import React, { useContext } from 'react';
import { PackingContext } from '../contexts/PackingContext'

const ItemDetail = (props) => {
  const { deleteItem } = useContext(PackingContext);
  const { item } = props;

  return ( 
    <div className="item" onClick={() => deleteItem(item.id)}>
      <h1>{item.name}</h1>
      <p>{item.room}</p>
    </div>
   );
}
 
export default ItemDetail;