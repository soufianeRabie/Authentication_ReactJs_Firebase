import React, {useRef, useState} from 'react';
import {useAuth} from "../Context/AuthContext.jsx";
import Loading from "../Loading/Loading.jsx";
import {Alert, Button, Card, Form} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";

function UpdateUserInformation() {
    const [loading, setLoading] = useState(false);
    const {currentUser , updateUserEmail  } = useAuth() ;
    const [error, setError] = useState("")
    const EmailRef = useRef()
    const PasswordRef = useRef()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const Password = PasswordRef.current.value
        console.log(currentUser)

        if(currentUser.password === Password)
        {
            try {
                await updateUserEmail(EmailRef.current.value)
                navigate("/")
            } catch {
                setError("something went wrong")
            }
        }else
        {
            setError("password is incorrect")
        }
        setLoading(false)

    }

    return (
      <>
          {loading? <Loading/> :
              <>
                  <Card>
                      <Card.Body>
                          <h2>Update Email</h2>
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

                              <Button type='submit' variant="primary" className="w-100 text-center mt-2" disabled={loading}> update </Button>
                          </Form>

                      </Card.Body>

                  </Card>

                  <div className="w-100 mt-2">
                      aleready have an account <Link to="/login">login</Link>
                  </div>
              </>}
      </>
    );
}

export default UpdateUserInformation;
