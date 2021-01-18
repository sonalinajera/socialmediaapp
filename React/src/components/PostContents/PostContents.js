import { BorderVerticalRounded } from '@material-ui/icons';
import React from 'react'
import { Container, Button, Image, Col, } from 'react-bootstrap';
import ShowMoreText from 'react-show-more-text';
import BioMini from '../BioMini/BioMini';
import "./PostContents.css";
import PostImage from '../../images/ember.jpg'


const PostContents = (props) => {

    const executeOnClick = (isExpanded) => {
        console.log(isExpanded);
    }


    const { user, message, picture, likes } = props.pData;
   
    return (
        <div className="postContent-container">
            <BioMini postData={props.pData} userData={props.uData} numOfUsers={props.numOfUsers} />
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
                {message}
            </ShowMoreText>
            <Container>
                <div>
                    <Image className="post-image" src={props.pData.postPicURL} rounded />
                </div>
                <div>{likes}</div>
                <Button variant="light">like</Button>
                <Button variant="light">comment</Button>
            </Container>

        </div>
    )
}

export default PostContents
