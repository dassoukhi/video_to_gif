import React from 'react';
import styled from "styled-components"; 

const Section = styled.div` 
display: flex; 
left: 0; 
right: 0; 
margin: 50px auto; 
width: 30%; 
border: 2px dashed #000; 
border-radius: 18px; 
padding: 10px; 
`; 

const InputFile =  ({ setVideo }) => { 
    //input file qui accepte seulement le fichier video
    //et setVideo qui permet de mettre à jours le state video une fois le fichier selectionner 
    return ( 
        <Section> 
        <input type="file" accept="video/mp4,video/x-m4v,video/*" onChange={(e) => setVideo(e.target.files?.item(0))} /> 
        </Section> 
    ); 
    }; 

export default InputFile;