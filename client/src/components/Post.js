import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import {useState} from 'react';

function Post({post, dog, user, setDogToShow}) {
    let navigate = useNavigate();

    function handlePostClick() {
        let ownDog = false;
        if (user) {
            user.dogs.forEach(userDog => {
                if (userDog.name === dog.name) {
                    ownDog = true;
                    console.log('navigate to editing component');
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
            <Box
                component={Paper}
                elevation={6}
                sx={{
                    bgcolor: '#abddff',
                    borderRadius: '12px',
                    padding: '10px',
                    width: 400
                }}
                onClick={handlePostClick}
            >
                <Typography>{post.dog ? post.dog.name : dog.name}</Typography>
                <Box
                    component='img'
                    src={post.photo}
                    alt='Sample Photo'
                    height={400}
                />
                <Typography>{post.post_text}</Typography>
            </Box>
        </div>
    )
}

export default Post;