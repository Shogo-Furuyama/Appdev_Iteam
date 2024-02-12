// 例: App.js の修正
import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Page2 from './components/Page2';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>トイレの神様</h1>
        <button id="startbtn">
        <Link to="/Home" className="link">やばい漏れそう</Link>
        </button>
        <br />
        <br />
        <button id="chatbtn">
        <Link to="/page2" className="link">チャット</Link>
        </button>
        <br />

        <Routes> {/* ここで Routes を使用する */}
          <Route path="/Home" element={<Home />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </div>
    </Router>
  );
}

function Map(){
  return (
    <div>
      <h1></h1>
    </div>
  );
}


export default App;