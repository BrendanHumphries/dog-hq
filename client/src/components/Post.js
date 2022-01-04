import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

function Post({post, dog}) {
    return (
        <div className="Post">
            <Box
                component={Paper}
                elevation={6}
                sx={{
                    bgcolor: '#abddff',
                    borderRadius: '12px',
                    padding: '10px',
                    width: 400
                }}
            >
                <Typography>{post.dog ? post.dog.name : dog.name}</Typography>
                <Box
                    component='img'
                    src={post.photo}
                    alt='Sample Photo'
                    height={400}
                />
                <Typography>{post.post_text}</Typography>
            </Box>
        </div>
    )
}

export default Post;