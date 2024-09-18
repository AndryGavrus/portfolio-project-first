import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from './components/SectionTitle'
import { Button } from './components/Button'

export const Slogan = () => {
  return (
    <StyledSlogan>
        <SectionTitle>I Am Available For Freelance</SectionTitle>
        <Button>Hire me</Button>
    </StyledSlogan>
  )
}

const StyledSlogan =styled.section`
    background-color: #95e995;
    min-height: 30vh;
`