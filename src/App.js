import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import NotFound from './components/notFound/notFound';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Home from './components/home/home';
import { CreateRecipe } from './components/createRecipe/createRecipe';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>} />
        <Route path='/home' element={<Home/>} />
        <Route path="/newRecipe" element={<CreateRecipe/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
