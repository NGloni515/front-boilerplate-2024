import { authRoutes } from '@/routes/auth';

export const canAccessRoutes = (path: string) => {
  const authRouteAccess = authRoutes.children.some((route) => {
    const regex = new RegExp(route.path, 'g');
    return regex.test(path);
  });
  const canAccessPath =
    authRouteAccess || path === '/' || path.includes('/password-recovery/');
  return canAccessPath;
};
