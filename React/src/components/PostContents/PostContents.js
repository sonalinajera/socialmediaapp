import { BorderVerticalRounded } from '@material-ui/icons';
import React from 'react'
import { Container, Button, Image, Col, } from 'react-bootstrap';
import ShowMoreText from 'react-show-more-text';
import BioMini from '../BioMini/BioMini';
import "./PostContents.css";
import PostImage from '../../images/ember.jpg'

const PostContents = () => {

  const executeOnClick= (isExpanded)=> {
    console.log(isExpanded);
}


  return (
    <div className="postContent-container">
      <BioMini/>
      <ShowMoreText
                /* Default options */
                lines={3}
                more='Show more'
                less='Show less'
                className='content-css'
                anchorClass='my-anchor-css-class'
                onClick={executeOnClick}
                expanded={false}
  
            >
                Lorem ipsum dolor sit amet, consectetuut labore et dolore magna amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore
 
                et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </ShowMoreText>
      <Container>
        <div>
        <Image src={PostImage} rounded />
        </div>
      <Button variant="light">like</Button>
      <Button variant="light">comment</Button>
      </Container>
     
    </div>
  )
}

export default PostContents
