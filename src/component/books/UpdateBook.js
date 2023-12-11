import React, { useEffect, useState } from 'react'
import { UserLayout } from '../layout/UserLayout'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Form, FormGroup } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CustomInput } from '../custom-input/CustomInput';
import { deleteBookAction, getABookAction, postNewBookAction, updateBookAction } from './BookAction';

export const UpdateBook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //grab the id from the url
    const { _id } = useParams();
    const [form, setForm] = useState({})

    // get the selectedBook from state and populate in the form
    const { selectedBooks } = useSelector(state => state.bookInfo)





    useEffect(() => {
        // use that id to fetch a single book from server   
        if (_id !== form._id) {
            dispatch(getABookAction(_id))
            setForm(selectedBooks)
        }
    }, [_id, dispatch, selectedBooks, form._id])

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(!window.confirm("Are you sure you want to update this Book?")){
            return;
        }

        const {__v, updatedAt, isbn, createdAt, ...rest} = form
        dispatch(updateBookAction(rest));
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleOnDelete = async () => {
        if(window.confirm('Are you sure you want to delete the book?')){
           const isDeleted = await dispatch(deleteBookAction(_id))

           isDeleted && navigate("/books");
        }
    }

    console.log(form)

    const inputs = [
        {
            label: "Book Name",
            name: "name",
            placeholder: "Book Name",
            type: "text",
            required: true,
            value: form.name,
        },
        {
            label: "Thumbnail Link",
            name: "thumbnail",
            placeholder: "https://...",
            type: "url",
            required: true,
            value: form.thumbnail,
        },
        {
            label: "Author",
            name: "author",
            placeholder: "Author Name",
            type: "text",
            required: true,
            value: form.author,
        },
        {
            label: "Publish Year",
            name: "publishYr",
            placeholder: "2000",
            type: "number",
            value: form.publishYr,
        },
        {
            label: "ISBN",
            name: "isbn",
            placeholder: "eg. 84451235",
            type: "text",
            required: true,
            disabled: true,
            value: form.isbn,
        },
        {
            label: "Description",
            name: "description",
            placeholder: "Book details ...",
            type: "text",
            as: "textarea",
            required: true,
            rows: 5,
            value: form.description,
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
                        <Form.Group className='mb-3'>
                            <Form.Select name='status' onChange={handleOnChange}>
                                <option value="">--Select One--</option>
                                <option value="active" selected={form.status === 'active'}>Active{" "}</option>
                                <option value="inactive" selected={form.status === 'inactive'}>Inactive{" "}</option>
                            </Form.Select>

                        </Form.Group>
                        <hr />
                        {
                            inputs.map(
                                (item, i) => (
                                    <CustomInput key={i} {...item} onChange={handleOnChange} />
                                )
                            )
                        }
                        <div className="d-grid mt-2">
                            <Button variant='primary' type='submit'>
                                {" "}
                                Update Book
                            </Button>
                        </div>
                    </Form>

                    <div className="d-grid mb-2">
                        <Button
                        onClick={handleOnDelete}
                        variant='danger'>Delete Book</Button>
                    </div>
                </div>
            </Container>

        </UserLayout>
    )
}
