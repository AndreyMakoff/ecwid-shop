import './CartPage.sass';
import { CartContext } from '../Cart/Cart';
import { useContext, useState } from 'react';
import Checkout from '../checkout/Checkout';

// компонент отображения корзина

function CartPage() {
  const [isCheckout, setCheckout] = useState(false);
  const arrayBascet = useContext(CartContext);
  // console.log(arrayBascet);
  // console.log(arrayBascet.order[0].id);
  const totalPrice = arrayBascet.order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  // Общеее количество
  const totalProducts = arrayBascet.order.reduce((sum, el) => {
    return sum + el.quantity;
  }, 0);

  const payProducts = function () {
    setCheckout(!isCheckout);
    if (window.pageYOffset > 0) {
      window.scroll(0, -75);
    }
  };

  return (
    <div>
      {isCheckout && (
        <Checkout
          totalPrice={totalPrice}
          payProducts={payProducts}
          totalProducts={totalProducts}
        />
      )}
      <div className={isCheckout ? 'cartpage-checkout' : 'cartpage'}>
        <h1 className='cartpage-title'>Корзина товаров</h1>
        <div className='cartpage-header'>
          <div className='cartpage-header__name'>наименование </div>
          <div className='cartpage-header__count'>количество </div>
          <div className='cartpage-header__price'>стоимость </div>
        </div>
        {arrayBascet.order.map((item) => {
          return (
            <div className='cartpage-product' key={item.id}>
              <img
                src={item.thumbnailUrl}
                alt='oops'
                className='cartpage-product__img'
              />
              <div className='cartpage-product__title'>
                {item.name.slice(9)}
              </div>
              <div className='cartpage-product__count'>
                <div className='cartpage-product__count-box'>
                  <div
                    className='cartpage-product__count-plus'
                    onClick={() => arrayBascet.incQuantity(item.id)}
                  >
                    +
                  </div>
                  <div className='cartpage-product__count-span'>
                    {item.quantity}
                  </div>
                  <div
                    className='cartpage-product__count-plus'
                    onClick={() => arrayBascet.decQuantity(item.id)}
                  >
                    -
                  </div>
                </div>
              </div>
              <div className='cartpage-product__price'>
                {item.price * item.quantity} р
              </div>
              <button
                className='cartpage-product__delete'
                onClick={() => arrayBascet.removeFromBascet(item.id)}
              >
                delete
              </button>
            </div>
          );
        })}

        <div className='cartpage-footer'>
          <div className='cartpage-footer__count'>{totalProducts} шт</div>
          <div className='cartpage-footer__price'>{totalPrice} руб.</div>
          <button className='cartpage-footer__button' onClick={payProducts}>
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
}
export default CartPage;
