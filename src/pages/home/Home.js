import React, { useEffect, useState } from 'react'
import { MainLayout } from '../../component/layout/MainLayout'
import { CustomCarousel } from '../../component/carousel/CustomCarousel'
import { Alert, Col, Container, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { CustomCard } from '../../component/custom-card/CustomCard';
import { Link } from 'react-router-dom';

const Home = () => {
    const [filteredBooks, setFilteredBook] = useState([]);
    const { book } = useSelector((state) => state.bookInfo)

     

    useEffect(()=>{
        const activeBooks = book.filter((book)=> book.status === 'active')
        setFilteredBook(activeBooks)
    },[book])

    const handleOnSearch = (e) => {
        const {value} = e.target;
        const str = value.toLowerCase()
        const searchedBook = book.filter((book)=> book.status === 'active' && book.name.toLowerCase().includes(str));

        setFilteredBook(searchedBook);
    }

    return (
        <MainLayout>
            <div>

                {/* carousel */}
                <CustomCarousel />
                {/* booklist card */}
                <Container className='mt-5'>
                    <Row>
                        <Col className="d-flex justify-content-between">
                            <label htmlFor="">{filteredBooks.length} Books Found</label>
                            <div>
                                <Form.Control 
                                onChange={handleOnSearch}
                                placeholder="Search book by name..." />
                            </div>
                            
                        </Col>
                        
                    </Row>
                    <hr />
                    <Row className='my-3'>
                        <Col className='d-flex justify-content-center flex-wrap gap-3'>
                            {filteredBooks.map((book, i) => (
                                <Link key={i} to={`/book/${book._id}`}>
                                <CustomCard {...book} />
                                </Link>
                            ))}
                            {filteredBooks.length < 1 && <Alert variant='warning'>No Book Found </Alert>}
                        </Col>
                    </Row>
                </Container>

            </div>
        </MainLayout>

    )
}

export default Home