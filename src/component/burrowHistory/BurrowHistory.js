import React from 'react'
import { UserLayout } from '../layout/UserLayout'
import { useSelector } from 'react-redux';

export const BurrowHistory = () => {
  const {user} = useSelector((state)=>state.adminInfo);
  return (
    user?.role === 'admin' ? (<UserLayout title="BurrowHistory">BurrowHistory</UserLayout>)
    :
    (
      <h1>Unauthorize</h1>
    )
  )
}
