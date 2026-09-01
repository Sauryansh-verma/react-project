import {RouterProvider, createBrowserRouter} from 'react-router'
import AuthLayout from '../layouts/AuthLayout'
import MainLayout from '../layouts/MainLayout'
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import PublicProtected from './PublicProtected';
import AuthProtected from './AuthProtected'

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
                    element: <MainLayout/>
                }
            ]
        }
    ]);

    return <RouterProvider router={router}/>
}

export default AppRoutes;