import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";

function EditPost({post, dog, setShowEditor, setPostToDisplay}) {
    const ref = useRef();
    const [editPostData, setEditPostData] = useState({
        post_text: post.post_text,
        location: post.location,
        dog_id: dog.id
    });
    const [editPostPhoto, setPostPhoto] = useState(null);

    function handleEditPost(event) {
        setEditPostData({...editPostData, [event.target.name]:event.target.value});
    }

    function handleEditPostSubmit(event) {
        event.preventDefault();
        const editPostFormData = new FormData();
        editPostFormData.append('post_text', editPostData.post_text);
        editPostFormData.append('location', editPostData.location);
        editPostFormData.append('dog_id', editPostData.dog_id);
        if (editPostPhoto) {
            editPostFormData.append('photo', editPostPhoto);
        } else {
        }
        fetch(`/posts/${post.id}`, {
            method: 'PATCH',
            body: editPostFormData
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            setPostToDisplay(data);
            setShowEditor(false);
        })
    }

    function handleDeletePost() {
        fetch(`/posts/${post.id}`, {
            method: 'DELETE'
        })
        .then(() => {
            setPostToDisplay();
        })
    }

    return (
        <>
            <Box
                textAlign='center'
                padding='5px'
                display='flex'
                flexDirection='column'
                component='form'
                onSubmit={handleEditPostSubmit}
            >
                <TextField
                    required
                    label='Caption'
                    name='post_text'
                    value={editPostData.post_text}
                    onChange={handleEditPost}
                    margin='normal'
                />
                <TextField
                    required
                    label='Location'
                    name='location'
                    value={editPostData.location}
                    onChange={handleEditPost}
                    margin="normal"
                />
                <Typography textAlign='left'>Only upload if you would like to change the post photo</Typography>
                <input
                    ref={ref}
                    type='file'
                    accept="image/*"
                    onChange={event => setPostPhoto(event.target.files[0])}
                    margin='normal'
                />
                <Button
                    type='submit'
                    variant='contained'
                    sx={{
                        marginTop: 1
                    }}
                >
                    Edit Post
                </Button>
            </Box>
            <Typography>Or Delete Post</Typography>
            <Button variant="contained" onClick={handleDeletePost}>Delete Post</Button>
        </>
    )
}

export default EditPost;