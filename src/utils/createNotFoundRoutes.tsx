import { Navigate } from 'react-router-dom';

export const createNotFoundRoutes = (defaultPath: string) => [
  { path: '*', element: <Navigate to={defaultPath} replace /> },
  { index: true, element: <Navigate to={defaultPath} replace /> },
];
