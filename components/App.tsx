
import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { AppProvider } from './AppContext';
import Layout from './Layout';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import AutoPricing from '../pages/AutoPricing';
import SportStore from '../pages/SportStore';
import AIStylist from './AIStylist';

const { HashRouter: Router, Routes, Route } = ReactRouterDOM as any;

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/sport-store" element={<SportStore />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auto-pricing" element={<AutoPricing />} />
          </Routes>
        </Layout>
        <AIStylist />
      </Router>
    </AppProvider>
  );
};

export default App;
