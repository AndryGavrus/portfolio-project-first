import styled from "styled-components"
import { theme } from "../../styles/Theme"

const Slyder = styled.div`
    /* border: 1px solid red; */
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;

`

const Slide = styled.div`
    text-align: center;
`

const Text = styled.p`
    
`

const Name = styled.span`
    font-family: "Josefin Sans", sans-serif;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: center;
    display: inline-block;
    margin: 22px 0 32px;

`

const Pagination = styled.span`

    span {
        display: inline-block;
        border-radius: 20px;
        width: 7px;
        height: 7px;
        background-color: rgba(255, 255, 255, 0.5);

        & + span {
            margin-left: 5px;
        }

        &.active {
            border-radius: 20px;
            width: 20px;
            height: 7px;
            background-color: ${theme.colors.accent};
        }
    }
`

export const S = {
    Slyder,
    Slide,
    Text,
    Name,
    Pagination
}