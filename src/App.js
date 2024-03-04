
import './App.css';
import { Header } from './Components/Header';
import {Footer} from "./Components/Footer"
import Home from "./Components/Home";
import Contact from './Components/Contact';
import About from './Components/About';
import Nav from './Components/Nav';
import Test from "./Components/Test";
import {BrowserRouter,Route, Routes} from "react-router-dom"; // To use react router 


function App() {
  return (
  
      <div >
        <Header/>
        <main>
        <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/posts/:postId' element={<Test/>} />
        </Routes>
        </main>
      
      
      </div>
  
  );
}

export default App;
