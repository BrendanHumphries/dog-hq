import Logo from '../data/dog logo.png';

import { Box, Typography } from '@mui/material';

function WelcomeHeader() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                bgcolor: '#abddff',
                overflow: 'hidden',
                borderRadius: '12px',
                fontWeight: 'bold'
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
            <Box>
                <Typography variant='h1'>Dog HQ</Typography>
                <Typography variant="h5">Welcome to the future of all things dogs</Typography>
            </Box>
        </Box>
    )
}

export default WelcomeHeader;