import About from '../views/pages/about';
import Cart from '../views/pages/cart';
import Contact from '../views/pages/contact';
import Product from '../views/pages/product';
import Home from '../views/pages/home';
import Login from '../views/pages/login';
import Register from '../views/pages/register';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/about': About,
  '/contact': Contact,
  '/product': Product,
  '/cart': Cart,
  '/login': Login,
  '/register': Register,
};

export default routes;
