import React, { useState } from 'react';
import { Menu } from '../menu/Menu';
import { S } from '../HeaderMenu_Styles';

export const MobileMenu: React.FC < { menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    const [menuIsOpen, setMenuIsOpen] = useState (false)
    const onBurgerClick = () => {setMenuIsOpen (!menuIsOpen)}
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen = {menuIsOpen} onClick={onBurgerClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopUp isOpen = {menuIsOpen} onClick={()  =>{setMenuIsOpen(false)}}>
            <Menu menuItems={props.menuItems}/>
            </S.MobileMenuPopUp>
        </S.MobileMenu>
    );
};



