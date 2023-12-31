import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App';
import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

let root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Auth0Provider
    domain={import.meta.env.REACT_APP_AUTH_DOMAIN as string}
    clientId={import.meta.env.REACT_APP_CLIENT_ID as string}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);