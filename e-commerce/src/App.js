import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';

function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='contact' element={<Contact />}/>
        </Route>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
