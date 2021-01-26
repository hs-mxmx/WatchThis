import React, {useState, useContext} from 'react';
import { Form } from '../components';

export function FormContainer() {
    const [username, setUsername] = useState('');
    const [alias, setAlias] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '' || password !== confirmPassword || username==='';

    return ( 
        <Form>
                    <Form.Title>Create an Account</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base  method="POST">
                        <Form.TextSmall>
                            Insert your complete name
                        </Form.TextSmall>           
                        <Form.Input
                            type="text"
                            placeholder="Complete Name"
                            value={username}
                            onChange={({ target }) => setUsername(target.value)} 
                            required/>
                            <Form.TextSmall>
                            Insert your Username
                            </Form.TextSmall>           
                        <Form.Input
                            type="text"
                            placeholder="Username"
                            value={alias}
                            onChange={({ target }) => setAlias(target.value)} />
                        <Form.TextSmall>
                            Insert your email
                        </Form.TextSmall>           
                        <Form.Input
                            type="email"
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
                        <Form.Submit disabled={isInvalid} type="submit">
                            Submit
                        </Form.Submit>
                    </Form.Base>
                    <Form.Break />
                    <Form.Text>
                        Already have an account? <Form.Link to="/">Sign in!</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you are not a bot.
                    </Form.TextSmall>
        </Form>
    )
}