import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import { useParams } from 'react-router-dom';
import { popularProducts } from '../data';
import { mobile } from '../responsive';
import { Add, Remove } from '@material-ui/icons';
const Container = styled.div``;
const Wrapper = styled.div`
padding:50px;
display:flex;
${mobile({padding:"10px", flexDirection:"column"})}`;
const ImageContainer = styled.div`
flex:1;`;
const Image = styled.img`
width:100%;
height:90vh;
object-fit:cover;
${mobile({height:"40vh"})}`;
const Title = styled.h1`font-weight:200`;
const Desc = styled.p`
margin:20px 0px`
const Price = styled.span`
font-weight:100;
font-size:40px`
const InfoContainer = styled.div`
flex:1;
padding:0px 50px;
${mobile({padding:"10px"})}`;
const FilterContainer = styled.div`
width:50%;
margin:30px 0px;
display:flex;
justify-content:space-between;
${mobile({width:"100%"})}`;
const Filter = styled.div`
display:flex;
align-items:center;`
const FilterColor = styled.div`
height:20px;
width:20px;
border-radius:50%;
background-color:${props=>props.color};
margin-left:10px;
`
const FilterTitle = styled.span`
font-size:20px;
font-weight:200;`
const FilterSize = styled.select`
margin-left:10px;
padding:5px;`
const FilterSizeOption = styled.option``
const AddContainer = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
${mobile({width:"100%"})}
`;
const AmountContainer = styled.div`
display:flex;
align-items:center;
font-weight:700;
`;
const Amount = styled.div`
height:30px;
width:30px;
border-radius:10px;
border : 1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin:0;`;
const Button = styled.button`
padding:15px;
border: 1px solid teal;
background-color:white;
cursor:pointer;
font-weight:700;
&:hover{
    background-color:#f8f4f4;
}`

const Product = () => {
    const params = useParams()
    const item = popularProducts.find(x=>x.id==params.id)
    
    return (
       
      <Container>
           <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImageContainer>
                <Image src={item.img}/>
            </ImageContainer>
            <InfoContainer>
                <Title>White Shirt</Title>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Desc>
                <Price>$20</Price>
      
            <FilterContainer>
                <Filter>
                  <FilterTitle>Color</FilterTitle>
                  <FilterColor color='black'></FilterColor>
                  <FilterColor color='darkblue'></FilterColor>
                  <FilterColor color='gray'></FilterColor>
                </Filter>
                <Filter>
                  <FilterTitle>Size</FilterTitle>
                  <FilterSize>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                  </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>
                <Button>ADD TO CART</Button>
            </AddContainer>
            
            </InfoContainer>
        </Wrapper>
        <NewsLetter/>
        <Footer/>
      </Container>

    );
};

export default Product;