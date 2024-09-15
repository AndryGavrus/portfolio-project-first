import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/images/ava.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justife={'space-around'}>
            <div>
                <span>Hi There</span>
                <h2>I am Andrey Gavrus</h2>
                <h1>A Web Developer.</h1>
            </div>
            <Photo src={photo}/>

            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
min-height: 100vh;
background-color: #25bfbf;
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`