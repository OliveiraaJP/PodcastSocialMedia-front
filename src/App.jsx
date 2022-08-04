import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup/index.jsx";
import GlobalStyle from "./style/GlobalStyle.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />}/>
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
