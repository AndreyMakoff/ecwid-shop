import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoreisList from '../categoriesList/CategoreisList';
import Header from '../header/Header';
import CategoriesPage from '../categoriesPage/CategoriesPage';
import ProductPage from '../productPage/ProductPage';
import './App.sass';
import CartPage from '../cartPage/CartPage';
import Footer from '../footer/Footer';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<CategoreisList />} />
          <Route path='/categories/:id' element={<CategoriesPage />} />
          <Route path='/categories/:id/product/:id' element={<ProductPage />} />
          <Route path='/cartpage' element={<CartPage />} />
          <Route path='/product/:id' element={<ProductPage />} />
        </Routes>
        <Footer className='footer' />
      </Router>
    </div>
  );
}

export default App;
