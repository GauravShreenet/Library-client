import React from 'react'
import { MainLayout } from '../../component/layout/MainLayout'
import { CustomCarousel } from '../../component/carousel/CustomCarousel'
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { CustomCard } from '../../component/custom-card/CustomCard';

const Home = () => {

    const { book } = useSelector((state) => state.bookInfo)
    return (
        <MainLayout>
            <div>

                {/* carousel */}
                <CustomCarousel />
                {/* booklist card */}
                <Container className='mt-5'>
                    <Row>
                        <Col className="d-flex justify-content-between">
                            <label htmlFor="">20 Books Found</label>
                            <div>
                                <Form.Control placeholder="Search book by name..." />
                            </div>
                            
                        </Col>
                        
                    </Row>
                    <hr />
                    <Row className='my-3'>
                        <Col className='d-flex justify-content-between flex-wrap gap-3'>
                            {book.map((book, i) => (
                                book.status === 'active' && <CustomCard {...book} />
                            ))}
                        </Col>
                    </Row>
                </Container>

            </div>
        </MainLayout>

    )
}

export default Home