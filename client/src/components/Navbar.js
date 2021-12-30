import React from 'react';
import styled from 'styled-components'
import {Search,ShoppingCartOutlined} from '@material-ui/icons'
import Badge from '@material-ui/core/Badge';
import {mobile} from "../responsive"

const Container = styled.div`
height:60px;
${mobile({height:"50px"})}
`
const Wrapper = styled.div`
padding: 10px 20px;
display:flex;
justify-content:space-between;
align-items:center;
${mobile({padding:"10px 0px"})}`
const Left = styled.div`
flex:1;
display:flex;
align-items:center;
${mobile({justifyContent:"center",marginLeft:"-20px"})}`
const Language = styled.span`
font-size:14px;
cursor:pointer;
${mobile({display:"none"})}`

const SearchContainer = styled.div`
border: solid 1px lightgray;
display:flex;
align-items:center;
margin-left: 25px;
padding:5px;


`
const Input = styled.input`
border:none;
${mobile({width:"50px"})}
`
const Logo = styled.h1`
font-size:43px;
font-weight:1000;
text-align:center;
${mobile({fontSize:"24px"})}
`
const Center = styled.div`
flex:1;
${mobile({marginLeft:"10px"})}`
const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({justifyContent:"center",flex:2})}`
const MenuItem = styled.div`
font-size:15px;
font-weight:600;
cursor:pointer;
margin-left:25px;
${mobile({fontSize:"12px",marginLeft:"7px"})}
`
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search'/> 
                   <Search style={{color:"gray",fontSize:"16px"}}/>
                </SearchContainer>
                </Left>
                <Center>
                    <Logo>MODA.</Logo>
                </Center>
                <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGNIN</MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="primary">
      <ShoppingCartOutlined />
    </Badge></MenuItem>

               
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;