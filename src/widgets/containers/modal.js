import React, {Component} from 'react';
import {createPortal} from 'react-dom';

const modalContainer = document.getElementById('modal-container');

class ModalContainer extends Component {
    render() {
        return createPortal(
            this.props.children,
            modalContainer
        );
    }
}

export default ModalContainer;