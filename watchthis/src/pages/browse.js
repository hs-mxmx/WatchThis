import { Form } from "../components";
import React, {useState, useContext, useEffect} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { FaceContainer } from "../containers/face";
import { FooterContainer } from "../containers/footer";
import {Background} from "../components";

export function Browse() {
    const location = useLocation();
    const history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [userName, setUserName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    const userdata = location.state.detail
    
    useEffect(() => {
        setEmailAddress(userdata['email']);
        setPassword(userdata['password']);
        setMessage(userdata['message']);
        console.log(userdata)
    }, [location]);
    
    return(
        <>
            <Background>
                <FaceContainer/>
                <Form>
                    {message && <Form.Error>{message}</Form.Error>}
                    <Form.Title>{emailAddress}</Form.Title>
                    <Form.Title>{password}</Form.Title>           
                </Form>
            </Background>
            <FooterContainer/>
        </>
    )
};