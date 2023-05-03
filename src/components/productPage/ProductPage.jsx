import './ProductPage.sass';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../../api';
import Linear from '../Liner/Linear';
import { CartContext } from '../Cart/Cart';

function ProductPage() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const productCart = useContext(CartContext);
  useEffect(() => {
    // получение категорий
    getOneProduct(id).then((data) => {
      setData(data);
      setLoading(false);
    });
  }, [id]);
  return loading ? (
    <Linear />
  ) : (
    <div className='container'>
      <div className='first-container'>
        <h3 className='first-container__title'> {data.name.slice(8, 25)}</h3>
        <img
          className='first-conteiner__image'
          src={data.thumbnailUrl}
          alt='Фото из API'
        />
        <div className='first-container__block'>
          <img
            src={data.thumbnailUrl}
            alt='oops'
            className='first-container__item1'
          />
          <img
            src={data.media.images[1].image160pxUrl}
            alt='oops'
            className='first-container__item2'
          />
        </div>
      </div>
      <div className='second-container'>
        <h3 className='second-container__price'> Цена: {data.price} ₽</h3>
        <span
          className='second-container__description'
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
        <button
          className='second-container__button'
          onClick={() => productCart.addToBascet(data)}
        >
          в корзину
        </button>
      </div>
    </div>
  );
}
export default ProductPage;
