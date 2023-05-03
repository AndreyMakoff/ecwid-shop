import { Link } from 'react-router-dom';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import './Header.sass';
import { CartContext } from '../Cart/Cart';
import { useContext } from 'react';

function Header() {
  const quantity = useContext(CartContext);

  // let totalQuantity = quantity.order.reduce((acc, item) => {
  //   return item.quantity + acc;
  // }, 0);
  return (
    <nav className='header'>
      <a href='/' className='header__logo'>
        ECWID
      </a>

      <div className='block-cart'>
        <Link to={'/cartpage'}>
          <ShoppingCartCheckoutIcon
            color='primary'
            fontSize='large'
            className='block-cart__item'
          />
        </Link>
        {quantity.order.length ? (
          <span>
            {quantity.order.reduce((acc, item) => {
              return item.quantity + acc;
            }, 0)}
          </span>
        ) : null}
      </div>
    </nav>
  );
}
export default Header;
