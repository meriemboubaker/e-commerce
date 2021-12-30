
import { Facebook, MailOutlined, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components'
import { mobile } from '../responsive';
 const Container = styled.div`
 display:flex;
 ${mobile({flexDirection:"column"})}`;
 const Left = styled.div`
 flex:1;
 display:flex;
 flex-direction:column;
 padding:20px;
 `;
 const Logo = styled.h1``;
 const Description = styled.p`
 margin:20px 0px;`;
 const SocialContainer = styled.div`
 display:flex;`;
 const SocialIcon = styled.div`
 height:40px;
 width:40px;
 border-radius:50%;
 `
 const Right = styled.div`
 flex:1;
 padding:20px;
 ${mobile({backgroundColor:"#fff8f8"})}`;
 const ContactItem = styled.div`
 margin-bottom:20px;
 display:flex;
 align-items:center;
 `

 const Title = styled.h3`
 margin-bottom:30px;
 `;
 const List = styled.ul`
 margin:0;
 padding:0;
 list-style:none;
 display:flex;
 flex-wrap:wrap;`;
 const ListItem = styled.li`
 width:50%;
 margin-bottom:10px;`;
 const Center = styled.div`flex:1;
 padding:20px;
 ${mobile({display:"none"})}`;
const Footer = () => {
    return (
        <Container>
            <Left><Logo>MODA.</Logo>
            <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Description>
            <SocialContainer>
                <SocialIcon color='3B5999'><Facebook/></SocialIcon>
                <SocialIcon color='55ACEE'><Twitter/></SocialIcon>
                <SocialIcon color='E60023'><Pinterest/></SocialIcon>
            </SocialContainer>
            </Left>
            
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight:'10px'}}/> Avenue 123, City abcd, Country</ContactItem>
                <ContactItem><Phone style={{marginRight:'10px'}}/> +123 12 23 44 56</ContactItem>
                <ContactItem><MailOutlined style={{marginRight:'10px'}}/> boubakermeriem62@gmail.com</ContactItem>
            </Right>
            
        </Container>
    );
};

export default Footer;