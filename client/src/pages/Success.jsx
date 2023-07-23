import React from 'react'
import { useLocation } from 'react-router-dom'

import { styled } from 'styled-components'
import {useNavigate} from 'react-router-dom';



const Container = styled.div`
height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


const Button = styled.button`
  width:200px;
  font-size: 20px;
  height: 60px;
  border: none;
  padding: 10;
  background-color: #8785A2;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;

`;

const Statement = styled.div`
   font-size: 18px;
   margin: 20px 0px; 
   font-weight: 500;
`


const Success = () => {
    const location = useLocation();
    console.log(location);

    const navigate = useNavigate();
    const navigateHome = () => {
      navigate('/');
    };
  
   

    return (
    <Container>
        <Statement>Order has been created successfully! </Statement> 
        <Button onClick={navigateHome}>Go to Homepage</Button>  
        <Statement>Thanks for choosing Shopify...</Statement>

    </Container>
  )
}

export default Success;
