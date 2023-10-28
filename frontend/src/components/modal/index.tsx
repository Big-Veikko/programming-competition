import React from 'react';
import './styles.scss';

interface IModalProps {
    hideModal: boolean;
    toggleModal: () => void;
    title: string;
    children: React.ReactNode;
}

const Modal = ({ hideModal, toggleModal, children, title }: IModalProps) => {
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
      <button onClick={() => toggleModal() }>
        Close
      </button>

      </div>
      </div>
    </div>
  ];
}

export default Modal;