import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import Post from './Post';
import WelcomeHeader from './WelcomeHeader';

function Home() {
    const [profilePhoto, setProfilePhoto] = useState('');

    useEffect(() => {
        fetch('/dogs')
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            setProfilePhoto(data.photo);
        })
    }, [])

    return (
        <div className='Home'>
            <img src={`http://localhost:3000/${profilePhoto}`} alt='This is a test'/>
            <WelcomeHeader />
            <Grid
                container
                direction='row'
                justifyContent='space-evenly'
                alignItems='center'
                sx={{
                    marginTop: 20
                }}
            >
                <Grid
                    item
                >
                    <Post />
                </Grid>
                <Grid
                    item
                    component={Paper}
                    elevation={6}
                >
                    <Box
                        textAlign='center'
                        padding='20px'
                        display='flex'
                        flexDirection='column'
                    >
                        <Typography>Get back to it!</Typography>
                        <TextField
                            margin='normal'
                            required
                            label='Username'
                        />
                        <TextField
                            margin='normal'
                            required
                            label='Password'
                            type='password'
                        />
                        <Button
                            type='submit'
                            variant='contained'
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Log In
                        </Button>
                        <Typography>Or</Typography>
                        <Button
                            variant='contained'
                            href='/signup/'
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;