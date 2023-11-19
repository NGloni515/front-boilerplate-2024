import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { FullScreenSpinner } from '@/components/common';
import { lazyImport } from '@/utils/lazyImport';

const { Login } = lazyImport(() => import('@/dashboard/auth'), 'Login');

const Auth = () => {
  return (
    <Suspense fallback={<FullScreenSpinner h="100vh" />}>
      <Outlet />
    </Suspense>
  );
};

export const authRoutes = {
  path: '/',
  element: <Auth />,
  children: [{ path: 'login', element: <Login /> }],
};
