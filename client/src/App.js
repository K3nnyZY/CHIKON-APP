import React from 'react'
import {Navigation} from './routes'
import {ClientLayout} from './layouts'

export default function App() {
  return (
    <ClientLayout>
      <h1>HOLA MUNDO</h1>
      <Navigation />
    </ClientLayout>
  )
}
