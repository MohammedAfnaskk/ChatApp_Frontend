import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './Pages/LoginPage';
import Signup from './Pages/RegisterPage'
import Chatpage from "./Pages/Chatpage";
function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<Signup/>}/>
      <Route path="/"element={<Chatpage/>}/>


    </Routes>
    </BrowserRouter>
  )
}

export default App
