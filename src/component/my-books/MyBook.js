import React, { useEffect } from 'react'
import { UserLayout } from '../layout/UserLayout'
import { Container } from 'react-bootstrap'
import { BurrowTable } from '../burrowHistory/BurrowTable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBurrowAction } from '../burrowHistory/BurrowAction';

export const MyBook = () => {
  const {user} = useSelector((state)=>state.userInfo);
  const dispatch = useDispatch()

  useEffect(()=>{
    user?.role === 'admin' && dispatch(fetchBurrowAction())
  },[user?.role, dispatch])

  return (
    <UserLayout title={"My Books burrow history"}>
      <Container>
        <BurrowTable userId={user._id}/>
      </Container>
    </UserLayout>
  )
}
