import React, { useEffect } from 'react'
import {HeaderPage} from '../../components/Admin'
import { useUser } from "../../hooks"

export function UsersAdmin() {
  const {loading, users, getUsers} = useUser()
  console.log(users)

  useEffect(() => getUsers(), []);

  return (
    <>
      <Headerpage />
      <h1>UserAdmin</h1>
    </>
  )
}
