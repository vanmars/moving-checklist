import HomeIcon from '@material-ui/icons/Home';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

const Navbar = () => {
  return ( 
    <div className='navbar'>
      <HomeIcon className="nav-icon" color="disabled" fontSize="large" />
      <LocalShippingIcon className="nav-icon" color="disabled" fontSize="large" />
      <ChatBubbleIcon className="nav-icon" color="disabled" fontSize="large" />
    </div>
   );
}
 
export default Navbar;