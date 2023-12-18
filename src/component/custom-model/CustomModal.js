
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setShowModal } from '../../system-state/systemSlice';

export const CustomModal = ({title, children, ...rest}) => {
    
    const {showModal} = useSelector(state => state.systemInfo)
    const dispatch = useDispatch()

    return (
    <Modal
      onHide={()=>dispatch(setShowModal(false))}
      show={showModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
    </Modal>
  );
}
