import React, { useEffect, useState } from 'react'
import { MainLayout } from '../../component/layout/MainLayout'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getABookAction } from '../../component/books/BookAction'
import { Button, ButtonGroup, Col, Container, Row } from 'react-bootstrap'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { postBurrowAction } from '../../component/burrowHistory/BurrowAction'

export const BookLanding = () => {
    const dispatch = useDispatch();
    const { _id } = useParams();
    const [showReview, setShowReview] = useState(false);

    const { selectedBooks } = useSelector(state => state.bookInfo)
    const { user } = useSelector(state => state.userInfo)

    useEffect(() => {
        _id && dispatch(getABookAction(_id));
    }, [_id, dispatch]);

    const { thumbnail, name, author, publishYr, description, isAvailable, dueDate } = selectedBooks

    const handleOnBurrow = () => {
        if (window.confirm("Are you sure?")){
            const obj = {
                bookId: _id,
                bookName: name,
                thumbnail,
                userId: user._id,
                userName: user.fName,
            }
            dispatch(postBurrowAction(obj));
        }
    }
    //grab the id from url parameter
    //fetch book form server to get latest update and put in our state
    //pull the book info form the state and implement in UI below

    return (

        <MainLayout>
            <Container>
                <Row className='mt-5'>
                    <Col md={5}>
                        <img src={thumbnail} alt="" width="100%" height="100%" className='shadow-lg img-thumbnail' />
                    </Col>
                    <Col md={7}>
                        <h1>{name}</h1>
                        <p>
                            {author} - {publishYr}
                        </p>
                        <p>
                            <FaStar className='text-warning' />
                            <FaStar className='text-warning' />
                            <FaStar className='text-warning' />
                            <FaStar className='text-warning' />
                            <FaStarHalfAlt className='text-warning' />
                        </p>

                        <p className='pt-5'>
                            Summary: {description?.slice(0, 150)} ...
                        </p>

                        <p className='d-grid pt-2'>
                            {
                                isAvailable ? (
                                    user?._id 
                                    ? ( <Button onClick={handleOnBurrow}>Burrow Book</Button> )
                                    : ( 
                                    <Link to ="/login"
                                    className='d-grid'>
                                        <Button>Login To Burrow</Button>
                                    </Link>
                                     )
                                ) 
                                : (<Button disabled={true}>Available From: {dueDate?.slice(0, 10)}</Button>)
                            }
                            
                        </p>
                    </Col>
                </Row>

                <Row className='mt-5 shadow'>
                    <Col className='border p-2 rounded'>
                        <div className='button-group'>
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="primary" onClick={() => setShowReview(false)}>Description</Button>
                                <Button variant="warning" onClick={()=> setShowReview(true)}>Review</Button>
                            </ButtonGroup>
                        </div>'
                        {
                            showReview ? (<>
                                <div className='d-flex gap-3 shadow mb-3'>
                            <div className="avatar">GS</div>
                            <div className="review">
                                <h4>Best Book Ever</h4>
                                <p className='mb-4'>
                                    <span>
                                        <FaStar className='text-warning' />
                                        <FaStar className='text-warning' />
                                        <FaStar className='text-warning' />
                                        <FaStar className='text-warning' />
                                        <FaStarHalfAlt className='text-warning' />
                                    </span>{" "}
                                    <small>5 days ago.</small>
                                </p>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem quo sint officia, unde fugiat reiciendis optio voluptatum reprehenderit eaque. Quis asperiores quaerat iusto delectus magnam sapiente exercitationem modi ex aperiam?
                                </p>
                            </div>
                        </div>

                        <div className='d-flex gap-3 shadow mb-3'>
                            <div className="avatar">GS</div>
                            <div className="review">
                                <h4>Best Book Ever</h4>
                                <p className='mb-4'>
                                    <span>
                                        <FaStar className='text-warning' />
                                        <FaStar className='text-warning' />
                                        <FaStar className='text-warning' />
                                        <FaStar className='text-warning' />
                                        <FaStarHalfAlt className='text-warning' />
                                    </span>{" "}
                                    <small>5 days ago.</small>
                                </p>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem quo sint officia, unde fugiat reiciendis optio voluptatum reprehenderit eaque. Quis asperiores quaerat iusto delectus magnam sapiente exercitationem modi ex aperiam?
                                </p>
                            </div>
                        </div>

                        <div className='d-flex gap-3 shadow mb-3'>
                            <div className="avatar">GS</div>
                            <div className="review">
                                <h4>Best Book Ever</h4>
                                <p className='mb-4'>
                                    <span>
                                        <FaStar className='text-warning' />
                                        <FaStar className='text-warning' />
                                        <FaStar className='text-warning' />
                                        <FaStar className='text-warning' />
                                        <FaStarHalfAlt className='text-warning' />
                                    </span>{" "}
                                    <small>5 days ago.</small>
                                </p>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem quo sint officia, unde fugiat reiciendis optio voluptatum reprehenderit eaque. Quis asperiores quaerat iusto delectus magnam sapiente exercitationem modi ex aperiam?
                                </p>
                            </div>
                        </div>
                            </>) : description
                        }
                        
                    </Col>
                </Row>
            </Container>
        </MainLayout>

    )
}
