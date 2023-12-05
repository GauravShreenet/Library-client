import React from 'react'
import { UserLayout } from '../layout/UserLayout'
import { useSelector } from 'react-redux';

export const Books = ({children}) => {
  const {user} = useSelector((state)=>state.adminInfo);
  return (
    user?.role === 'admin' ? (<UserLayout title="Books">
      Books
      {
        user?.role === "admin" ? (<div>Books</div>)
        :
        (
          <h1>UnAuthorize</h1>
        )
      }
      </UserLayout>)
    :
    (
      <h1>Unauthorize</h1>
    )
  )
}
