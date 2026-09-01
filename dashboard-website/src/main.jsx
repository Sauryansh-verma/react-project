import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/AppRoutes'
import {AuthProvider} from './context/AuthContext'
import {ToastContainer} from 'react-toastify'

createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <AppRoutes />
        <ToastContainer/>
    </AuthProvider>
)
