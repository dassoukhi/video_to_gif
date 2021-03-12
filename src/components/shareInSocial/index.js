import React from 'react';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon, EmailShareButton, EmailIcon } from "react-share";
import styled from "styled-components"; 

const List = styled.ul`
  list-style: none;
  overflow-x: auto;
`;
const ListItem = styled.li`
  display: inline-block;
  margin: 1.2em;
  
`;

const ShareInSocial = ({url}) => {
    //partage du gif sur les reseaux mais ceci ne marche pas car notre appli n'est pas deployer
    return (
            <List>
                <ListItem>
                <TwitterShareButton url={window.location.href} imageURL={url}><TwitterIcon/></TwitterShareButton>
                </ListItem>
                <ListItem>
                    <FacebookShareButton url={window.location.href} imageURL={url}><FacebookIcon/></FacebookShareButton>
                </ListItem>
                <ListItem>
                <LinkedinShareButton url={window.location.href} imageURL={url}><LinkedinIcon/></LinkedinShareButton>
                </ListItem>
                <ListItem>
                <EmailShareButton url={url} imageURL={url}><EmailIcon/></EmailShareButton>
                </ListItem>
            </List>
            
    );
};

export default ShareInSocial;