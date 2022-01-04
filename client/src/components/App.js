
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

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
      setUser(data);
    })
  }, [])

  return (
    <div className="App">
      <WelcomeHeader user={user} setUser={setUser} />
      <Routes>
        <Route path='/' element={<Home setUser={setUser} />} />
        <Route path='/signup' element={<SignUp setUser={setUser} />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/person-profile' element={<PersonProfile user={user} setDogToShow={setDogToShow} />} />
        <Route path='/dog-profile' element={<DogProfile dogToShow={dogToShow} />} />
      </Routes>
    </div>
  );
}

export default App;