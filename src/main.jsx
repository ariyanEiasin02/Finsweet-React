import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, BrowserRouter as Router, Routes, } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Pricing from './pages/Pricing/Pricing.jsx';
import Features from './pages/Features/Features.jsx';
import WorkPage from './pages/Work/WorkPage.jsx';
import ReadCase from './pages/ReadCase/ReadCase.jsx';
import BlogPages from './pages/BlogPages/BlogPages.jsx';
import ReadBlog from './pages/ReadBlog/ReadBlog.jsx';
import Privacy from './pages/Privacy/Privacy.jsx';
import BackTop from './components/BackTop/BackTop.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar/>
      <BackTop/>
    <Routes>
        <Route exact path="/"  element={<Home />}/>
        <Route exact path="/about"  element={<About />}/>
        <Route exact path="/contact"  element={<Contact />}/>
        <Route exact path="/pricing"  element={<Pricing />}/>
        <Route exact path="/features"  element={<Features />}/>
        <Route exact path="/portfolio"  element={<WorkPage />}/>
        <Route exact path="/privacy"  element={<Privacy />}/>
        <Route exact path="/workPage/readCase"  element={<ReadCase/>}/>
        <Route exact path="/blog"  element={<BlogPages/>}/>
        <Route exact path="/blog/ReadBlog"  element={<ReadBlog/>}/>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>,
)
