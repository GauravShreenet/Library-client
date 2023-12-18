import { Button, Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { returnedBurrowedBookAction } from './BurrowAction';
import { Review } from '../review/Review';
import { CustomModal } from '../custom-model/CustomModal';
import { setShowModal } from '../../system-state/systemSlice';
import { useState } from 'react';


export const BurrowTable = ({ userId }) => {
    const [selectedBurrow, setSelectedBurrow] = useState({})
    const dispatch = useDispatch();
    
    //if this is requested from all burrow history
    let { burrows } = useSelector((state) => state.burrowInfo)

    // const [form, setForm] = useState();

    //if show both the users burrow books list 
    if (userId){
        burrows = burrows.filter((item) => item.userId === userId)
    }

    const handleOnReturn = (_id) => {
        if (window.confirm("Are you ready to return the book?")){
            // call the api to update the book and re fetch all the burrow history to synchronize
            dispatch(returnedBurrowedBookAction(_id));
        }
    }

    const handleOnReview = (obj) => {
        //show modal
        setSelectedBurrow(obj);
        dispatch(setShowModal(true))
    }
    
    return (
        <div className=''>
            <CustomModal title="Give Review" show={true}>
                <Review {...selectedBurrow}/>
            </CustomModal>
            
            <p className="d-flex justify-content-between">
                <label htmlFor="">{burrows?.length} History found!</label>
                <div>
                    <Form.Control type="text" placeholder='search book by name' />
                </div>
            </p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Thumbnail</th>
                        <th>Book Name</th>
                        <th>Student Name</th>
                        <th>Burrow Date</th>
                        <th>Due Date</th>
                        <th>Returned</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        burrows?.map(({thumbnail, _id, userName, bookName, bookId, dueDate, isReturned, returnedDate, createdAt}, i) => (
                            <tr key={i} className={isReturned ? "bg-success" : "bg-warning"} style={{background: isReturned ? "green" : "yellow"}}>
                                <td>{i + 1}</td>
                                <td><img src={thumbnail} alt="" style={{ height: '20vh', width: '20vh' }} /></td>
                                <td>
                                    <h4>{bookName}</h4>
                                </td>
                                <td>{userName}</td>
                                <td>{createdAt?.slice(0, 10)}</td>
                                <td>{dueDate?.slice(0, 10)}</td>
                                {
                                    userId ? (<td>
                                        {isReturned ? (<Button onClick={()=>{handleOnReview({_id, bookId, bookName})}} variant='warning'>Leave Review</Button>) : <Button onClick={()=>handleOnReturn(_id)}>Return Book</Button>}
                                    </td>)
                                    :
                                    (<td variant={isReturned ? "success" : "warning"}>{isReturned ? "Returned" : "Not-Yet"}</td>)
                                }
                                
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </div>

    );
}

