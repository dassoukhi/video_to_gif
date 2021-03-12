import React, { useState, useEffect } from "react"; 
import "./App.css"; 
//import du modue FFMPEG destiné au traitement audio ou vidéo,
//avec des fonctionnalité telsque: l'enregistrement, lecture ou conversion d'un format à un autre;
//ici je l'utilise pour convertir une video en gif
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg"; 
import Button from "./components/button"; 
import Inputfile from "./components/inputFile"; 
import Header from "./components/header"; 
import ResultatImage from "./components/resultatImage"; 
import InputVideo from "./components/inputVideo"; 
import DownloadButton from "./components/downloadButton";
import ShareInSocial from "./components/shareInSocial"; 

//creation de l'instance ffmpeg
const ffmpeg = createFFmpeg({ log: true }); 

function App() { 	
const [ready, setReady] = useState(false); 
const [video, setVideo] = useState(); 
const [gif, setGif] = useState();
const [isOk, setIsOk] = useState(true) 

//chargement de la variable ffmpeg
//mise à jours du Ready-state à TRUE 
const load = async () => { 
	await ffmpeg.load(); 
	setReady(true); 
}; 

//appel de la fonction Load une seule fois au lancement de l'application
useEffect(() => { 
	load(); 
}, []); 


//fonction de conversion 
const convertToGif = async () => { 
	//mise à jour de IsOk-state à False pour faire patienter le user pendant le traitement du fichier
	setIsOk(false) 
	//ecriture de la video dans le file system grâce à l'appel api fecthFile
	ffmpeg.FS("writeFile", "video1.mp4", await fetchFile(video)); 
	
	//execution de la video charger dans le file system comme input, avec une limitation 
	//de 5.5 seconde la durée du gif, 2 FPS et un output du type gif avec le nom out.gif
	await ffmpeg.run( 
	"-i", 
	"video1.mp4", 
	"-t", 
	"5.5", 
	"-ss", 
	"2.0", 
	"-f", 
	"gif", 
	"out.gif"
	); 
	
	//lecture de la sortie du fichier out.gif dans la variable data
	const data = ffmpeg.FS("readFile", "out.gif"); 
	//creation d'url du fichier out.gif stocker dans data 
	const url = URL.createObjectURL( 
	new Blob([data.buffer], { type: "image/gif" }) 
	); 
	//mise à jour du gif-state avec sa vrai valeur 
	setGif(url);
	//mise à jour du isOk-state à true 
	setIsOk(true) 
}; 

//on lance l'appli que si le module ffmpeg est bien chargé
return ready ? ( 
	<div className="App"> 
		{/* appel du component Header */}
		<Header /> 
		{/* appel du component Video avec le state video comme args */}
		{video && <InputVideo video={video} />} 
		{/* appel du component InputFile avec setVideo comme args */}
		<Inputfile setVideo={setVideo} /> 
		{/* affichage pour le user lors du traitement du input file */}
		{!isOk && <h1>Traitement en cours...</h1>} 
		{/* appel du component button avec la function convertToGif comme args*/}
		<Button convertToGif={convertToGif} /> 
		{/* affichage du resultat de la conversion avec ResultatImage et gif comme args*/}
		{gif && <h1>Résultat</h1>} 
		{gif && <ResultatImage gif={gif} />} 
		{/* affichage du boutton de telechargement avec gif et et le nom du fichier comme args*/}
		{gif && <DownloadButton gif={gif}  nameFile = {video.name.split('.')[0]} />}
		{/* affichage des icons de partage sur les reseaux sociaux mais 
		ceci ne marche pas car notre appli n'est pas encore deployer, les reseaux sociaux
		verifient la provenance du fichier qui va etre publier sur leur site
		mais notre site est inaccessible de l'exterieur */}
		{gif && <ShareInSocial url={gif}/>}

	</div> 
) : ( 
	<div className="App">
		{/* tant que le module n'est pas chcargé on fait patienter le user*/}
		<p>Chargement...</p> 
	</div>	
); 
} 

export default App;
