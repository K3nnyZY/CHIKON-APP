import React from 'react';
import {BrowserRouter, Routes} from "react-router-dom";
import routes from './routes';

export function Navigation() {

  console.log("routes -->", routes)

  return (
    <BrowserRouter>
      <p>
        <h1>Navigation</h1>
      </p>
    </BrowserRouter>
  )
}
