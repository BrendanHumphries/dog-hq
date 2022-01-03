import { useNavigate } from "react-router-dom";

function Dashboard(currentUser) {
    let navigate = useNavigate();

    return(
        <>
            {!currentUser ?
            navigate('/')
            :
            <div className="Dashboard">
                <p>Hi, I'm the dashboard</p>
            </div>
            }
        </>
    )
}

export default Dashboard;