import React from 'react';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

const Splash = () => {
  return ( 
    <div className="splash-container">
      <Typography variant="h3" component="h1">Welcome Home</Typography>
      <LocalShippingIcon id="animated-truck" />
    </div>
   );
}
 
export default Splash;