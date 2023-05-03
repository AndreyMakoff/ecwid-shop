import { API_URL_CAT, API_URL_PROD, _API_KEY } from './config';
import ky from 'ky';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${_API_KEY}`,
  },
};

export async function getCategories() {
  try {
    return await ky(API_URL_CAT, options).json();
  } catch (err) {
    console.log(err.message);
  }
}
export async function getProducts() {
  try {
    return await ky(API_URL_PROD, options).json();
  } catch (err) {
    console.log(err.message);
  }
}

export async function getOneProduct(id) {
  try {
    return await ky(API_URL_PROD + '/' + id, options).json();
  } catch (err) {
    console.log(err.message);
  }
}

export async function getOneCategory(id) {
  try {
    return await ky(API_URL_CAT + '/' + id, options).json();
  } catch (err) {
    console.log(err.message);
  }
}

// Promise.all([getProducts, getCategories]).then((value) => console.log(value));

// export { getCategories, getProducts };
