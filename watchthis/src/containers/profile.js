import React from 'react';
import BackgroundContainer from '../components/background';
import { HeaderContainer } from '../containers/header';
import { FormContainer } from "../containers/form";
import {Background} from "../components";
import { Form } from "../components";




export function ProfileContainer() {

    

    

    return (<> 
        <HeaderContainer/>   
            <BackgroundContainer>
                <Form.MailWrapper>
                        <Form.Title> <i class="fa fa-user" aria-hidden="true"></i> Info Account </Form.Title>

                        <Form.Base >
                            <Form.Input 
                                    class="nombre"
                                    type="text"
                                    
                                />
                            <Form.Input
                                    type="text"
                                    placeholder="Nombre de usuario"
                                />
                                <Form.Input
                                    type="email"
                                    placeholder="Email address"    
                                />
                                <Form.Input
                                    type="text"
                                    placeholder="Password"
                                />
                                
                        </Form.Base> 
                    </Form.MailWrapper>
            </BackgroundContainer>
            
        </>
    )
}