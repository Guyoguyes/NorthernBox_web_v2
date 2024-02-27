import Modal from '@mui/material/Modal';
import React from 'react';

const AlrtMsg = ({ items, children }) => {
  const { open, handleToggle } = items;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleToggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {children}
      </Modal>
    </div>
  );
};

export default AlrtMsg;
