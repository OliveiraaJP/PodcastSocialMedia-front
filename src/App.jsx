import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin/index.jsx";
import Signup from "./pages/Signup/index.jsx";
import GlobalStyle from "./style/GlobalStyle.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />}/>
        <Route path='/login' element={<Signin />}/>
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
