/* eslint-disable react/prop-types */
import React from 'react';

import Modal from '../../Modal';


const RoleAddModal = (props) => {

   const {
      handleSubmit,
      handleChangeInput,
      handleModalClose,
      modalIsOpen,
      form,
      nameValidate,
      emailValidate,
      roleValidate,
   } = props;

      return (
         <Modal
         isOpen={modalIsOpen}
         handleModalClose={handleModalClose}
         isModalAddRole
         >
            <button
            type='button'
            className='isModalAddRole__close'
            onClick={handleModalClose}
            >X</button>
            <h2>Invitar Usuario</h2>
            <form onSubmit={handleSubmit}>
               <label htmlFor='email'>
                  Correo: <i>*</i>
                  {emailValidate && <p className='alert-form'>Formato de correo ejemplo@correo.com.</p>}
                  <input
                     type='text'
                     name='email'
                     value={form.email}
                     placeholder='ejemplo@correo.com'
                     onChange={handleChangeInput}
                  />
               </label>
               <label htmlFor='firstName'>
                  Nombre: <i>*</i>
                  {nameValidate &&
                        <p className='alert-form'>Debe tener el primer nombre.</p>}
                  <input
                     type='text'
                     name='firstName'
                     value={form.firstName}
                     placeholder='Nombre'
                     onChange={handleChangeInput}
                  />
               </label>
               <label htmlFor='role'>
                  Rol: <i>*</i>
                  <select  name='role' value={form.role} onChange={handleChangeInput}>
                     <option value='role'>Rol</option>
                     <option value='empleado'>Empleado</option>
                     <option value='administrador'>Administrador</option>
                  </select>
                  <i className='Arrow'> </i>
               </label>
               {roleValidate &&
                        <p className='alert-form'>Seleccione el rol de la cuenta a crear.</p>}
               <div>
                  <button
                  type='button'
                  className='btn'
                  onClick={handleModalClose}
                  >Cerrar</button>
                  <button type='submit' className='btn'>Invitar</button>
               </div>
            </form>
         </Modal>
      );

}
export default RoleAddModal;