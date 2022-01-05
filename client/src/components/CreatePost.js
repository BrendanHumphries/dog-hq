import { Button, InputLabel, MenuItem, Paper, Select, TextField, Typography, FormControl } from "@mui/material";
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
                        margin="normal"
                        required
                        label='Caption'
                        name='post_text'
                        value={createPostData.post_text}
                        onChange={handlePostData}
                    />
                    <TextField
                        margin="normal"
                        required
                        label='Location'
                        name='location'
                        value={createPostData.location}
                        onChange={handlePostData}
                    />
                    <FormControl fullWidth>
                        <InputLabel id="dog-select" sx={{marginTop: 1}}>Dog</InputLabel>
                        <Select
                            labelId="dog-select"
                            required
                            value={createPostData.dog_id}
                            label="Dog"
                            sx={{
                                marginBottom: 1,
                                marginTop: 1
                            }}
                            onChange={handlePostData}
                        >
                            {user.dogs.map(dog => <MenuItem key={dog.name} value={dog.id}>{dog.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <Typography textAlign='left'>Please upload a photo for the post</Typography>
                    <input
                        ref={ref}
                        type='file'
                        accept='image/*'
                        onChange={(event) => setPostPhoto(event.target.files[0])}
                        margin="normal"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            marginTop: 1
                        }}
                    >
                        Create Post
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default CreatePost;