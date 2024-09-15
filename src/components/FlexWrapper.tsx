import { wrap } from "module";
import styled from "styled-components";

type FlexWrapper = {
    direction?: string
    justife?: string
    align?: string
    wrap?: string
}

export const FlexWrapper =styled.div<FlexWrapper>`
display: flex;
flex-direction: ${props => props.direction || 'wrap'};
justify-content: ${props => props.justife || 'flex-start'};
align-items: ${props => props.align || 'stretch'};
flex-wrap: ${props => props.wrap || 'nowrap'};
`