import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import CreatePost from "./CreatePost";

import Dashboard from "./Dashboard";
import DogProfile from "./DogProfile";
import Home from "./Home";
import PersonProfile from "./PersonProfile";
import SignUp from "./SignUp";
import WelcomeHeader from "./WelcomeHeader";

function App() {
  const [user, setUser] = useState();
  const [dogToShow, setDogToShow] = useState();

  console.log("The app component has been reloaded");

  useEffect(() => {
    fetch('/me')
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
      } else {
        setUser(data);
      }
    })
  }, [])

  return (
    <div className="App">
      <WelcomeHeader user={user} setUser={setUser} />
      <Routes>
        <Route path='/' element={<Home user={user} setUser={setUser} />} />
        <Route path='/signup' element={<SignUp setUser={setUser} />} />
        {user ?
          <>
            <Route path='/dashboard' element={<Dashboard user={user} setDogToShow={setDogToShow} />} />
            <Route path='/person-profile' element={<PersonProfile user={user} setDogToShow={setDogToShow} />} />
            <Route path='/dog-profile' element={<DogProfile user={user} dogToShow={dogToShow} setDogToShow={setDogToShow} />} />
            <Route path='/post' element={<CreatePost user={user}/>} />
          </>
        :
          undefined
        }
      </Routes>
    </div>
  );
}

export default App;