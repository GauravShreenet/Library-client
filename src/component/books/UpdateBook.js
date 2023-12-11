import React, { useEffect, useState } from 'react'
import { UserLayout } from '../layout/UserLayout'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { CustomInput } from '../custom-input/CustomInput';
import { getABookAction, postNewBookAction } from './BookAction';

export const UpdateBook = () => {
    const dispatch = useDispatch();
     //grab the id from the url
    const {_id} = useParams();
    const [form, setForm] = useState({})

    // get the selectedBook from state and populate in the form
    const {selectedBooks} = useSelector(state => state.bookInfo)
   
    
    
    

    useEffect(()=>{
        // use that id to fetch a single book from server   
        if(_id !== form._id){
            dispatch(getABookAction(_id))
            setForm(selectedBooks)
        }
    },[_id, dispatch, selectedBooks, form._id])

    const handleOnSubmit = (e) => {}

    const handleOnChange = (e) => {}

    console.log(form)

    const inputs = [
        {
            label: "Book Name",
            name: "name",
            placeholder: "Book Name",
            type: "text",
            required: true,
        },
        {
            label: "Thumbnail Link",
            name: "thumbnail",
            placeholder: "https://...",
            type: "url",
            required: true,
        },
        {
            label: "Author",
            name: "author",
            placeholder: "Author Name",
            type: "text",
            required: true,
        },
        {
            label: "Publish Year",
            name: "publishYr",
            placeholder: "2000",
            type: "number",
        },
        {
            label: "ISBN",
            name: "isbn",
            placeholder: "eg. 84451235",
            type: "text",
            required: true,
        },
        {
            label: "Description",
            name: "description",
            placeholder: "Book details ...",
            type: "text",
            as: "textarea",
            required: true,
            rows: 5,
        },
    ]

    return (
        <UserLayout title="Update Book">
            <Container>
                <Link to="/books">
                    <Button variant='secondary'> &lt; Back</Button>
                </Link>
                <div>
                    <Form onSubmit={handleOnSubmit} className="my-2">
                        <h4>Update data in the form below</h4>
                        <hr />
                        {
                            inputs.map(
                                (item, i) => (
                                    <CustomInput key={i} {...item} onChange={handleOnChange}/>
                                )
                            )
                        }
                        <div className="d-grid mt-2">
                            <Button type='submit' variant='primary'>
                                {" "}
                                Update Book
                            </Button>
                        </div>
                    </Form>
                </div>
            </Container>

        </UserLayout>
    )
}
