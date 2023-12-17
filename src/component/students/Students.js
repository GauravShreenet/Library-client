import React, { useEffect } from 'react'
import { UserLayout } from '../layout/UserLayout'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUserAction } from '../../pages/user_signup/userAction';
import { UsersTable } from './UsersTable';

export const Students = () => {
  const {user} = useSelector((state)=>state.userInfo);
  const dispatch = useDispatch();

  useEffect(()=>{
    user?.role === "admin" && dispatch(getAllUserAction())
  },[user?.role, dispatch])

  return (
    user?.role === 'admin' ? (<UserLayout title="Students">
      <UsersTable role="student" />
    </UserLayout>)
    :
    (
      <h1>Unauthorize</h1>
    )
  )
}
