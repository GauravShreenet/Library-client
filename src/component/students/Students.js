import React, { useEffect } from 'react'
import { UserLayout } from '../layout/UserLayout'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUserAction } from '../../pages/user_signup/userAction';
import { UsersTable } from './UsersTable';
import { Container } from 'react-bootstrap';

export const Students = () => {
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    user?.role === "admin" && dispatch(getAllUserAction())
  }, [user?.role, dispatch])

  return (
    user?.role === 'admin' ? (<UserLayout title="Students">
      <Container>
        <UsersTable role="student" />
      </Container>
    </UserLayout>)
      :
      (
        <h1>Unauthorize</h1>
      )
  )
}
