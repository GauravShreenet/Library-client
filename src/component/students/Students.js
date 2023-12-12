import React from 'react'
import { UserLayout } from '../layout/UserLayout'
import { useSelector } from 'react-redux';

export const Students = () => {
  const {user} = useSelector((state)=>state.userInfo);
  return (
    user?.role === 'admin' ? (<UserLayout title="Students">Students</UserLayout>)
    :
    (
      <h1>Unauthorize</h1>
    )
  )
}
