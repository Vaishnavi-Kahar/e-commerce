import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    height: 30px;
    background-color: #8785A2;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
       Super deal! Free Shipping on Orders Over Rs.200
    </Container>
  )
}

export default Announcement
