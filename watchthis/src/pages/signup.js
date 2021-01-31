import { FormContainer } from "../containers/form";
import { FooterContainer } from "../containers/footer";
import {Background} from "../components";
import { Footer, Form } from "../components";

export function Signup() {
    return(
        <>
            <Background>
                <Form.Wrapper>
                    <FormContainer/>
                </Form.Wrapper>         
            </Background>
        </>
    )
};