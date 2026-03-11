import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AlongkarLayout from '../layout/AlongkarLayout';
import MainLayout from '../layout/MainLayout';
import About from '../pages/About/About';
import AdminDashboard from '../pages/Admin/AdminDashboard';
import AlongkarAbout from '../pages/AlongkarBranch/AlongkarAbout';
import AlongkarContact from '../pages/AlongkarBranch/AlongkarContact';
import AlongkarEvents from '../pages/AlongkarBranch/AlongkarEvents';
import AlongkarHome from '../pages/AlongkarBranch/AlongkarHome';
import AlongkarMenu from '../pages/AlongkarBranch/AlongkarMenu';
import AlongkarOurPeople from '../pages/AlongkarBranch/AlongkarOurPeople';
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
  {
    path: '/alongkar-branch',
    element: <AlongkarLayout />,
    children: [
      {
        index: true,
        element: <AlongkarHome />,
      },
      {
        path: 'menu',
        element: <AlongkarMenu />,
      },
      {
        path: 'about',
        element: <AlongkarAbout />,
      },
      {
        path: 'events',
        element: <AlongkarEvents />,
      },
      {
        path: 'contact',
        element: <AlongkarContact />,
      },
      {
        path: 'our-people',
        element: <AlongkarOurPeople />,
      },
    ],
  },
]);

export default router;
