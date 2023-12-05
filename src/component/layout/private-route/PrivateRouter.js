import React from 'react'
import { useSelector } from 'react-redux';
import {Navigate} from 'react-router-dom';

export const PrivateRouter = ({children}) => {
    const {user} = useSelector((state)=>state.adminInfo);
  return user?._id ? children : <Navigate to="/login" />
  
}

export const AdminPrivateRouter = ({children}) => {
    const {user} = useSelector((state)=>state.adminInfo);
  return user?.role === "admin" ? 
  (children)
  :
  (
    <h1>You are not authorized to this resources</h1>
  )
  
}


