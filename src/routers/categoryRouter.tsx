import ManageCategory from 'pages/Admin/ManageCategory';
import AddCategory from 'pages/Admin/ManageCategory/AddCategory';
import EditCategory from 'pages/Admin/ManageCategory/EditCategory';

export const categoryRoute = {
  path: 'category',
  children: [
    {
      index: true,
      element: <ManageCategory />
    },
    {
      path: 'edit/:id',
      element: <EditCategory />
    },
    {
      path: 'add',
      element: <AddCategory />
    }
  ]
};
