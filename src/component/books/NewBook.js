import React, { useState } from 'react'
import { UserLayout } from '../layout/UserLayout'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CustomInput } from '../custom-input/CustomInput';
import { postNewBookAction } from './BookAction';

export const NewBook = () => {

    const dispatch = useDispatch();

    const [book, setBook] = useState({});

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(postNewBookAction(book));
    }

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setBook({
            ...book,
            [name]: value,
        })
    }

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
        <UserLayout title="Add New Book">
            <Container>
                <Link to="/books">
                    <Button variant='secondary'> &lt; Back</Button>
                </Link>
                <div>
                    <Form onSubmit={handleOnSubmit} className="my-2">
                        <h4>Enter books details below</h4>
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
                                Add Book
                            </Button>
                        </div>
                    </Form>
                </div>
            </Container>

        </UserLayout>
    )
}
