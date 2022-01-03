import WelcomeHeader from "./WelcomeHeader";

import { Box, Button, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";

import { useState } from "react";

function SignUp() {
    const [signupUserInfo, setSignupUserInfo] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
    })
    const [signupDogInfo, setSignupDogInfo] = useState({
        name: '',
        breed: '',
        sex: '',
        age: 0,
        favorite_activity: '',
        favorite_food: ''
    })

    function handleSignupUserInfo(event) {
        setSignupUserInfo({...signupUserInfo, [event.target.name]:event.target.value});
    }

    function handleSignupDogInfo(event) {
        let ageNumber
        if (event.target.name === 'age') {
            ageNumber = parseInt(event.target.value, 10);
            setSignupDogInfo({...signupDogInfo, 'age':ageNumber});
        } else {
            setSignupDogInfo({...signupDogInfo, [event.target.name]:event.target.value});
        }
    }

    function handleSignup(event) {
        event.preventDefault();
        
    }

    console.log(signupDogInfo)
    return (
        <div className='SignUp'>
            <WelcomeHeader />
            <Box
                component={Paper}
                elevation={6}
                sx={{
                    marginTop: 10,
                    maxWidth: 1000
                }}
            >
                <Box
                    textAlign='center'
                    padding='20px'
                    display='flex'
                    flexDirection='column'
                    component='form'
                    onSubmit={handleSignup}
                >
                    <Typography>Welcome to the future of dog social media!</Typography>
                    <Typography>First we need some info about you</Typography>
                    <TextField
                        margin='normal'
                        required
                        label='First Name'
                        name='first_name'
                        value={signupUserInfo.first_name}
                        onChange={handleSignupUserInfo}
                    />
                    <TextField
                        margin='normal'
                        required
                        label='Last Name'
                        name='last_name'
                        value={signupUserInfo.last_name}
                        onChange={handleSignupUserInfo}
                    />
                    <TextField
                        margin='normal'
                        required
                        label='Username'
                        name='username'
                        value={signupUserInfo.username}
                        onChange={handleSignupUserInfo}
                    />
                    <TextField
                        margin='normal'
                        required
                        label='Email Address'
                        name='email'
                        value={signupUserInfo.email}
                        onChange={handleSignupUserInfo}
                    />
                    <TextField
                        margin='normal'
                        required
                        label='Password'
                        type='password'
                        name='password'
                        value={signupUserInfo.password}
                        onChange={handleSignupUserInfo}
                    />
                    <TextField
                        margin='normal'
                        required
                        label='Confirm Password'
                        type='password'
                        name='password_confirmation'
                        value={signupUserInfo.password_confirmation}
                        onChange={handleSignupUserInfo}
                    />
                    <Typography>Now we need some info about your dog! If you have multiple dogs, you will be able to add another from your profile page after signup</Typography>
                    <TextField
                        margin='normal'
                        required
                        label="Dog's Name"
                        name='name'
                        value={signupDogInfo.name}
                        onChange={handleSignupDogInfo}
                    />
                    <TextField
                        margin='normal'
                        required
                        label='Breed(s)'
                        name='breed'
                        value={signupDogInfo.breed}
                        onChange={handleSignupDogInfo}
                    />
                    <Select
                        margin='normal'
                        label='Sex'
                        required
                        name='sex'
                        value={signupDogInfo.sex}
                        onChange={handleSignupDogInfo}
                    >
                        <MenuItem value='male'>Male</MenuItem>
                        <MenuItem value='female'>Female</MenuItem>
                    </Select>
                    <TextField
                        margin='normal'
                        required
                        label='Age'
                        name='age'
                        type='number'
                        value={signupDogInfo.age}
                        onChange={handleSignupDogInfo}
                    />
                    <TextField
                        margin='normal'
                        required
                        label='Favorite Activity'
                        name='favorite_activity'
                        value={signupDogInfo.favorite_activity}
                        onChange={handleSignupDogInfo}
                    />
                    <TextField
                        margin='normal'
                        required
                        label='Favorite Food'
                        name='favorite_food'
                        value={signupDogInfo.favorite_food}
                        onChange={handleSignupDogInfo}
                    />
                    <Button
                        type='submit'
                        variant='contained'
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                </Box>
            </Box>
        </div>
    )
}

export default SignUp;