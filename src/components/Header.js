import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {

  const cartItems = useSelector(store => store.cart.items)
return (
    <div className="header">
     <Link to={'/'} className="link">
     <img
          className="logo"
          data-testid = "logo"
          src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148986823.jpg?size=626&ext=jpg"
          alt="Logo"
        />
     </Link>  
      
      <div className="nav-items">
        <ul>
        <Link to={'/'} className="link"><li>Home</li></Link>   
        <Link to={'/about'} className="link"><li>About</li></Link> 
        <Link to={'/contact'} className="link"><li>Contact Us</li></Link> 
        <Link to={'/instaMart'} className="link"><li>Instamart</li></Link> 
        <Link to={'/cart'} className="link"><li data-testid="cart">Cart-{cartItems.length}</li></Link> 
        </ul>
      </div>
    </div>
  ) };

  export default Header