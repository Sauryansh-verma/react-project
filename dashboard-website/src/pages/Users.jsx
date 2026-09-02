import { useEffect, useState } from 'react'
import axiosInstance from '../config/axiosInstance'
import UserCard from '../components/UserCard';

const Users = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getAllUsers = async() => {
    try{
      let users = await axiosInstance.get('/users');
      setAllUsers(users.data);
      setIsLoading(false);
    }catch(error){
      console.log('error', error);
    }
  }
  
  useEffect(() => {
    getAllUsers();
  }, []);

  if(isLoading){
    return <div className='h-screen flex items-center justify-center text-2xl font-bold'>
      <h1>Loading...</h1>
    </div>
  }
  return (
    <div className='grid grid-cols-4 gap-4'>
      {
        allUsers.map(val => <UserCard user={val}/>)
      }
    </div>
  )
}

export default Users
