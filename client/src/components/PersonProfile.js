import { Grid, Paper, Box, Typography } from "@mui/material";
import DogCard from "./DogCard";

function PersonProfile({user, setDogToShow}) {
    return (
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
                    <Box 
                        component='img'
                        src={user.profile_photo}
                        alt='Profile Photo'
                        height={300}
                    />
                    <Typography variant='h6'>{user.first_name} {user.last_name}</Typography>
                    <Typography variant='h6'>Username: {user.username}</Typography>
                    <Typography variant='h6'>{user.email}</Typography>
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
                    <Typography variant="h4">{user.dogs.length > 1 ? 'Dogs' : 'Dog'}</Typography>
                    {user.dogs.map(dog => <DogCard key={dog.name} dog={dog} setDogToShow={setDogToShow} />)}
                </Box>
            </Grid>
        </Grid>
    )
}

export default PersonProfile;