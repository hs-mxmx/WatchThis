import { FormContainer } from "../containers/form";
import { FaceContainer } from "../containers/face";
import { FooterContainer } from "../containers/footer";
import {Background} from "../components";

export function Home() {
    return(
        <>
            <Background>
                <FaceContainer/>
                <FormContainer/>
            </Background>
            <FooterContainer/>
        </>
    )
};