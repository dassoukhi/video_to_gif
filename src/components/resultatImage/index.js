import React from 'react';
import styled from "styled-components"; 

const Img = styled.img` 
width: 50%; 
height: 100%; 
border: 4px solid #000; 
margin: 40px auto; 
`; 

const ResultatImage = ({ gif }) => { 
    //on affiche l'image gif obtenu apres la conversion de la video
    return <Img src={gif} />; 
    }; 

export default ResultatImage;