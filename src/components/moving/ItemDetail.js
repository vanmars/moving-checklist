import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { ChecklistContext } from '../../contexts/ChecklistContext'
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const ItemDetail = (props) => {
  const { toggleComplete, updateName } = useContext(ChecklistContext);
  const { item, setSelectedItem } = props;
  const [name, setName] = useState('');
  const completedMessage = item.complete ? "Complete!" : "Incomplete";
  const changeStatusMessage = item.complete ? "Mark Incomplete" : "Mark Complete";

  const handleSubmit = (e) => {
    e.preventDefault();
    updateName(item.id, name);
    setSelectedItem(null);
  }

  return ( 
    <div className="item-detail">
      <div className="status-section">
        <Typography variant="caption" component="p">Status: {completedMessage}</Typography>
        <Button 
          id="update-status-btn"
          variant="contained" 
          fontSize="small"
          onClick={()=> toggleComplete(item.id)}>
          {changeStatusMessage}
        </Button>
      </div>
      <div className='update-form'>
        <Typography variant="h6" component="h1">Update Item</Typography>
        <form onSubmit={handleSubmit}>
          <TextField 
            id="standard-basic" 
            placeholder="Item Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} required />
          <Button 
            id="update-item-btn"
            variant="contained" 
            type="submit">
              Update Item Name
          </Button>
        </form>
      </div>
    </div>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object, 
  setSelectedItem: PropTypes.func
}
 
export default ItemDetail;