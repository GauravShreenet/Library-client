import { Button, Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const UsersTable = ({role}) => {
    const { allUsers } = useSelector((state) => state.userInfo);
    const users = allUsers.filter((item)=>item.role === role)
    
    return (
        <div className=''>
            <p className="d-flex justify-content-between">
                <label htmlFor="">{users.length} {role} found!</label>
                <div>
                    <Form.Control type="text" placeholder='search book by name' />
                </div>
            </p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Joined Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map(({_id, status, fname, lname, phone, email, createdAt}, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{status}</td>
                                <td>{fname + " " + lname}</td>
                                <td>{phone}</td>
                                <td>{email}</td>
                                <td>{createdAt?.slice(0, 10)}</td>
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

