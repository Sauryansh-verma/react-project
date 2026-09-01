import {useNavigate} from 'react-router'
import {useForm} from 'react-hook-form'
import { useContext } from 'react';
import {Auth} from '../context/AuthContext'
import {toast} from 'react-toastify'

const useAuth = () => {
    const navigate = useNavigate();

    const {registeredUser, setRegisteredUser, setLoggedInUser} = useContext(Auth)

    const {register, handleSubmit, reset, formState: {errors}} = useForm({mode: 'onChange'});
    const registerFormSubmit = data => {
        let user = registeredUser.find(val => val.email === data.email);
        if(user){
            toast.error('User already exists');
        }else{
            let arr = [...registeredUser, data];
            setRegisteredUser(arr);
            localStorage.setItem('registeredUser', JSON.stringify(arr));
            toast.success('User registered successfully');
            setLoggedInUser(data);
            localStorage.setItem('loggedInUser', JSON.stringify(data));
            navigate('/main');
        }
        reset();
    }

    const loginFormSubmit = data => {
        let user = registeredUser.find(val => val.email === data.email && val.password === data.password);

        if(user){
            toast.success('Logged In successful');
            navigate('/main');
            setLoggedInUser(data);
            localStorage.setItem('loggedInUser', JSON.stringify(data));
        }else{
            toast.error('User not found or invalid credential');
        }
        reset();
    }
  return {
    navigate,
    register,
    handleSubmit,
    registerFormSubmit,
    loginFormSubmit,
    errors
  }
}

export default useAuth
