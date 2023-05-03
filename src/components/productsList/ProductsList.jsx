import { useEffect, useState } from 'react';
// import Linear from '../Liner/Linear';
import Products from '../products/Products';
import { getProducts } from '../../api';

// функционал для вывода продуктов на главную страницу

function ProductsList(props) {
  const { catId, addToBascet = Function.prototype } = props;
  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    // получение продуктов
    getProducts().then((data) => {
      setProducts(data.items);
    });
  }, []);

  return (
    <div>
      <Products products={products} catId={catId} addToBascet={addToBascet} />
      {/* с лоудером
       {loading ? (
        <Linear />
      ) : (
        <Products products={products} catId={catId} addToBascet={addToBascet} />
        // <Products products={products} catId={catId} /> без добавления в корзину
      )} */}
    </div>
  );
}
export default ProductsList;
