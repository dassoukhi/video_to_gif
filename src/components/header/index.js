import React from 'react';
import styled from "styled-components"; 

const H1 = styled.h1` 
margin: 0; 
padding: 12px; 
background-color: #34495E; 
color: #fff; 
font-family: sans-serif; 
font-size: 3em; 
`; 


const Header =() => { 
    return ( 
        <div> 
        <H1>Convertisseur de Video en GIF</H1> 
        </div> 
    ); 
    }; 

export default Header;


