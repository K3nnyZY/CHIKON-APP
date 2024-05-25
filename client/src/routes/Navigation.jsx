import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import routes from './routes';

export function Navigation() {

  console.log("routes -->", routes)

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, i) => (
          <Route
          key={i} 
          path={route.path} 
          element={
            <route.layout>
              <route.component />
            </route.layout>
              }
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}
