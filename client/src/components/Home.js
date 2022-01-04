import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Post from './Post';

function Home({setUser}) {
    let navigate = useNavigate();

    const [randomPost, setRandomPost] = useState();

    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })

    useEffect(() => {
        fetch('/posts')
        .then(resp => resp.json())
        .then(data => {
            setRandomPost(data[Math.floor(Math.random() * (data.length - 0 + 1)) + 0]);
        })
    }, [])

    function handleLoginFormChange(event) {
        setLoginForm({...loginForm, [event.target.name]:event.target.value});
    }

    function handleLogin(event) {
        event.preventDefault();
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginForm)
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.error) {
                console.log(data);
                alert(data.error);
                setLoginForm({
                    username: '',
                    password: ''
                });
            } else {
                console.log(data);
                setUser(data);
                navigate('/dashboard');
            }
        });
    }

    return (
        <div className='Home'>
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
                    <Box>
                        <Box
                            component={Paper}
                            elevation={6}
                            sx={{
                                bgcolor: '#abddff',
                                borderRadius: '12px',
                                padding: '10px',
                                width: 400
                            }}
                            marginBottom={2}
                        >
                            <Typography variant="h4">Featured Post:</Typography>
                        </Box>
                        {randomPost ? <Post post={randomPost} /> : <Box component={Paper} elevation={6} sx={{bgcolor: '#abddff'}}><Typography variant="h4">Loading...</Typography></Box>}
                    </Box>
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
                        component='form'
                        onSubmit={handleLogin}
                    >
                        <Typography>Get back to it!</Typography>
                        <TextField
                            margin='normal'
                            required
                            label='Username'
                            name='username'
                            value={loginForm.username}
                            onChange={handleLoginFormChange}
                        />
                        <TextField
                            margin='normal'
                            required
                            label='Password'
                            type='password'
                            name='password'
                            value={loginForm.password}
                            onChange={handleLoginFormChange}
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