import axios from 'axios';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import React, { useState, useEffect} from 'react';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const AppContext = React.createContext({})

function App() {
  const [tales, setTales] = useState([])

  useEffect (()=>{
    async function axiosData() {
      const talesData = await axios.get("https://6443e6ef466f7c2b4b5ceafe.mockapi.io/tales/tales")
      setTales(talesData.data)
    }
    axiosData();
  },[])

  return (
    <AppContext.Provider
      value={
        {
          tales,
          setTales
        }
      }
    >
      <div>
        <Router>
          <Header/> 
          <Routes>
            <Route path="/"
              element={
                <Home
                  item={tales}
                />
              }
            />
          </Routes>
        </Router> 
        <Footer/>
      </div>
    </AppContext.Provider>
  );
}

export default App;