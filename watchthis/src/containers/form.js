import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export function FormContainer() {
    const history = useHistory();
    const [username, setUsername,] = useState('');
    const [alias, setAlias] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '' || password !== confirmPassword || username==='';
    
   

    const handleSignUp = (event) => {
        event.preventDefault();

        fetch("http://127.0.0.1:5000/users", {
            method:"POST",
            cache: "no-cache",
            headers:{
                "content_type":"application/json",
            },
            body:JSON.stringify(        
                {"name": username,
                "username": alias,
                "email": emailAddress,
                "password": password
                }
            )}
        )
        .then(response => {
            return response.json().then( (data) => 
                
                {//console.log(data)
                    if ("Error" in data.message) {
                    setUsername('');
                    setAlias('');
                    setPassword('');
                    setConfirmPassword('');
                    setEmailAddress('');
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
            setUsername('');
            setAlias('');
            setPassword('');
            setConfirmPassword('');
            console.log(error)
            setError(error.message);
        });;

    }

    return ( 
        <Form>
                    <Form.Title>Create an Account</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base  onSubmit={handleSignUp} method="POST">
                        <Form.TextSmall>
                            Insert your complete name
                        </Form.TextSmall>           
                        <Form.Input
                            type="text"
                            autoComplete="off"
                            placeholder="Complete Name"
                            value={username}
                            onChange={({ target }) => setUsername(target.value)}
                             
                            required/>
                            <Form.TextSmall>
                            Insert your Username
                            </Form.TextSmall>           
                        <Form.Input
                            type="text"
                            autoComplete="off"
                            placeholder="Username"
                            value={alias}
                            onChange={({ target }) => setAlias(target.value)} />
                        <Form.TextSmall>
                            Insert your email
                        </Form.TextSmall>           
                        <Form.Input
                            type="email"
                            autoComplete="off"
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)} />
                        <Form.TextSmall>
                            Insert your password
                        </Form.TextSmall>
                        <Form.Input
                            type="password"
                            autoComplete="off"
                            placeholder="Password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)} />
                        <Form.TextSmall>
                            Confirm your password
                        </Form.TextSmall>
                        <Form.Input
                            type="password"
                            autoComplete="off"
                            placeholder="Password"
                            value={confirmPassword}
                            onChange={({ target }) => setConfirmPassword(target.value)} />
                        <Form.Submit onclick="nombrePerfil('username')" disabled={isInvalid} type="submit">
                            Submit
                        </Form.Submit>
                    </Form.Base>
                    <Form.Break />
                    <Form.Text>
                        Already have an account? <Form.Link to={ROUTES.INDEX}>Sign in!</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you are not a bot.
                    </Form.TextSmall>
        </Form>
    )
}