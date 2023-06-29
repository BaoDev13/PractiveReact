import { Modal, Button } from "react-bootstrap";
import { deleteUser } from "../services/UserServices";
import { toast } from "react-toastify";

const ModalConfirm = (props) => {
    const { show, handleClose, dataUserDelete, handleDeleteUserFromModal} = props;

    const confirmDelete = async () => {
        let res = await deleteUser(dataUserDelete.id);
        if(res && +res.statusCode === 204){
            handleClose();
            toast.success("Delete user succeed!");  
            handleDeleteUserFromModal(dataUserDelete);    
        }
        else{
            toast.error("Error delete user");
        }
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}
                   backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-add-new'>
                            This action can't be undone!
                            Do you want delete this user?
                            <br/>
                            Email="{dataUserDelete.email}"?
                            
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=> confirmDelete()}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalConfirm;