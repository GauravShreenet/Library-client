import React from 'react'
import { UserLayout } from '../layout/UserLayout'
import { Container } from 'react-bootstrap';
import { ReviewTable } from './ReviewTable';

export const ReviewPage = () => {
  return (
    <UserLayout title="Reviews">
      <Container>
        <ReviewTable />
      </Container>
      
    </UserLayout>
  )
}
