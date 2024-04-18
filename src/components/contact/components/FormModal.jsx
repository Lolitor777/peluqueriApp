import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '400px'
    },
  };

export const FormModal = ({ modalIsOpen, closeModal, data }) => {


  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className='text-center font-semibold text-2xl mb-4'>Hola { data.name }!</h2>
        <p className='text-lg text-center'>En breve te contactaremos al número <span className='text-blue-600 font-semibold'>{ data.phone }</span> para agendar tu cita.</p>
        <button 
        onClick={closeModal}
        className='bg-red-500 hover:bg-red-400 font-semibold py-2 px-4 rounded-lg block mx-auto mt-10'>Cerrar</button>
      </Modal>
    </div>
  )
}
