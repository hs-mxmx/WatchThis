import { FormContainer } from "../containers/form";
import {Background} from "../components";
import { Form } from "../components";

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