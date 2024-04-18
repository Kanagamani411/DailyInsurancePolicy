import React from 'react';
import './App.css';
import Navbar from './Pages';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import AddWallet from './Components/AddWallet';
import Claim from './Components/Claim';
import Purchase from './Components/Purchase';
  
function App() {
return (
    <Router>
    <Navbar/>
    <Routes>
            
           
            <Route exact path='/'  component={<Home />} />
            
            <Route path='/Login' element={<Login/>} />
            <Route path='/Register' element={<Register/>} />
            <Route path='/AddWallet' element={<AddWallet/>} />
            <Route path='/Purchase Policy' element={<Purchase Policy/>} />
            <Route path='/Claim' element={<Claim/>} />
    </Routes>
    </Router>
);
}
  
export default App;