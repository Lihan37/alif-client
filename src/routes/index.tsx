import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import MainLayout from '../layout/MainLayout';
import About from '../pages/About/About';
import AdminDashboard from '../pages/Admin/AdminDashboard';
import AlongkarBranch from '../pages/AlongkarBranch/AlongkarBranch';
import Contact from '../pages/Contact/Contact';
import Events from '../pages/Events/Events';
import Login from '../pages/Login/Login';
import Menu from '../pages/Menu/Menu';
import OurPeople from '../pages/OurPeople/OurPeople';
import Signup from '../pages/Signup/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: '/menu',
        element: <Menu />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/events',
        element: <Events />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/our-people',
        element: <OurPeople />,
      },
      {
        path: '/alongkar-branch',
        element: <AlongkarBranch />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/admin',
        element: <AdminDashboard />,
      },
    ],
  },
]);

export default router;
