import React from 'react'
import { UserLayout } from '../layout/UserLayout'
import { useSelector } from 'react-redux';
import { Button, Container } from 'react-bootstrap';
import { BookTable } from './BookTable';
import { Link } from 'react-router-dom';

export const Books = () => {
  return (
    <UserLayout title="Books">
      Books
      <Container>
      <div className='Books'>
        <div className="text-end mb-3">
          <Link to="/new-books">
            <Button variant='primary'>Add New Book</Button>
          </Link> 
        </div>
        <BookTable />
      </div>
      </Container>
      
    </UserLayout>
  )
}
