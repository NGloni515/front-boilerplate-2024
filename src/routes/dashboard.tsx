import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { FullScreenSpinner } from '@/components/common/FullScreenSpinner';
import { MainLayout } from '@/components/layouts';
import { createNotFoundRoutes } from '@/utils/createNotFoundRoutes';
import { lazyImport } from '@/utils/lazyImport';

// Misc
const { Home } = lazyImport(() => import('@/dashboard/misc'), 'Home');
/* 
// Customers
const { Customers } = lazyImport(
  () => import('@/dashboard/customers'),
  'Customers'
);
const { CreateCustomer } = lazyImport(
  () => import('@/dashboard/customers'),
  'CreateCustomer'
);
const { UpdateCustomer } = lazyImport(
  () => import('@/dashboard/customers'),
  'UpdateCustomer'
);
 */
const Dashboard = () => {
  return (
    <MainLayout>
      <Suspense fallback={<FullScreenSpinner />}>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const dashboardOnboardingRoutes = {
  path: 'dashboard',
  element: <Dashboard />,
  children: [
    { path: 'home', element: <Home /> },
    {
      path: 'onboarding-path',
      children: [
        { path: 'onboarding', element: <div /> },
        { path: 'upload-data', element: <div /> },
      ],
    },
  ],
};

export const dashboardRoutes = {
  path: 'dashboard',
  element: <Dashboard />,
  children: [
    {
      path: 'customers',
      children: [
        /* { path: '', element: <Customers /> },
        { path: 'create', element: <CreateCustomer /> },
        { path: ':customerId/update', element: <UpdateCustomer /> }, */
      ],
    },
    ...createNotFoundRoutes('home'),
  ],
};
