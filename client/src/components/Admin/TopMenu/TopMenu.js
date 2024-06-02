import React from 'react';

import { Header, Icon, Menu } from 'semantic-ui-react';

import './TopMenu.scss';
import { useAuth } from '../../../hooks';


export function TopMenu() {

    const { auth, logout } = useAuth();

    const renderName = () => {
        if (auth.me?.email) {
            const username = auth.me.email.split('@')[0];
            return username;
        }
    };

    return (
        <Menu fixed='top' className='top-menu-admin'>
            <Menu.Item className='top-menu-admin__logo'>
                <Header as='h3' icon='user circle' content='Chikon admin' />
            </Menu.Item>

            <Menu.Menu position='right'>
                <Menu.Item>Hola, { renderName() }</Menu.Item>
                <Menu.Item onClick={ logout }>
                    <Icon name='sign-out' />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}
