
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addrecipes from './component/Addrecipes';
import View from './component/View';
import Search from './component/Search';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Addrecipes/>}/>
      <Route path="/view" exact element={<View/>}/>
      <Route path="/search" exact element={<Search/>}/>
     </Routes>
    
    
    </BrowserRouter>
    
    
    </>
    
  );
}

export default App;
