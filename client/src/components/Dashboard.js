import { Box, Paper } from '@mui/material';
import {useEffect, useState} from 'react';

import Post from './Post';

function Dashboard({user}) {
    const [friendDogsWithPosts, setFriendDogsWithPosts] = useState([]);

    useEffect(() => {
        fetch(`/dogs/${user.dogs[0].id}`)
        .then(resp => resp.json())
        .then(data => {
            data.friends.forEach(friend => {
                fetch(`/dogs/${friend.friend_id}`)
                .then(resp => resp.json())
                .then(data => {
                    setFriendDogsWithPosts(friendDogsWithPosts => [...friendDogsWithPosts, data]);
                })
            });
        })
    }, [user])
    
    return (
        <Box
            component={Paper}
            elevation={6}
            sx={{
                padding: '10px',
                borderRadius: '12px',
                width: 500,
                marginTop: 5
            }}
            m='auto'
            display='flex'
            alignItems='center'
            flexDirection='column'
        >
            {friendDogsWithPosts.map(dog => {
                return dog.posts.map(post => <Post key={post.post_text} post={post} dog={dog} user={user}/>)
            })}
        </Box>
    )
}

export default Dashboard;