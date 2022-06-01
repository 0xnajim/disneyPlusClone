import { React, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Details from './components/Details';
import Login from './components/Login';
import db from '../src/firebase'
import { setMovies } from '../src/features/movie/movieSlice'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    db.collection('movies').onSnapshot((snap) => {
      let tempMovies = snap.docs.map(doc => {
        return { id: doc.id, ...doc.data() }
      })
      dispatch(setMovies(tempMovies))
    })
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
