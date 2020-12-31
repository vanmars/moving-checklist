import React, {useState, useContext} from 'react';
import { ChecklistContext } from '../contexts/ChecklistContext';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const NewItemForm = (props) => {
  const { setFormVisible } = props;
  const { addItem } = useContext(ChecklistContext);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(name);
    setName('');
    setFormVisible (false);
  };

  return ( 
    <div className='new-form'>
      <form onSubmit={handleSubmit}>
        <TextField 
          id="standard-basic" 
          placeholder="Item Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} required />
        <Button 
          id="new-item-btn"
          variant="contained" 
          color="inherit" 
          type="submit">
            Add Item to Checklist
          </Button>
      </form>
    </div>
   );
}
 
export default NewItemForm;