import { Button, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";

function CreatePost({user}) {
    const [createPostData, setCreatePostData] = useState({
        post_text: '',
        location: '',
        dog_id: user.dogs[0].id
    });
    const [postPhoto, setPostPhoto] = useState(null);
    const ref = useRef();

    function handlePostData(event) {
        setCreatePostData({...createPostData, [event.target.name]:event.target.value});
    }

    function handleCreatePost(event) {
        event.preventDefault();
        const postFormData = new FormData();
        postFormData.append('post_text', createPostData.post_text);
        postFormData.append('location', createPostData.location);
        postFormData.append('dog_id', createPostData.dog_id)
        postFormData.append('photo', postPhoto);
        fetch('/posts', {
            method: 'POST',
            body: postFormData
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            alert('Successfully created post! Head to your profile to see it!');
            setCreatePostData({
                post_text: '',
                location: '',
                dog_id: user.dogs[0].id
            });
            setPostPhoto(null);
            ref.current.value = '';
        })
    }

    console.log(createPostData);

    return (
        <>
            <Box
                component={Paper}
                elevation={6}
                m='auto'
                sx={{
                    marginTop: 5,
                    maxWidth: 600
                }}
            >
                <Box
                    textAlign='center'
                    padding='20px'
                    display='flex'
                    flexDirection='column'
                    component='form'
                    onSubmit={handleCreatePost}
                >
                    <Typography variant='h4'>Create a post</Typography>
                    <TextField
                        required
                        label='Caption'
                        name='post_text'
                        value={createPostData.post_text}
                        onChange={handlePostData}
                    />
                    <TextField
                        required
                        label='Location'
                        name='location'
                        value={createPostData.location}
                        onChange={handlePostData}
                    />
                    <Select
                        label='Dog'
                        required
                        name='dog_id'
                        value={createPostData.dog_id}
                        onChange={handlePostData}
                    >
                        {user.dogs.map(dog => <MenuItem key={dog.name} value={dog.id}>{dog.name}</MenuItem>)}
                    </Select>
                    <input
                        ref={ref}
                        type='file'
                        accept='image/*'
                        onChange={(event) => setPostPhoto(event.target.files[0])}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                    >
                        Create Post
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default CreatePost;