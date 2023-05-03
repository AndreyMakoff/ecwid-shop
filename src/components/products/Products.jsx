import Product from '../product/Product';
import './Products.sass';

// фильтрация продуктов для отображения  на главной странице, если приходит id для категории, то выводятся только товары категории на странице категории
function Products(props) {
  const { products = [], catId, addToBascet = Function.prototype } = props; // добавь при необходимости idCategory
  // if (!products.length) {
  //   return <h3>Nothing here</h3>;
  // }

  return catId ? (
    <div className='products_for-categories'>
      {products
        .filter((product) => {
          return product.categoryIds[0] === Number(catId);
        })
        .map((item) => {
          return (
            <Product
              key={item.id}
              id={item.id}
              {...item}
              addToBascet={addToBascet}
            />
          );
        })}
    </div>
  ) : (
    <div className='products'>
      {products.map((item) => {
        return (
          <Product
            key={item.id}
            id={item.id}
            {...item}
            addToBascet={addToBascet}
          />
        );
      })}
    </div>
  );
}

export default Products;
