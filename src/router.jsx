import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/layout/Layout'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        handle: {
            title: "Emilia Deco Home",
        },
        children: [
        {
            index: true,
            Component: Home,
        },
        {
            path: "products",
            Component: Products,
            handle: {
                title: "Productos | Emilia Deco Home",
            },
        },
        {
            path: "product/:slug",
            Component: ProductDetail,
            handle: {
                title: "Producto | Emilia Deco Home",
            },
        },
        ],
    },
    {
        path: "*",
        Component: NotFound,
        handle: {
            title: "404 | Emilia Deco Home",
        },
    },
]);

export default router