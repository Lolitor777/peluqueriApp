import { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { FormModal } from './FormModal';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Demasiado corto')
    .max(50, 'Demasiado largo')
    .required('Este campo es obligatorio'),
  phone: Yup.string()
    .min(10, 'Demasiado corto')
    .max(10, 'Demasiado largo')
    .required('Este campo es obligatorio'),
  email: Yup.string()
    .email('Correo electrónico inválido')
    .required('Este campo es obligatorio'),
});

export const FormContact = () => {

  const [modalIsOpen, setModalIsOpen] = useState( false );
  const [data, setData] = useState({});

    const openModal = () => {
        setModalIsOpen( true )
    }

    const closeModal = () => {
        setModalIsOpen( false )
    }
    


  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
        email: '',
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        const { name, phone } = values;
        setData({ name, phone })
      }}
    >
      {({
        values,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (

        <form onSubmit={handleSubmit} className='flex-[1] lg:flex lg:flex-col mt-4'>

          <h2 className='text-center text-[2rem] text-blue-500 font-semibold -tracking-tight'>Reserva tu cita</h2>

          <div className="mb-5 mt-10">
            <label htmlFor="name" className={`block mb-2 text-sm font-medium
               ${errors.name ? 'text-red-700' : 'text-white'}`}>
              Nombre completo
            </label>
            <input
              type="text"
              id="name"
              name='name'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              className={`block w-full p-2.5 ${errors.name
                  ? 'bg-red-50 border border-red-500 text-red-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500'
                  : 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500'
                }`}
            />
            {
              errors.name && <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oops!</span> {errors.name}</p>
            }
          </div>

          <div className="mb-5">
            <label htmlFor="phone" className={`block mb-2 text-sm font-medium 
               ${errors.phone ? 'text-red-700' : 'text-white'}`}>
              Teléfono
            </label>
            <input
              type="number"
              id="phone"
              name='phone'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
              className={`block w-full p-2.5 ${errors.phone
                  ? 'bg-red-50 border border-red-500 text-red-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500'
                  : 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500'
                }`}
            />
            {
              errors.phone && <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oops!</span> {errors.phone}</p>
            }
          </div>

          <div className="mb-5">
            <label htmlFor="email" className={`block mb-2 text-sm font-medium 
               ${errors.email ? 'text-red-700' : 'text-white'}`}>
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={`block w-full p-2.5 ${errors.email
                  ? 'bg-red-50 border border-red-500 text-red-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500'
                  : 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500'
                }`}
            />
            {
              errors.email && <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oops!</span> {errors.email}</p>
            }
          </div>

          <button
            type="submit"
            className="block mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
            font-medium rounded-lg text-sm w-[70%] sm:w-auto px-5 py-2.5 hover:cursor-pointer"
            disabled={ Object.keys( errors ).length > 0 }
            onClick={ openModal }
          >
            Reservar
          </button>
          <FormModal modalIsOpen={modalIsOpen} closeModal={closeModal} data={ data } />
        </form>
      )}

      
    </Formik>
  )
}
