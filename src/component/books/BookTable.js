import { Button, Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const BookTable = () => {
    const { book } = useSelector((state) => state.bookInfo)
    console.log(book)
    return (
        <div className=''>
            <p className="d-flex justify-content-between">
                <label htmlFor="">10 books found!</label>
                <div>
                    <Form.Control type="text" placeholder='search book by name' />
                </div>
            </p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Thumbnail</th>
                        <th>Book Info</th>
                        <th>Book Summary</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        book?.map(({thumbnail, status, _id, name, author, isbn, publishYr, description}, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td><img src={thumbnail} alt="" style={{ height: '20vh', width: '20vh' }} /></td>
                                <td>
                                    <h4>{name}</h4>
                                    <p>
                                        <span className={ status === 'active' ? "bg-success p-2 rounded text-light" : 'bg-danger p-2 rounded text-light'}>{status}</span>
                                    </p>
                                    
                                    <p>
                                        Author: {author} . {publishYr}
                                    </p>
                                </td>
                                <td>{description.slice(0, 100)} ...</td>
                                <td>
                                    <Link to={`/edit-book/${_id}`}>
                                        <Button variant='warning'>Edit</Button>
                                    </Link>
                                    
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </div>

    );
}

