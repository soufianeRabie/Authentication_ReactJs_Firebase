import React, {useRef, useState} from 'react';
import {Alert, Button, Card, Form} from "react-bootstrap";
import {useAuth} from "../Context/AuthContext.jsx";
import {Link} from "react-router-dom";
import Loading from "../Loading/Loading.jsx";

function ForgotPassword() {

    const EmailRef = useRef()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("")
    const {resetPassword} = useAuth();
    const [message, setMessage] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError("")
            setLoading(true);
            await resetPassword(EmailRef.current.value);
            setMessage("Please check your email to get new password")

        }catch
        {
            setError("something went wrong")
        }
        setLoading(false);
    }
    return (
       <>
           {loading? <Loading/> :
               <>
               <Card>
                   {error && <Alert variant="danger"> {error}</Alert>}
                   {message && <Alert variant="success"> {message}</Alert>}
                   <Form onSubmit={handleSubmit}>
                       <Form.Group>
                           <Form.Label htmlFor="email" className="text">Email</Form.Label>
                           <Form.Control type="text" id="email" ref={EmailRef}/>
                       </Form.Group>
                       <Button variant="primary" type="submit" className="w-100 mt-2" disabled={loading}>Reset Password</Button>
                   </Form>
                   <div className="text-center mt-2">
                       <Link to="/login" >Login</Link>
                   </div>
               </Card>

               <div className="w-100 mt-2 text-center">
                   dont have an account <Link to="/signup">SignUp</Link>
               </div>
           </>}
       </>
    );
}

export default ForgotPassword;
