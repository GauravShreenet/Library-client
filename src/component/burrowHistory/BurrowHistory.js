import React, { useEffect } from 'react'
import { UserLayout } from '../layout/UserLayout'
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { fetchBurrowAction } from './BurrowAction';
import { BurrowTable } from './BurrowTable';

export const BurrowHistory = () => {
  const {user} = useSelector((state)=>state.userInfo);
  const dispatch = useDispatch()

  useEffect(()=>{
    user?.role === 'admin' && dispatch(fetchBurrowAction())
  },[user?.role, dispatch])
  
  return (
    user?.role === 'admin' ? (<UserLayout title="BurrowHistory">
      <Container>
        <BurrowTable />
      </Container>
    </UserLayout>)
    :
    (
      <h1>Unauthorize</h1>
    )
  )
}
