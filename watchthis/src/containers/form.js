import React, {useState, useContext} from 'react';
import { Form } from '../components';

export function FormContainer({children}) {

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    return ( 
        <>
        <Form>
                    <Form.Title>Account Login</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base  method="POST">
                        <Form.Input
                            type="email"
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)} />

                        <Form.Input
                            type="password"
                            autoComplete="off"
                            placeholder="Password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)} />
                        <Form.Submit disabled={isInvalid} type="submit">
                            Login
                        </Form.Submit>
                    </Form.Base>
                    <Form.Break />
                    <Form.Text>
                        New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you are not a bo. Learn more.
                    </Form.TextSmall>
                </Form>
        </>
    )
}