import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { CustomInput } from '../custom-input/CustomInput'
import { Button } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { postNewReviewAction } from '../books/BookAction'

export const Review = ({ bookId, _id, bookName }) => {

    const dispatch = useDispatch();
    const [form, setForm] = useState({rating: 5})

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
           [name]: value,
        })
    }

    const handleOnStar = (rating) => {
        setForm({
            ...form,
            rating,
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const obj = {...form, bookId, burrowHistoryId: _id, bookName};
        dispatch(postNewReviewAction(obj))
    }

    return (
        <div>
            <Form onSubmit={handleOnSubmit}>
                <div><h3>You are giving reviews to {bookName}</h3></div><hr />
                <CustomInput name="title" label='Title' required={true} placeholder="Best book ever..." onChange={handleOnChange}/>
                
                <Form.Group>
                    <Form.Label>Select Rating</Form.Label>
                    <div>
                        <span>
                            {
                                Array(5).fill("").map((str, i) => (<FaStar onClick={()=>handleOnStar(i + 1)} className={form.rating > i ? "new-star text-warning" : "new-star"}/>))
                            }
                        </span>{" "}
                    </div>
                </Form.Group><br />
                
                <CustomInput as='textArea' name="message" label='Detail Review' required={true} rows="5" placeholder="Best book ever..." onChange={handleOnChange}/>

                
                <div className="d-grid">
                    <Button type='submit'>Submit Review</Button>
                </div>
            </Form>
        </div>
    )
}
