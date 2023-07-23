import React from 'react'
import styled from 'styled-components'
import {Search, ShoppingCartOutlined} from '@mui/icons-material'
import { Badge } from '@mui/material'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom';


const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 1;//like 1 unit for left side 
    display: flex;
    align-items: center;
`
const Center = styled.div`
    flex: 1;// if 2 then there will be 2 units for center
    text-align: center;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
`

const Logo = styled.h1`
    font-weight: bold;
`

const MenuItem = styled.div`
    font-style: 14px;
    cursor: pointer;
    margin-left: 25px;
    font-weight:bold;
`
const Navbar = () => {
    const quantity = useSelector((state)=>state.cart.quantity);
    const cart = useSelector((state)=>state.cart);
    console.log(cart);
    const navigate = useNavigate();
    const navigateRegister= () => {
      navigate('/register');
    };
    const navigateLogin= () => {
        navigate('/login');
      };
  
  
    return (
    <Container>
        <Wrapper>
            <Left>
                <Language >ENG</Language>
                <SearchContainer>
                    <Input/>
                    <Search style={{color:"gray",fontSize: 16}}/>
                </SearchContainer>
            </Left>
            <Center><Logo>SHOPIFY</Logo></Center>
            <Right>
                <MenuItem onClick={navigateRegister}>REGISTER</MenuItem>
                <MenuItem onClick={navigateLogin}>SIGN IN</MenuItem>
                <Link to="/cart" >
                    <MenuItem>
                        <Badge badgeContent={quantity} color = "primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                </Link>

            </Right>

        </Wrapper>
    </Container>
  )
}

export default Navbar
