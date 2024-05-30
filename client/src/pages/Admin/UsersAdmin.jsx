import React, { useEffect, useState } from 'react'
import { Loader } from 'semantic-ui-react'
import { HeaderPage,TablaUsers, AddEditUserForm } from '../../components/Admin'
import { ModalBasic } from '../../components/Common'
import { useUser } from "../../hooks"

export function UsersAdmin() {
  const [showModal, setShowModal] = useState(false)
  const [titleModal, setTitleModal] = useState(null)
  const [contentModal, setContentModal] = useState(null)
  const {loading, users, getUsers} = useUser()

  useEffect(() => getUsers(), []);

  const openCloseModal = () => setShowModal((prev) => !prev)

  const addUsers = () => {
    setTitleModal("Nuevo Usuario")
    setContentModal(<AddEditUserForm />)
    openCloseModal()
  }

  return (
    <>
      <HeaderPage 
      title = "Usuarios" 
      btnTitle = "Nuevo usuario" 
      btnClick = {addUsers}
      />
      {loading ? (
        <Loader active inline='centered'>
          Cargando...
        </Loader>
      ) : (
        <TablaUsers users={users}/>
      )}

      <ModalBasic 
      show= {showModal} 
      onClose = {openCloseModal}
      title= {titleModal}
      children={contentModal}
      />
    </>
  )
}
