import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/layout/Layout'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Notfound from './pages/Notfound'
import Terms from './pages/Terms'
import PrivacyPolicy from './pages/PrivacyPolicy'

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
        {
            path: "terms",
            Component: Terms,
            handle: {
                title: "Términos y Condiciones | Emilia Deco Home",
            },
        },
        {
            path: "privacy-policy",
            Component: PrivacyPolicy,
            handle: {
                title: "Política de Privacidad | Emilia Deco Home",
            },
        }
        ],
    },
    {
        path: "*",
        Component: Notfound,
        handle: {
            title: "404 | Emilia Deco Home",
        },
    },

]);

export default router