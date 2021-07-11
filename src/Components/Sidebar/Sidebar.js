import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SidebarBtn,
    SidebarRoute
} from './SidebarStyle.js';

const Sidebar = ({ isOpen, toggle }) => {
    return (
            <SidebarContainer isOpen={ isOpen } onClick={toggle}>
                <Icon onClick={ toggle }>
                    <CloseIcon></CloseIcon>
                </Icon>
                <SidebarMenu>
                    <SidebarLink to='/'>Cake</SidebarLink>
                    <SidebarLink to='/'>Deserts</SidebarLink>
                    <SidebarLink to='/'>Full Menu</SidebarLink>
                </SidebarMenu>
                <SidebarBtn>
                    <SidebarRoute to='/'>Order Now</SidebarRoute>
                </SidebarBtn>
            </SidebarContainer>
    );
};

export default Sidebar;