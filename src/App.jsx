import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import {Container} from "react-bootstrap";
import Dashboard from "./components/Auth/Dashboard.jsx";
import SignUp from "./components/Auth/SignUp.jsx";
import LogIn from "./components/Auth/LogIn.jsx";
import AuthProvider from "./components/Context/AuthContext.jsx";
import ForgotPassword from "./components/Auth/ForgotPassword.jsx";
import RequireAuth from "./components/Context/RequireAuth.jsx";
import UpdateUserInformation from "./components/Auth/UpdateUserInformation.jsx";

function App() {

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{minHeight:"100vh"}}>
     <div className="w-100" style={{maxWidth:"400px"}}>
         <Router>

               <AuthProvider>
                   <Routes>
                       <Route path="/" element={
                           <RequireAuth>
                               <Dashboard/>
                           </RequireAuth>
                          }/>
                       <Route path="/signup" element={<SignUp/>}/>
                       <Route path="/login" element={<LogIn/>}/>
                       <Route path="/forgot-password" element={<ForgotPassword/>}/>
                       <Route path="/update-info" element={<UpdateUserInformation/>}/>
                   </Routes>
               </AuthProvider>

         </Router>
     </div>
    </Container>


  )
}

export default App
