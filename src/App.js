
import React from 'react';
import {HashRouter, Routes, Route} from "react-router-dom";
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';
import Container  from './Component/Contanier';
import Contact from './Component/Contact';

function App() {
  return (
    <div className="font-sans">
      <HashRouter>
      <Routes>
        <Route>
        <Route path="/" element={<Container/>}/>
        <Route path="SignIn" element={<SignIn/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="SignUp" element={<SignUp/>}/>
        </Route>
        
      </Routes>
      </HashRouter>
      
      
    </div>
  );
}

export default App;

