import Logo from '../data/dog logo.png';

import { Box, Button, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function WelcomeHeader({user, setUser}) {
    let navigate = useNavigate();

    function handleLogout() {
        fetch('/logout', {
            method: 'DELETE'
        })
        .then(() => {
            navigate('/');
            setUser();
        });
    }

    function handleBannerClick() {
        user ? navigate('/dashboard') : navigate('/');
    }

    return (
        <Box
            component={Paper}
            elevation={6}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                bgcolor: '#abddff',
                overflow: 'hidden',
                borderRadius: '12px',
                fontWeight: 'bold',
                elevation: 6
            }}
        >
            <Box
                component='img'
                alt='Dog wearing sunglassses'
                src={Logo}
                sx={{
                    height: 200
                }}
            />
            <Box
                sx={{
                    flexGrow: 1
                }}
                onClick={handleBannerClick}
            >
                <Typography variant='h1'>Dog HQ</Typography>
                <Typography variant="h5">{user ? `Welcome back ${user.first_name}!` : 'Welcome to the future of dog social media!'}</Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 2

                }}
            >
                {user ?
                    <>
                        <Button variant='contained' sx={{margin: 1}} onClick={() => navigate('/person-profile')}>Profile</Button>
                        <Button variant='contained' sx={{margin: 1}} onClick={() => navigate('/post')}>New Post</Button>
                        <Button variant='contained' sx={{margin: 1}} onClick={handleLogout}>Log Out</Button>
                    </>
                : 
                    null
                }
            </Box>
        </Box>
    )
}

export default WelcomeHeader;