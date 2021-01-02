import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';
import { ChecklistContext } from '../contexts/ChecklistContext';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

const MovingList = (props) => {
  const { setSelectedItem } = props
  // const { items, deleteItem, toggleComplete } = useContext(ChecklistContext);

  // Listen for changes to checklist collection
  useFirestoreConnect([
    { collection: 'checklist' }
  ]);

  // Redux Hook to grab data from checklist collection
  const items = useSelector(state => state.data.checklist);
  console.log(items)

  return ( 
    <div className='moving-list'>
      <Typography variant="subtitle2" component="p" className="items-counter">You have {items.length} items on your checklist.</Typography>

      <ul>
        {Object.values(items).map(item => {
          const icon = item.complete ? 
          <CheckBoxIcon 
            // onClick={()=>toggleComplete(item.id)} 
            fontSize='medium'
            color='disabled'
            className="checkbox"
          /> : 
          <CheckBoxOutlineBlankIcon 
            // onClick={()=>toggleComplete(item.id)}  
            fontSize='medium'
            color='disabled'
            className="checkbox"
          />

          return (
            <React.Fragment>
              <div className="item-div" key={item.id}>
                { icon }
                {/* <Typography variant="body2" onClick={() => deleteItem(item.id)}>{item.name}  </Typography> */}
                <Typography variant="body2">{item.name}</Typography>
                <ArrowForwardIosIcon 
                  onClick={() => setSelectedItem(item)} 
                  fontSize="small"
                  color="disabled"
                  className='forward-arrow'
                />
              </div>
              <hr />
            </React.Fragment>
          )
        })}
      </ul>
    </div>
   );
}

MovingList.propTypes = {
  setSelectedItem: PropTypes.func
}
 
export default MovingList;