import React from 'react';
import styled from "styled-components"; 

const Video = styled.video` 
width: 40%; 
margin: 20px; 
border: 1px; 
`; 

//on affiche la video entrer par le user pour une meilleur experience utilisateur 
const InputVideo =  ({ video }) => { 
    return <Video controls width="250"  src={URL.createObjectURL(video)} />; 
    }; 

export default InputVideo;