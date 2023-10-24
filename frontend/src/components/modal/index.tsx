import React from 'react';
import Button from '../form/button';
import './styles.scss';

interface IProps {
    hideModal: boolean;
    toggleModal: () => void;
    children: any;
    title: string;
}

const Modal = ({ hideModal, toggleModal, children, title }: IProps) => {
    if (hideModal) return null;

    return [
        <div className="modalOverlay" onClick={() => toggleModal()} />,
        <div className="modalWrap">
          <div className="modal">
          <div className="modal-header">
            <h2>
    
            {title}
            </h2>
          </div>
          <div className="modal-body">
            {children}
    
          </div>
          <div className="modal-footer">
          <Button onClick={() => toggleModal() } >
            Close
          </Button>
    
          </div>
          </div>
        </div>
      ];
}

export default Modal;