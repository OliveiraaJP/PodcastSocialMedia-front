import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./contexts/userContext.js";
import Home from "./pages/Home/index.jsx";
import Podcast from "./pages/Podcast/index.jsx";
import Signin from "./pages/Signin/index.jsx";
import Signup from "./pages/Signup/index.jsx";
import GlobalStyle from "./style/GlobalStyle.js";

function App() {
  const [userData, setUserData] = useState({
    token: null,
    usrName: null,
    usrImage: null
  });

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/homepage" element={<Home />} />
          <Route path="/podcast/:id" element={<Podcast />} />
        </Routes>
        <GlobalStyle />
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
