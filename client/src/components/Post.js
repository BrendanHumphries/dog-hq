import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import Juliette from '../data/Juliette Sample.JPG'

function Post() {
    return (
        <div className="Post">
            <Box
                sx={{
                    bgcolor: '#abddff',
                    borderRadius: '12px',
                    padding: '10px',
                    width: 400
                }}
            >
                <Typography variant="h4">Featured Post:</Typography>
                <Typography>Juliette2233 - 3 mins ago</Typography>
                <Box
                    component='img'
                    src={Juliette}
                    alt='Sample Photo'
                    height={400}
                />
                <Typography>Felt cute, might delete later</Typography>
            </Box>
        </div>
    )
}

export default Post;