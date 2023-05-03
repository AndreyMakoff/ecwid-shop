import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Product.sass';
import { Link } from 'react-router-dom';
// Данные продукты отображаются на главной странице
function Product(props) {
  const {
    id,
    thumbnailUrl,
    name,
    price,
    addToBascet = Function.prototype,
  } = props;
  return (
    <div className='product' id={id}>
      <Card sx={{ maxWidth: 250 }}>
        <Link className='product__link' to={`product/${id}`}>
          <CardActionArea>
            <CardMedia
              className='product__img'
              component='img'
              height='250'
              image={thumbnailUrl}
              alt='green iguana'
            />
            <CardContent>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
                className='product__name'
              >
                {name.slice(8, 25)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <button
          className='product__btn'
          onClick={() => addToBascet({ id, price, name, thumbnailUrl })}
        >
          Купить за {price} ₽
        </button>
      </Card>
    </div>
  );
}

export default Product;
