import React, { Component, useState } from 'react';
import HelpIcon from '@mui/icons-material/Help';
import { IconButton } from '@mui/material';
import './modal.css';
import Button from '@mui/material/Button';

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                <p className='modal-text-header'>Important Notice:</p>
                <p className='modal-text'>All access to and use of this Web Site shall be solely for employees of RelianceMatrix and for their own internal business operations and not for the benefit or business of any other party or entity.  Any disclosure in violation shall be subject to disciplinary action.</p>
                <Button variant="outlined" color="error" onClick={handleClose}>
                  I understand
                </Button>
            </section>
        </div>
    )
}

class ModalFrame extends Component {
    constructor() {
        super();
        this.state = {
            show: true
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this)
    }

    showModal = () => {
        this.setState({show:true});
    };

    hideModal = () => {
        this.setState({show:false})
    };

render() {
    return (
        <div>
        <Modal show={this.state.show} handleClose={this.hideModal}>
        </Modal>
        {/* <IconButton onClick={this.showModal} aria-label='help'>
            <HelpIcon />
        </IconButton> */}
        </div>
    )
    }
}

export default ModalFrame;

