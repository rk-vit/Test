import React, { useState,useEffect } from "react";
import { Router, Route,Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import axios from "axios"
import LandingPage from "./pages/Landingpage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/Homepage";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/home" element={<ProtectedRoute><HomePage/></ProtectedRoute>  }>
          
        </Route>
        

    </Routes>
  );
}

export default App;
