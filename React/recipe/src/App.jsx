// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Signup from './Components/Signup';
import NavBar from './Components/Navbar';
import Login from './Components/Login';
import Home from './Components/Home';
import Recipe from './Components/Recipe';
import Recipeadd from './Components/Recipeadd';
import Recipeshow from './Components/Recipeshow';
function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/recipe" element={<Recipe/>} />
      <Route path="/recipe/add" element={<Recipeadd/>} />
      <Route path="/recipe/:pid" element={<Recipeshow/>} />
      </Routes>
    </div>
  );
}

export default App;
