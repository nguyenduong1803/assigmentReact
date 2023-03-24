import { Suspense } from 'react';
import RouterList from './routerList';

const Routers = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterList />
    </Suspense>
  );
};
export default Routers;
