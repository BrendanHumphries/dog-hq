import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

import Home from "./Home";
import SignUp from "./SignUp";

function App() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    fetch('/me')
    .then(resp => {
      if (resp.ok) {
        resp.json()
        .then(data => {
          console.log(data);
          setCurrentUser(data);
        })
      } else {
        console.log('No user logged in from session cookies');
      }
    })
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        <Route path='/signup' element={<SignUp currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        <Route path='/dashboard' element={<Dashboard currentUser={currentUser} />} />
      </Routes>
    </div>
  );
}

export default App;