import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../components/icon/Icon'
import { FlexWrapper } from '../../components/FlexWrapper'
import { theme } from '../../styles/Theme'
import { font } from '../../styles/Common'

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction='column' align='center'>
            <Name>Andrey</Name>
            <SocialList>
                <SocialItem>
                    <SocialLink>
                        <Icon width='21px' height='21px' viewBox='0 0 21px 21px' iconId='instagram' />
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon width='21px' height='21px' viewBox='0 0 21px 21px' iconId='telegram' />
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon width='21px' height='21px' viewBox='0 0 21px 21px' iconId='vk' />
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon width='21px' height='21px' viewBox='0 0 21px 21px' iconId='linkden' />
                    </SocialLink>
                </SocialItem>

            </SocialList>
            <Copyright>© 2024 Andrey Gavrus, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primeryBg};
    padding: 40px 0;`

const Name = styled.span`
    ${font({family: '"Josefin Sans", sans-serif', weight: 700, Fmax: 22, Fmin: 16})}
    letter-spacing: 3px;
    color: ${theme.colors.font};
`

const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`

const SocialItem = styled.li`
    
`

const SocialLink = styled.a`
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    width: 35px;
    height: 35px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.accent};

    &:hover {
        color: ${theme.colors.primeryBg};
        transform: translateY(-4px);

    }
`

const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.5;       
`