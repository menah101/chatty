import { useRoutes } from 'react-router-dom';
import { AuthTabs, ForgotPassword, ResetPassword } from '@pages/auth';
// import ResetPassword from '@pages/auth/reset-password/ResetPassword';

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: <AuthTabs />
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />
    },
    {
      path: '/reset-password',
      element: <ResetPassword />
    }
  ]);

  return elements;
};
