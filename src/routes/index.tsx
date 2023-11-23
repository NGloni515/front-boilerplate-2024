import { useEffect } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';

import { useNotification } from '@/hooks';
import { useUser } from '@/libs/auth';
import { createNotFoundRoutes } from '@/utils/createNotFoundRoutes';
import { canAccessRoutes } from '@/utils/getUnprotectedRoutes';

import { authRoutes } from './auth';
import { dashboardOnboardingRoutes, dashboardRoutes } from './dashboard';

export const AppRoutes = () => {
  const { data: user } = useUser();
  const location = useLocation();
  const notification = useNotification();

  useEffect(() => {
    const accessRoutes = canAccessRoutes(location.pathname);
    if (user) {
      if (user?.email && accessRoutes) {
        notification.error({ title: 'Logged in' });
      }
    }
  }, [location]);

  const protectedRoutes = user ? [dashboardOnboardingRoutes] : [];
  const onboardingCompletedRoutes = [dashboardRoutes];

  const element = useRoutes([
    ...onboardingCompletedRoutes,
    ...protectedRoutes,
    authRoutes,
    ...createNotFoundRoutes(user ? '/dashboard/home' : '/login'),
  ]);

  return <>{element}</>;
};
