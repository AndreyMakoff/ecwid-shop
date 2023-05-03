import './Checkout.sass';

function Checkout(props) {
  const { totalPrice, payProducts = Function.prototype, totalProducts } = props;
  return (
    <div className='checkout'>
      <div className='checkout__title'>
        <span> Ваш заказ на сумму {totalPrice} руб. оформлен! </span>
        <button className='checkout__delete' onClick={payProducts}>
          &times;
        </button>
      </div>
      <div className='checkout__text'>
        <span className='checkout__text__list'>
          {totalPrice > 0
            ? `Вы купили всякой всячины в количестве ${totalProducts} ед. Я сам в шоке!))`
            : 'Корзина пуста, закиньте в нее что-нибудь   '}
        </span>
      </div>

      <div className='checkout__footer'>
        <a href='/'>
          <button className='checkout__button'>
            Вернуться на главную сраницу
          </button>
        </a>{' '}
      </div>
    </div>
  );
}
export default Checkout;
