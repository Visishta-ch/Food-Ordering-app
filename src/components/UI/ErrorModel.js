import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ErrorModel = ({modal,toggle}) => {
  return (
    <Modal isOpen={modal} toggle={toggle}>
    <ModalHeader toggle={toggle}>Item Already Added</ModalHeader>
    <ModalBody>
            Add quantity from cart list
    </ModalBody>
    <ModalFooter>
      
      <Button color="secondary" onClick={toggle}>
        Okay
      </Button>
    </ModalFooter>
  </Modal>
  )
}

export default ErrorModel