import "./App.css";
import {BrowserRouter, Route, Routes} from 'react-router'
import Footer from "./components/footer/footer";
import Form from "./components/form/Form";
import Navbar from "./components/navbar/Navbar";
import Subscription from "./components/subscription/Subscription";
import Subscribe from "./components/subscription/Subscription";
import User from "./pages/LoginPage";
import Home from "./pages/Home";
import SignUp from "./components/form/SignUp";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
