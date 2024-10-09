// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Entertainment from './pages/Entertainment';
import Travel from './pages/Travel';
import Tech from './pages/Tech';
import Sports from './pages/Sports';
import Politics from './pages/Politics';
import Home from './pages/Home';
import Footer from './components/footer';
import BlogPost from './components/blogPost';
import AdminPanel from './pages/AdminPanel';
import AuthorProfile from './components/authorProfile';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
         <Route path="/" exact element={<Home />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/politics" element={<Politics />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/post/:id" element={<BlogPost />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/author/:id" element={<AuthorProfile />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
