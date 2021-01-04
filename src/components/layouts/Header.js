import React from 'react';
import PropTypes from 'prop-types';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';

const Header = (props) => {
  const { leftIcon, headerText, rightIcon } = props;
  return ( 
    <div className='header'>
      {leftIcon}
      <Typography variant='h5' component="p" color='inherit' align="center">
        {headerText}
      </Typography>     
      {rightIcon}
    </div>
   );
}

Header.propTypes = {
  leftIcon: PropTypes.element,
  headerText: PropTypes.string,
  rightIcon: PropTypes.element
}
 
export default Header; 