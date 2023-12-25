import { useRef, useState} from 'react';
import {Alert, Button, Card, Form} from "react-bootstrap";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../Context/AuthContext.jsx";
import  "../Loading/loading.css"
import Loading from "../Loading/Loading.jsx";

function Dashboard() {

    const {login} = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const EmailRef = useRef();
    const PasswordRef =useRef()
    const navigate = useNavigate()
    const location =  useLocation()
    const redirectPath = location.state?.path || "/"

    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            setLoading(true);
            await login(EmailRef.current.value , PasswordRef.current.value)
            navigate(redirectPath , {replace: true} );
        }catch{
            setError("login failed")
        }
        setLoading(false)
    }
    return (
           <>
               {loading?  <Loading/>:
                 <>
                     <Card>
                         <Card.Body>

                             <h2>Log In</h2>
                             {error && <Alert  variant="danger">{error}</Alert>}
                             <Form onSubmit={handleSubmit}>
                                 <Form.Group>
                                     <Form.Label htmlFor="email" className="float-start">email</Form.Label>
                                     <Form.Control type="text" id="email" ref={EmailRef} />
                                 </Form.Group>

                                 <Form.Group>
                                     <div className="d-flex justify-content-between my-3">
                                         <Form.Label htmlFor="password" className="float-start">password</Form.Label>
                                         <Link to="/forgot-password">   forgot password? </Link>

                                     </div>
                                     <Form.Control type="password" id="password" ref={PasswordRef} />
                                 </Form.Group>

                                 <Button variant="primary" type="submit" className="w-100 text-center mt-2" disabled={loading}>Log In</Button>
                             </Form>

                         </Card.Body>
                     </Card>
                     <div className="w-100 mt-2 text-center">
                         dont have an account <Link to="/signup">SignUp</Link>
                     </div></>}

           </>
    );
}

export default Dashboard;
