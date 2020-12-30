import React from 'react';

const ItemDetail = (props) => {
  const { item } = props;
  return ( 
    <div className="item">
      <h1>{item.name}</h1>
      <p>{item.room}</p>
    </div>
   );
}
 
export default ItemDetail;