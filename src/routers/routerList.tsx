import { lazy } from 'react';
// import Layout from "../components/Template/Layout/DefaultLayout";
import { RouteObject, useRoutes } from 'react-router-dom';
import Page404 from 'pages/Page404';
import TemplateAdmin from 'layouts/Admin/TemplateAdmin';
import { productRoute } from './productRoute';
import DefaultLayout from 'layouts/DefaultLayout';
import Products from 'pages/Site/Products/Products';
import Checkout from 'pages/Site/Checkout/Checkout';
import Login from 'pages/Site/Login/Login';
const Home = lazy(() => import('pages/Site/Home/Home'));
const About = lazy(() => import('pages/Site/About/About'));

const routes: RouteObject[] = [
  // router client
  {
    path: '/',
    element: (
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    )
  },
  {
    path: 'products',
    element: (
      <DefaultLayout>
        <Products />
      </DefaultLayout>
    )
  },
  {
    path: 'checkout',
    element: (
      <DefaultLayout>
        <Checkout />
      </DefaultLayout>
    )
  },
  {
    path: 'login',
    element: (
      <DefaultLayout>
        <Login />
      </DefaultLayout>
    )
  },
  {
    path: 'about',
    element: (
      <DefaultLayout>
        <About />
      </DefaultLayout>
    )
  },
  // router admin manager
  {
    path: 'manage',
    children: [
      {
        index: true,
        element: (
          <TemplateAdmin>
            <Home />
          </TemplateAdmin>
        )
      },
      productRoute
    ]
  },
  { path: '404', element: <Page404 /> }
  // { path: "*", element: <Navigate to="/404" /> },
];
const RouterList = () => {
  const routesDashboard = useRoutes(routes);
  return routesDashboard;
};
export default RouterList;
