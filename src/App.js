
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addrecipes from './component/Addrecipes';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Addrecipes/>}/>
     </Routes>
    
    
    </BrowserRouter>
    
    
    </>
    
  );
}

export default App;
