
import { createBrowserRouter } from "react-router-dom";

import App from './App';
import Home from './components/Home';
import Car from './components/Car';
import About from './components/About'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/Home",
                element: <Home />
            },
            {
                path: "/car/:id",
                element: <Car />
            },
            {
                path: "/About",
                element: <About />
            }
        ]
    },
]);

export default router;
