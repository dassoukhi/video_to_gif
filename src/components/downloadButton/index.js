import React from "react"; 
import styled from "styled-components"; 

const Btn = styled.a` 
display: flex; 
left: 0; 
right: 0; 
margin: 20px auto; 
margin-top: -20px; 
background-color: #000; 
color: #fff;
border-radius: 35.5px; 
border: 1px solid #000; 
outline: none; 
font-weight: 700; 
cursor: pointer; 
font-size: 1.2em; 
padding: 10px; 
padding-left: 50px; 
max-width: 10%; 
text-decoration: none; 
transition: all 0.2s ease-in-out; 
:hover { 
	background-color: #3f3f3f; 
	color: #efefef; 
} 
`; 

const DownloadButton =  ({ gif, nameFile }) => { 
    //boutton de telechargement avec le fichier gif et son nom
    return ( 
        <Btn href={gif} download ={nameFile} >Télécharger</Btn> 
    ); 
    };

export default DownloadButton;