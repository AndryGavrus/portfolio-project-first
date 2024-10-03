import React from 'react';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Work } from './work/Work';
import socialImg from '../../../assets/images/ntw.png';
import timerImg from '../../../assets/images/time.png';
import { Container } from '../../../components/Container';
import { TabMenu } from './tabMenu/TabMenu';
import { S } from './Works_Styles';


const workItems = ['All', 'landing page', 'React', 'spa']

const workData = [
    {
        title: 'Social Network',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        src: socialImg
    },

    {
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        src: timerImg
    }
]

export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
            <SectionTitle>My Works</SectionTitle>
            <TabMenu menuItems={workItems}/>
            <FlexWrapper justife='space-between' align='flex-start' wrap='wrap'>
                {workData.map((w, index) => {
                    return <Work key={index}
                    title={w.title} 
                    text={w.text} 
                    src={w.src}/>
                })}
            </FlexWrapper>
            </Container>
        </S.Works>
    );
};

