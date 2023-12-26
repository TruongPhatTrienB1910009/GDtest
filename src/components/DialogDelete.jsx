import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function DialogDelete({ open, setOpen }) {
    const toggle = () => setOpen(!open);

    return (
        <div>
            <Modal isOpen={open} toggle={toggle}>
                <ModalHeader toggle={toggle}>Do you want to delete this product?</ModalHeader>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Yes
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        No
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default DialogDelete;