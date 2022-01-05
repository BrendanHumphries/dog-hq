import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import {useState} from 'react';
import EditPost from "./EditPost";

function Post({post, dog, user, setDogToShow}) {
    let navigate = useNavigate();
    const [showEditor, setShowEditor] = useState(false);
    const [postToDisplay, setPostToDisplay] = useState(post);

    function handlePostClick() {
        let ownDog = false;
        if (user) {
            user.dogs.forEach(userDog => {
                if (userDog.name === dog.name) {
                    ownDog = true;
                    setShowEditor(true);
                }
            })
            if (ownDog === false) {
                setDogToShow(dog);
                navigate('/dog-profile');
            }
        } else {
        }
    }

    return (
        <div className="Post">
            {postToDisplay ?
                <Box
                    component={Paper}
                    elevation={6}
                    sx={{
                        bgcolor: '#abddff',
                        borderRadius: '12px',
                        padding: '10px',
                        width: 400,
                        marginBottom: 2
                    }}
                    onClick={handlePostClick}
                    textAlign='center'
                >
                    <Typography variant='h4'>{postToDisplay.dog ? postToDisplay.dog.name : dog.name}</Typography>
                    <Typography>{postToDisplay.location}</Typography>
                    <Box
                        component='img'
                        src={postToDisplay.photo}
                        alt='Sample Photo'
                        height={400}
                    />
                    <Typography variant='h6'>{postToDisplay.post_text}</Typography>
                    {showEditor ? <EditPost post={postToDisplay} dog={dog} setShowEditor={setShowEditor} setPostToDisplay={setPostToDisplay}/> : null }
                </Box>
            : null }
        </div>
    )
}

export default Post;