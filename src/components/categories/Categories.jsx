import Category from '../category/Category';
import './Categories.sass';

function Categories(props) {
  const { items = [] } = props;

  // if (!items.length) {
  //   return <h3>Nothing here</h3>;
  // }
  return (
    <div className='categories'>
      {items.map((item) => {
        return <Category key={item.id} id={item.id} {...item} />;
      })}
    </div>
  );
}

export default Categories;
