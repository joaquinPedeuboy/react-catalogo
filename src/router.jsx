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
        children: [
        {
            index: true,
            Component: Home,
        },
        {
            path: "products",
            Component: Products,
        },
        {
            path: "product/:slug",
            Component: ProductDetail,
        },
        ],
    },
    {
        path: "*",
        Component: NotFound,
    },
]);

export default router