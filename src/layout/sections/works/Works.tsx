import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Work } from './work/Work';
import socialImg from '../../../assets/images/ntw.png';
import timerImg from '../../../assets/images/time.png';
import { Container } from '../../../components/Container';
import { TabMenu } from './tabMenu/TabMenu';


const workItems = ['All', 'landing page', 'React', 'spa']

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
            <SectionTitle>My Works</SectionTitle>
            <TabMenu menuItems={workItems}/>
            <FlexWrapper justife='space-between' align='flex-start' wrap='wrap'>
                <Work 
                title={'Social Network'} 
                text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} 
                src={socialImg}/>
                <Work 
                title={'Timer'} 
                text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} 
                src={timerImg}/>
            </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
${FlexWrapper} {
    gap: 30px;
}
`