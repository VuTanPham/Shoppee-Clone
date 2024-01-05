import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import RegisterLayout from './layouts/RegisterLayout'
import Register from './pages/Register'
import ProductListLayout from './layouts/ProductLayout'
import Login from './pages/Login'
import Profile from './pages/Profile'

const isAuthenticated = true

function ProtectedRoute() {
    return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

function RejectedRoute() {
    return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

export default function useRouteElements() {
    const routeElements = useRoutes([
        {
            path: '',
            element: <RejectedRoute />,
            children: [
                {
                    path: 'login',
                    element: (
                        <RegisterLayout>
                            <Login />
                        </RegisterLayout>
                    )
                },
                {
                    path: 'register',
                    element: (
                        <RegisterLayout>
                            <Register />
                        </RegisterLayout>
                    )
                }
            ]
        },
        {
            path: '',
            element: <ProtectedRoute />,
            children: [
                {
                    path: 'profile',
                    element: (
                        <ProductListLayout>
                            <Profile />
                        </ProductListLayout>
                    )
                }
            ]

        },
        {
            path: '/',
            index: true,
            element: (
                <ProductListLayout >
                    <ProductList />
                </ProductListLayout>
            )
        },
    ])
    return routeElements
}
