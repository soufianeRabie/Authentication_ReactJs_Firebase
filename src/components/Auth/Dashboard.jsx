import React, {useState} from 'react';
import {useAuth} from "../Context/AuthContext.jsx";
import {Alert, Button, Card} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";


function Dashboard() {

    const {currentUser , logout} = useAuth()
    const [error, setError] = useState("");
    const navigate = useNavigate()


    const handleLogout = async (e)=>{
        e.preventDefault();
        try{
           await  logout()
            navigate("/login")
        }catch{
            setError("Failed to log out")
        }
    };
    return (
       <Card>
         <Card.Body>
             <h2 className="text-center mb-3">Profile</h2>
             {error && <Alert variant="danger">{error}</Alert>}

             <strong>Email:</strong><span>{currentUser.email}</span>

         </Card.Body>

           <Button variant="info" onClick={handleLogout} > logout</Button>
        <div>
            <Link to="/update-info" className="btn btn-dark">update info</Link>
        </div>
       </Card>
    );
}

export default Dashboard;
