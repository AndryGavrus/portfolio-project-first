import React from 'react'
import { Icon } from '../../components/icon/Icon'
import { FlexWrapper } from '../../components/FlexWrapper'
import { S } from './Footer_Styles'

const socialItemData = [
    {
        iconId: 'instagram',
    },

    {
        iconId: 'telegram',
    },

    {
        iconId: 'vk',
    },

    {
        iconId: 'linkden',
    },
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction='column' align='center'>
            <S.Name>Andrey</S.Name>
            <S.SocialList>
                {socialItemData.map ((s, index) => {
                    return (
                        <S.SocialItem key={index}>
                        <S.SocialLink>
                            <Icon width='21px' height='21px' viewBox='0 0 21px 21px' iconId={s.iconId} />
                        </S.SocialLink>
                    </S.SocialItem>
                        )
                })}
            </S.SocialList>
            <S.Copyright>© 2024 Andrey Gavrus, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    )
}

