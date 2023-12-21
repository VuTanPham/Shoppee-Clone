import { useRoutes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import RegisterLayout from './layouts/RegisterLayout'
import Register from './pages/Register'
import ProductListLayout from './layouts/ProductLayout'
import Login from './pages/Login'


export default function useRouteElements() {
    const routeElements = useRoutes([
        {
            path: '/',
            element: (
                <ProductListLayout >
                    <ProductList />
                </ProductListLayout>
            )
        },
        {
            path: '/login',
            element: (
                <RegisterLayout>
                    <Login />
                </RegisterLayout>
            )
        },
        {
            path: '/register',
            element: (
                <RegisterLayout>
                    <Register />
                </RegisterLayout>
            )
        }
    ])
    return routeElements
}
