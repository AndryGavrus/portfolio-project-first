import React from 'react';
import photo from '../../../assets/images/ava.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { S } from './Main_Styles';

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
            <FlexWrapper align={'center'} justife={'space-around'} wrap='wrap'>
            <div>
                <S.SmallText>Hi There</S.SmallText>
                <S.Name>I am <span>Andrey Gavrus</span></S.Name>
                <S.Maintitle>A Web Developer.</S.Maintitle>
            </div>
            <S.PhotoWrapper>
            <S.Photo src={photo}/>
            </S.PhotoWrapper>
            </FlexWrapper>
            </Container>
        </S.Main>
    );
};

