
import {  Send } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components'
import { mobile } from '../responsive';
const Container = styled.div`
height:60vh;
background-color:#fcf5f5;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;`
const Title = styled.h1`
font-size:70px;
margin-bottom:20px;
${mobile({fontSize:"40px"})}
`
const Description = styled.p`
font-size:25px;
font-weight:300;
margin-bottom:20px;
${mobile({textAlign:"center"})}
`;
const InputContainer = styled.div`
width:50%;
height:40px;
padding:0;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
border: solid 1px lightgray;
${mobile({width:"80%"})}
`
const Input = styled.input`
border:none;
flex:8;
padding-left:20px;
height:98%;
`
const Button = styled.button`
border:none;
margin:0;
background-color:teal;
color:white;
flex:1;
height:100%;`
const NewsLetter = () => {
    return (
        <Container>
            <Title>NewsLetter</Title>
            <Description>Get Updates About Your Favourite Products.</Description>
            <InputContainer>
            <Input placeholder='Your Email'></Input>
            <Button><Send/></Button>
            </InputContainer>

        </Container>
    );
};

export default NewsLetter;