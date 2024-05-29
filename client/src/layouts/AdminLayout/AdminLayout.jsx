import React from 'react'
import { LoginAdmin } from "../../pages/Admin"
import {useAuth} from "../../hooks"
import { TopMenu } from "../../components/Admin"
import "./AdminLayout.scss"

export function AdminLayout(props) {
    const {children} = props;
    const {auth} = useAuth(); 

    if(!auth) return <LoginAdmin />;
    
    return (
      <div className='grid'>
        <div className='menu'>
          <TopMenu />
        </div>

        <div className='main-content'>
          {children}
        </div>
      </div>
    )
}   
