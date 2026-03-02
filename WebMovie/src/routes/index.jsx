import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import TVShows from '../pages/TVShows';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'movies',
                element: <Movies />,
            },
            {
                path: 'tv-shows',
                element: <TVShows />,
            },
        ],
    },
]);

export default router;
