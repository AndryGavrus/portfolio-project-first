import React, { useState } from 'react';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Work } from './work/Work';
import socialImg from '../../../assets/images/ntw.png';
import timerImg from '../../../assets/images/time.png';
import { Container } from '../../../components/Container';
import { TabMenu, TabStatusType } from './tabMenu/TabMenu';
import { S } from './Works_Styles';

const tabsItems: Array<{status: TabStatusType, title: string}> =[
    {
        title:'All',
        status: 'all',
    },

    {
        title:'landing page',
        status: 'landing',
    },

    {
        title:'React',
        status: 'react',
    },

    {
        title:'spa',
        status: 'spa',
    },
]

const worksData = [
    {
        title: 'Social Network',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        src: socialImg,
        type: 'spa'
    },

    {
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        src: timerImg,
        type: 'react'
    }
]

export const Works: React.FC = () => {
    const [curentFilterStatus, setCurentFilterStatus] = useState('all')
    let filteredWorks = worksData

    if (curentFilterStatus == 'landing') {
        filteredWorks =  worksData.filter(work => work.type === 'landing')
    }

    if (curentFilterStatus === 'react') {
        filteredWorks =  worksData.filter(work => work.type === 'react')
    }

    if (curentFilterStatus === 'spa') {
        filteredWorks =  worksData.filter(work => work.type === 'spa')
    }

    function changeFilterStatus(value: TabStatusType) {
        setCurentFilterStatus(value)
    }

    return (
        <S.Works id='works'>
            <Container>
            <SectionTitle>My Works</SectionTitle>
            <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus} curentFilterStatus={curentFilterStatus}/>
            <FlexWrapper justife='space-between' align='flex-start' wrap='wrap'>
                {filteredWorks.map((w, index) => {
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

