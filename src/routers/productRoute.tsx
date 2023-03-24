import AddProduct from 'pages/Admin/ManageProduct/AddProduct';
import EditProduct from 'pages/Admin/ManageProduct/EditProduct';
import ManageProduct from 'pages/Admin/ManageProduct';

export const productRoute = {
  path: 'product',
  children: [
    {
      index: true,
      element: <ManageProduct />
    },
    {
      path: 'edit/:id',
      element: <EditProduct />
    },
    {
      path: 'add',
      element: <AddProduct />
    }
  ]
};
