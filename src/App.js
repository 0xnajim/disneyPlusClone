import {React, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Details from './components/Details';
import Login from './components/Login';
import db from '../src/firebase'

function App() {

  useEffect(() => {
    db.collection("movies").onSnapShot((snap)=>{
      console.log(snap);
    })
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/details' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
