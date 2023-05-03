import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getOneCategory } from '../../api';
import Linear from '../Liner/Linear';
import ProductsList from '../productsList/ProductsList';
import { CartContext } from '../Cart/Cart';
import './CategoriesPage.sass';

// функционал для страницы категории при переходе с главной страницы
function CategoriesPage() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const catProductCart = useContext(CartContext);

  useEffect(() => {
    getOneCategory(id).then((data) => {
      setData(data);
      setLoading(false);
    });
  }, [id]);

  return loading ? (
    <div className='liner'>
      <Linear />
    </div>
  ) : (
    <div>
      <p className='title'>{data.name}</p>
      <ProductsList catId={id} addToBascet={catProductCart.addToBascet} />
    </div>
  );
}

export default CategoriesPage;
