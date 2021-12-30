import React, { useState } from 'react';
import styled from 'styled-components'
import {ArrowLeftOutlined, ArrowRightOutlined} from '@material-ui/icons';
import {sliderItems} from "../data"
import { mobile } from '../responsive';

const Container = styled.div`
width:100%;
height:100vh;
display:flex;
position:relative;
overflow:hidden;
margin-top:20px;
${mobile({display:"none"})}`


const Arrow = styled.div`
width:50px;
height:50px;
border-radius:50%;
background-color:#fff7f7;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
left:${props=>props.direction==="left"&&"10px"};
right:${props=>props.direction==="right"&&"10px"};
margin:auto;
cursor:pointer;
opacity:0.5;
z-index: 2;

`
const Wrapper = styled.div`
height:100%;
display:flex;
transition:all 1.5s ease;
transform:translateX(${props=>props.index*(-100)}vw)`
const Slide = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color:#${props=>props.bg}`
const ImgContainer = styled.div`
flex:1;
`
const Image = styled.img`
height:80%;
`
const Title = styled.h1`
font-size:70px`;
const Description = styled.p`
margin: 50px 0px;
font-size:20px;
font-weight:500;
letter-spacing:3px;`;
const Button = styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
`;
const InfoContainer = styled.div`
height:100%;
flex:1;
padding:50px;
padding-top:400px;`
const Slider = () => {
    const [index , setIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setIndex(index > 0 ? index - 1 : 2);
          } else {
            setIndex(index < 2 ? index + 1 : 0);
          }

    }
     console.log(sliderItems)
    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
              <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper index={index}>
                {sliderItems.map(elm=>(
                <Slide bg={elm.bg} key={elm.id}>
            <ImgContainer>
            <Image src={elm.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{elm.title}</Title>
                <Description>{elm.desc}</Description>
                <Button>SHOW NOW</Button>
            </InfoContainer>
            </Slide>))}
            
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
              <ArrowRightOutlined/>
            </Arrow>
            
        </Container>
    );
};

export default Slider;