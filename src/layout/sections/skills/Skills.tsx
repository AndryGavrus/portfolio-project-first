import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';
import { S } from './Skills_Styles';
import React from 'react';
import { Fade } from "react-awesome-reveal";

const SkillData = [
    {
        iconId: 'codeSvg',
        title: 'html5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },

    {
        iconId: 'css',
        title: 'css3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },

    {
        iconId: 'react',
        title: 'React',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },

    {
        iconId: 'typeScript',
        title: 'typescript',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },

    {
        iconId: 'styledComponents',
        title: 'styled components',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },

    {
        iconId: 'webDesign',
        title: 'web design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    }
]

export const Skills: React.FC = () => {
    return (
        <S.Skills id='skills'>
            <Container>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap={'wrap'} justife='space-between'>
                <Fade cascade damping={0.2}>
                {SkillData.map((s, index) => {
                return <Skill key={index}
                iconId={s.iconId} 
                title={s.title} 
                description={s.description}/>
            })}
                </Fade>
            </FlexWrapper>
            </Container>
        </S.Skills>
    );
};

