import React, {useState, useContext} from 'react';
import { PackingContext } from '../contexts/PackingContext';

const NewPackingItemForm = () => {
  const { addItem } = useContext(PackingContext)
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(name, room);
    setName('');
    setRoom('');
  }

  return ( 
    <div className='new-form'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Item's Room" value={room} onChange={(e) => setRoom(e.target.value)}  />
        <button type="submit">Add Packing List Item!</button>
      </form>
    </div>
   );
}
 
export default NewPackingItemForm;