import React, {useRef, useState} from "react";
import {Alert, Button, Card, Form} from "react-bootstrap";
import {Link, Navigate, useNavigate} from "react-router-dom";
import {useAuth} from "../Context/AuthContext.jsx";
import Loading from "../Loading/Loading.jsx";

function SignUp() {



    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const EmailRef = useRef();
    const PasswordRef = useRef();
    const PasswordConfirmationRef = useRef();
    const {signup} = useAuth()
    const navigate = useNavigate()
    const handleSubmit = async (e)=> {
        e.preventDefault();
        if(PasswordRef.current.value !== PasswordConfirmationRef.current.value)
        {
           return  setError("Password does not match")

        }

        try {
            setError("")
            setLoading(true)
            console.log( EmailRef.current.value , PasswordRef.current.value)
            await signup(EmailRef.current.value , PasswordRef.current.value)
            navigate('/')

        }catch {
            setError("Failed to create an account")
        }
        setLoading(false)
    }

    return (
       <>
       {loading ? <Loading/> :
           <>
           <Card>
           <Card.Body>
           <h2>SignUp</h2>
       {error && <Alert variant={"danger"}>{error}</Alert>}
    <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label htmlFor="email">email</Form.Label>
            <Form.Control type="text" id="email" ref={EmailRef} />
        </Form.Group>
        <Form.Group>
            <Form.Label htmlFor="password">password</Form.Label>
            <Form.Control type="password" id="password" ref={PasswordRef} />
        </Form.Group>
        <Form.Group>
            <Form.Label htmlFor="c_password">password confirmation</Form.Label>
            <Form.Control type="password" id="c_password" ref={PasswordConfirmationRef} />
        </Form.Group>
        <Button type='submit' variant="primary" className="w-100 text-center mt-2" disabled={loading}>sign up</Button>
    </Form>

</Card.Body>

</Card>

    <div className="w-100 mt-2">
        aleready have an account <Link to="/login">login</Link>
    </div>
</>}</>
    );
}

export default SignUp;
