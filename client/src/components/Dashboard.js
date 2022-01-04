import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import WelcomeHeader from './WelcomeHeader'

function Dashboard(currentUser) {
    let navigate = useNavigate();

    return(
        <>
            <WelcomeHeader />
        </>
    )
}

export default Dashboard;