import {RouterProvider, createBrowserRouter} from 'react-router'
import AuthLayout from '../layouts/AuthLayout'
import MainLayout from '../layouts/MainLayout'
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import PublicProtected from './PublicProtected';
import AuthProtected from './AuthProtected'
import Home from '../pages/Home'
import Users from '../pages/Users'
import Products from '../pages/Products'

const AppRoutes = () => {
    const router = createBrowserRouter([
        {
            path: '',
            element: <PublicProtected/>,
            children: [
                {
                    path: '',
                    element: <AuthLayout/>,
                    children: [
                        {
                            path: '',
                            element: <LoginPage/>
                        },
                        {
                            path: '/register',
                            element: <RegisterPage/>
                        }
                    ]
                }
            ]
        },
        {
            path: '/main',
            element: <AuthProtected/>,
            children: [
                {
                    path: '',
                    element: <MainLayout/>,
                    children: [
                        {
                            path: '',
                            element: <Home/>
                        },
                        {
                            path: 'users',
                            element: <Users/>
                        },
                        {
                            path: 'products',
                            element: <Products/>
                        }
                    ]
                }
            ]
        }
    ]);

    return <RouterProvider router={router}/>
}

export default AppRoutes;