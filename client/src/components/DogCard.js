import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function DogCard({dog, setDogToShow}) {
    let navigate = useNavigate();

    function handleDogClick() {
        setDogToShow(dog);
        navigate('/dog-profile');
    }

    return (
        <div onClick={handleDogClick}>
            <Box
                component='img'
                src={dog.profile_photo}
                alt='Dog Profile Photo'
                height={300}
            />
            <Typography variant="h6">{dog.name}</Typography>
            <Typography variant='h6'>{dog.sex.charAt(0).toUpperCase() + dog.sex.slice(1)}, {dog.age}</Typography>
            <Typography variant='h6'>Breed: {dog.breed}</Typography>
            <Typography variant='h6'>Favorite Food: {dog.favorite_food}</Typography>
            <Typography variant='h6'>Favorite Activity: {dog.favorite_activity}</Typography>
        </div>
    )
}

export default DogCard;