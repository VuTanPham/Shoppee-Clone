import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import RegisterLayout from './layouts/RegisterLayout'
import Register from './pages/Register'
import ProductListLayout from './layouts/ProductLayout'
import Login from './pages/Login'
import Profile from './pages/Profile'
import path from './constants/path'
import { useContext } from 'react'
import { AppContext } from './contexts/app.context'

const isAuthenticated = true

function ProtectedRoute() {
    const { isAuthenticated } = useContext(AppContext)
    return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

function RejectedRoute() {
    const { isAuthenticated } = useContext(AppContext)
    return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

export default function useRouteElements() {
    const routeElements = useRoutes([
        {
            path: '',
            element: <RejectedRoute />,
            children: [
                {
                    path: path.login,
                    element: (
                        <RegisterLayout>
                            <Login />
                        </RegisterLayout>
                    )
                },
                {
                    path: path.register,
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
                    path: path.profile,
                    element: (
                        <ProductListLayout>
                            <Profile />
                        </ProductListLayout>
                    )
                }
            ]

        },
        {
            path: '',
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
