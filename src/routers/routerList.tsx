import { RouteObject, useRoutes } from 'react-router-dom';
import Page404 from 'pages/Page404';
import { productRoute } from './productRoute';
import TemplateAdmin from 'layouts/Admin/TemplateAdmin';
import { categoryRoute } from './categoryRouter';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <TemplateAdmin />,
    children: [productRoute,categoryRoute]
  },
  { path: '*', element: <Page404 /> }
  // { path: "*", element: <Navigate to="/404" /> },
];
const RouterList = () => {
  const routesDashboard = useRoutes(routes);
  return routesDashboard;
};
export default RouterList;
