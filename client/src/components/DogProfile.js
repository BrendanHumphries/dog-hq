import { Box, Grid, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import DogCard from "./DogCard";
import Post from './Post';

function DogProfile({dogToShow, user, setDogToShow}) {
    const [posts, setPosts] = useState();

    useEffect(() => {
        fetch(`/dogs/${dogToShow.id}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            setPosts(data.posts);
        });
    }, [])

    return (
        <>
            <Grid
            container
            direction='row'
            justifyContent='space-evenly'
            alignItems='flex-start'
            sx={{
                marginTop: 5
            }}
        >
            <Grid item component={Paper} elevation={6}>
                <Box
                    textAlign='center'
                    padding='20px'
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    sx={{
                        bgcolor: '#abddff',
                        borderRadius: '12px',
                        padding: '10px',
                        width: 700
                    }}
                >
                    <Typography variant="h4">Profile</Typography>
                    <DogCard dog={dogToShow} />
                </Box>
            </Grid>
            <Grid item component={Paper} elevation={6}>
                <Box
                    textAlign='center'
                    padding='20px'
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    sx={{
                        bgcolor: '#abddff',
                        borderRadius: '12px',
                        padding: '10px',
                        width: 700
                    }}
                >
                    <Typography variant="h4">{posts ? posts.length > 1 ? 'Posts' : 'Post' : null}</Typography>
                    {posts ? posts.map(post => <Post key={post.post_text} post={post} dog={dogToShow} user={user} setDogToShow={setDogToShow} />) : null}
                </Box>
            </Grid>
        </Grid>
        </>
    )
}

export default DogProfile;