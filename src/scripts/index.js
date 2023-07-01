/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import 'regenerator-runtime';
import '../styles/style.css';
import App from './views/App';
import './views/components/header-logo';
import './views/components/footer-brand';
import './views/components/jumbotron-bg';
import './views/components/product-card';
import './views/components/about-us';
import './views/components/trusted-reviews';
import './views/components/diskon-card';
import './views/components/collection';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
