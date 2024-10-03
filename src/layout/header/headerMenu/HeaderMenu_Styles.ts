import styled from "styled-components"
import {css} from 'styled-components';
import { theme } from "../../../styles/Theme"

// Menu
const Link = styled.a`
        font-family: 'Josefin Sans';
        font-weight: 400;
        font-size: 30px;
        line-height: 110%;
        text-align: center;
        color: transparent;
`

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    color: ${theme.colors.accent};

    & + & {
        top: 50%;
        
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }`

const MenuItem = styled.li`
position: relative;

&::before{
    content: '';
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.font};

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;

    transform: scale(0);
}

&:hover {
    &::before{
        transform: scale(1);
    }

    ${Mask} {
        transform: skewX(12deg) translateX(5px); /* Объедините transform */
        
        & + ${Mask} {
            transform: skewX(12deg) translateX(-5px); /* Объедините transform */
        }
    }
    }
    `

// MobileMenu

const MobileMenu = styled.nav`

`

const MobileMenuPopUp = styled.div <{isOpen:boolean}>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
    background-color: rgba(31, 31, 32, 0.9);
    display: none;

    ${props => props.isOpen && css <{isOpen:boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `}

    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`

const BurgerButton = styled.button <{isOpen:boolean}>`
    position: fixed;
    width: 200px;
    height: 200px;
    top: -100px;
    right: -100px;
    z-index: 99999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css <{isOpen:boolean}>`
            background-color: rgba(255, 255, 255, 0);
        `}

        &::before{
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css <{isOpen:boolean}>`
            transform: rotate(-45deg) translateY(0);
        `}
        }

        &::after{
            content: '';
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css <{isOpen:boolean}>`
            transform: rotate(45deg) translateY(0);
            width: 36px;
            `}
        }
    }
`
// DesktopMenu
const DesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }
`


    export const S = {
        Link,
        Mask,
        MenuItem,

        MobileMenu,
        MobileMenuPopUp,
        BurgerButton,

        DesktopMenu,
    }