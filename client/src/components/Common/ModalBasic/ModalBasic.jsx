import React from 'react'
import {Modal} from 'semantic-ui-react'
import "./ModalBasic.scss"

export function ModalBasic(props) {
    const {show, size, title, children, onClose} = props // datos que recibe el componente

  return (
    <Modal className='modal-basic' 
    open={show} 
    onClose={onClose}
    size={size}
    >
        {{title} && <Modal.Header>{title}</Modal.Header>}
        <Modal.Content><p>{children}</p></Modal.Content>
    </Modal>
  )
}

ModalBasic.defaultProps = { // valores por defecto
  size: 'tiny',
}