import './CategoreisList.sass';
import { useState, useEffect, useContext } from 'react';
import Linear from '../Liner/Linear';
import Categories from '../categories/Categories';
import { getCategories } from '../../api';
import ProductsList from '../productsList/ProductsList';
import { CartContext } from '../Cart/Cart';

// главная страница
function CategoreisList() {
  const context = useContext(CartContext);

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // получение категорий
    getCategories().then((data) => {
      setItems(data.items);
      setLoading(false);
    });
  }, []);
  return (
    <div className='categoryList'>
      <h3 className='categoryList__title'>НАШИ КАТЕГОРИИ</h3>
      {/* <Cart quantity={order.length} /> */}
      <div className='categoryList__box'>
        {loading ? <Linear /> : <Categories items={items} />}
      </div>
      <div className='productsList'>
        <h3 className='productsList__title'>НАШИ ЛУЧШИЕ ТОВАРЫ</h3>
        <div className='productsList_box'>
          {<ProductsList addToBascet={context.addToBascet} />}
        </div>
      </div>
    </div>
  );
}
export default CategoreisList;
