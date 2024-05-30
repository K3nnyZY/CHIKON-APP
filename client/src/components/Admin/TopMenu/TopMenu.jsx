import React from 'react'
import {Icon, Menu} from "semantic-ui-react"
import {useAuth} from "../../../hooks"
import logo from "../../../assets/logo1.png"
import "./TopMenu.scss"
import { Link } from 'react-router-dom'

export function TopMenu() {
    const {auth, logout} = useAuth();

    const renderName = () => {
        if (auth.me?.email) {
            const username = auth.me.email.split('@')[0];
            return username;
        }
    };

  return (
    <Menu fixed='top' className='top-menu-admin'>
        <Menu.Item className='top-menu-admin__logo'>
            <img src={logo} alt='Chikon Admin'/>
            <Link to = '/admin'>
            <p>&nbsp;&nbsp;&nbsp; Chikon Admin</p>
            </Link>
        </Menu.Item>

        <Menu.Menu position='right'>
            <Menu.Item>Bienvenido, {renderName()}</Menu.Item>
            <Menu.Item onClick= {logout}>
                <Icon name='sign-out' />
            </Menu.Item>
        </Menu.Menu>        
    </Menu>
  )
}
