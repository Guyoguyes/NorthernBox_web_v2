import React from 'react'
import Modal from '@mui/material/Modal'

function SharedModal({items, children}) {

  const { open, handleToggle } = items

  return (
    <div>
      <Modal
        open={open}
        onClose={handleToggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <>{children}</>
      </Modal>
    </div>
  )
}

export default SharedModal
