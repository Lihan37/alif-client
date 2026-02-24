import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import MainLayout from '../layout/MainLayout';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Events from '../pages/Events/Events';
import Menu from '../pages/Menu/Menu';

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
    ],
  },
]);

export default router;
