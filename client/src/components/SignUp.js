import { Box, Button, InputLabel, MenuItem, Paper, Select, TextField, Typography, FormControl } from "@mui/material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp({setUser}) {
    let navigate = useNavigate();

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
        sex: 'male',
        age: 0,
        favorite_activity: '',
        favorite_food: ''
    })
    const [userProfilePhoto, setUserProfilePhoto] = useState(null);
    const [dogProfilePhoto, setDogProfilePhoto] = useState(null);

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

    function handleSignupSubmit(event) {
        event.preventDefault();
        const userFormData = new FormData();
        userFormData.append('username', signupUserInfo.username);
        userFormData.append('password', signupUserInfo.password);
        userFormData.append('password_confirmation', signupUserInfo.password_confirmation);
        userFormData.append('first_name', signupUserInfo.first_name);
        userFormData.append('last_name', signupUserInfo.last_name);
        userFormData.append('email', signupUserInfo.email);
        userFormData.append('profile_photo', userProfilePhoto);
        fetch('/users', {
            method: 'POST',
            body: userFormData
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.errors) {
                console.log(data);
            } else {
                console.log(data);
                setUser(data);
                const dogFormData = new FormData();
                dogFormData.append('user_id', data.id);
                dogFormData.append('name', signupDogInfo.name);
                dogFormData.append('breed', signupDogInfo.breed);
                dogFormData.append('sex', signupDogInfo.sex);
                dogFormData.append('age', signupDogInfo.age);
                dogFormData.append('favorite_activity', signupDogInfo.favorite_activity);
                dogFormData.append('favorite_food', signupDogInfo.favorite_food);
                dogFormData.append('profile_photo', dogProfilePhoto);
                fetch('/dogs', {
                    method: 'POST',
                    body: dogFormData
                })
                .then(resp => resp.json())
                .then(data => {
                    console.log(data);
                    navigate('/dashboard');
                });
            }
        })
    }

    return (
        <div className='SignUp'>
            <Box
                component={Paper}
                elevation={6}
                m='auto'
                sx={{
                    marginTop: 5,
                    maxWidth: 900
                }}
            >
                <Box
                    textAlign='center'
                    padding='20px'
                    display='flex'
                    flexDirection='column'
                    component='form'
                    onSubmit={handleSignupSubmit}
                >
                    <Typography>Welcome to the future of dog social media!</Typography>
                    <Typography>First we need some info about you</Typography>
                    <TextField
                        margin="normal"
                        required
                        label='First Name'
                        name='first_name'
                        value={signupUserInfo.first_name}
                        onChange={handleSignupUserInfo}
                    />
                    <TextField
                        margin="normal"
                        required
                        label='Last Name'
                        name='last_name'
                        value={signupUserInfo.last_name}
                        onChange={handleSignupUserInfo}
                    />
                    <TextField
                        margin="normal"
                        required
                        label='Username'
                        name='username'
                        value={signupUserInfo.username}
                        onChange={handleSignupUserInfo}
                    />
                    <TextField
                        margin="normal"
                        required
                        label='Email Address'
                        name='email'
                        value={signupUserInfo.email}
                        onChange={handleSignupUserInfo}
                    />
                    <TextField
                        margin="normal"
                        required
                        label='Password'
                        type='password'
                        name='password'
                        value={signupUserInfo.password}
                        onChange={handleSignupUserInfo}
                    />
                    <TextField
                        margin="normal"
                        required
                        label='Confirm Password'
                        type='password'
                        name='password_confirmation'
                        value={signupUserInfo.password_confirmation}
                        onChange={handleSignupUserInfo}
                    />
                    <Typography textAlign='left'>Please upload a profile photo of you</Typography>
                    <input
                        margin="normal"
                        type='file'
                        accept='image/*'
                        onChange={(event) => setUserProfilePhoto(event.target.files[0])}
                    />
                    <Typography sx={{marginTop: 1}}>Now we need some info about your dog!</Typography>
                    <TextField
                        margin="normal"
                        required
                        label="Dog's Name"
                        name='name'
                        value={signupDogInfo.name}
                        onChange={handleSignupDogInfo}
                    />
                    <TextField
                        margin="normal"
                        required
                        label='Breed(s)'
                        name='breed'
                        value={signupDogInfo.breed}
                        onChange={handleSignupDogInfo}
                    />
                    <FormControl fullWidth>
                        <InputLabel id="sex-select" sx={{marginTop: 1}}>Sex</InputLabel>
                        <Select
                            labelId="sex-select"
                            required
                            value={signupDogInfo.sex}
                            label="Sex"
                            name='sex'
                            sx={{
                                marginBottom: 1,
                                marginTop: 1
                            }}
                            onChange={handleSignupDogInfo}
                        >
                            <MenuItem value='male'>Male</MenuItem>
                            <MenuItem value='female'>Female</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        margin="normal"
                        required
                        label='Age'
                        name='age'
                        type='number'
                        value={signupDogInfo.age}
                        onChange={handleSignupDogInfo}
                    />
                    <TextField
                        margin="normal"
                        required
                        label='Favorite Activity'
                        name='favorite_activity'
                        value={signupDogInfo.favorite_activity}
                        onChange={handleSignupDogInfo}
                    />
                    <TextField
                        margin="normal"
                        required
                        label='Favorite Food'
                        name='favorite_food'
                        value={signupDogInfo.favorite_food}
                        onChange={handleSignupDogInfo}
                    />
                    <Typography textAlign='left'>Please upload a profile photo of your dog</Typography>
                    <input
                        margin="normal"
                        type='file'
                        accept='image/*'
                        onChange={(event) => setDogProfilePhoto(event.target.files[0])}
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