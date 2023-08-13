import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from './redux/store';
import { Provider } from 'react-redux';

// importing Components
import Error from './component/eroor/Error';
import Home from './component/homeComponent/Home';
import DataView from './component/details/DataView';
import Cart from './component/cart/Cart';

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement : <Error />,
    children : [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/detail/:bookId",
        element: <DataView />
      },
      {
        path: "/cart",
        element: <Cart />
      },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >

     
      <RouterProvider router={AppRoutes} />

  </Provider>
);


reportWebVitals();
