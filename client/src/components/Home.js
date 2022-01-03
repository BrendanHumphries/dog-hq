import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Post from './Post';
import WelcomeHeader from './WelcomeHeader';

function Home({currentUser, setCurrentUser}) {
    // const [profilePhoto, setProfilePhoto] = useState('');

    // useEffect(() => {
    //     fetch('/dogs')
    //     .then(resp => resp.json())
    //     .then(data => {
    //         console.log(data);
    //         setProfilePhoto(data.photo);
    //     })
    // }, [])

    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })

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
                console.log('Invalid username or password');
                alert('Invalid username or password, please try again');
                setLoginForm({
                    username: '',
                    password: ''
                })
            } else {
                console.log('Successfully logged in');
                setCurrentUser(data);
                navigate('/dashboard');
            }
        });
    }

    let navigate = useNavigate();

    return (
        <div className='Home'>
            {/* <img src={`http://localhost:3000/${profilePhoto}`} alt='This is a test'/> */}
            <WelcomeHeader />
            {currentUser ?
                navigate('/dashboard')
                :
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
                </Grid>}
        </div>
    )
}

export default Home;