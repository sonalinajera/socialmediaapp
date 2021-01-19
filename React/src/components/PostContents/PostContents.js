import { BorderVerticalRounded } from '@material-ui/icons';
import React, { useState, useEffect } from 'react'
import { Container, Button, Image, Col, } from 'react-bootstrap';
import ShowMoreText from 'react-show-more-text';
import BioMini from '../BioMini/BioMini';
import "./PostContents.css";


const PostContents = (props) => {

    const executeOnClick = (isExpanded) => {
        console.log(isExpanded);
    }

    const [liked, setLiked] = useState(false);
    const { postId, message, likes } = props.pData;
    const [active, setActive] = useState(false);
    const [like, setLike] = useState(likes);

    const toggleLike = () => {
        setActive(true);
        if (liked) {


            setLike(like - 1);
            setLiked(false);


        } else {

            setLike(like + 1);
            setLiked(true);

        }

    }

    useEffect(() => {
        //console.log("like is:" + like)

        if (active) {
            updatePost();
        }

    })

    const updatePost = () => {
        console.log("like is:" + like);

        fetch('http://localhost:9001/SocialApp/api/updatePost',
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Access-Control-Allow-Origin': '*'

                },
                body: JSON.stringify({
                    postId: postId,
                    likes: like
                })
            }
        ).then(response => response.text()

        ).then(data => {
            console.log(data)
            alert('Post has been updated');

        }).catch((err) => {
            console.log(err);
        });
    }

    function getDate() {
        let date = new Date(parseInt(props.pData.postDate));
        let ds = date.toString().split(" ");
        let dsJoined = ds.slice(0, 4).join(" ");
        return dsJoined;
    }

    const displayableDate = getDate();

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
                <Button variant="light" onClick={toggleLike}>likes {like}</Button>
                <span id="date">{displayableDate}</span>
                {/* <Button variant="light">comment</Button> */}
            </Container>

        </div>
    )
}

export default PostContents
