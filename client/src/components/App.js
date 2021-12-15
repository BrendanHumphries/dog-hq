import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import SignUp from "./SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;