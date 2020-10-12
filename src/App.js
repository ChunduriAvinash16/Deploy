import React from 'react';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container-fluid" id="Body">
        <Body/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
