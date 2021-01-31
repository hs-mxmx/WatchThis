import { Footer, Form } from "../components";
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaceContainer } from "../containers/face";
import { FooterContainer } from "../containers/footer";
import { Background } from "../components";
import * as ROUTES from '../constants/routes';

export function Index() {
    const history = useHistory();
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    const handleSignIn = (event) => {
        event.preventDefault();

        fetch("http://127.0.0.1:5000/home", {
            method:"POST",
            cache: "no-cache",
            headers:{
                "content_type":"application/json",
            },
            body:JSON.stringify(        
                {"email": emailAddress,
                "password": password
                }
            )}
        )
        .then(response => {
            return response.json().then( (data) =>      
                {//console.log(data)
                    if ("Error" in data.message) {
                    setEmailAddress('');
                    setPassword('');
                    setError(data.message["Error"]);
                } else {
                    history.push({
                        pathname: ROUTES.BROWSE,
                        state: { detail: {
                            'password': password,
                            'email': emailAddress,
                            'message': data.message["Success"]

                        } }
                    });
                }}
            );
        })
        .catch((error) => {
            setEmailAddress('');
            setPassword('');
            console.log(error)
            setError(error.message);
        });;

    }

    return(
        <>
        <Background>
            <FaceContainer/>
            <Form>
                <Form.Title>Account Login</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignIn} method="POST">
                    <Form.Input
                        type="email"
                        placeholder="Email address"
                        value={emailAddress}
                        onChange={({ target }) => setEmailAddress(target.value)} 
                    />

                    <Form.Input
                        type="password"
                        autoComplete="off"
                        placeholder="Password"
                        value={password}
                        onChange={({ target }) => setPassword(target.value)} 
                    />

                    <Form.Submit disabled={isInvalid} type="submit">
                        Login
                    </Form.Submit>
                </Form.Base>
                <Form.Break/>
                <Form.Text>
                    Don´t have an account? <Form.Link to="/signup">Sign up!</Form.Link>
                </Form.Text>
                <Form.TextSmall>
                    This page is protected by Google reCAPTCHA to ensure you are not a bot.
                </Form.TextSmall>
            </Form>
        </Background>
        </>
    )
};