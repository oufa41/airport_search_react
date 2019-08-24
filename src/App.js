import React from 'react';
import logo from './logo.svg';
import './App.css';
import GetOnlinePosts from './components/OnlinePosts/GetOnlinePosts';



function App() {
  return (
    <div className="App">

       <h1 className="header">Airport Search</h1>
       <GetOnlinePosts/>
     </div>
  );
}

export default App;
