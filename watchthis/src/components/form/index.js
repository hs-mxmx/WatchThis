import React from 'react';
import { Container, Base, Error, Title, Text, 
    TextSmall, Link, Input, Submit, Break, Wrapper, 
    MailWrapper, Select, SelectOption } from './styles/formStyle';

export default function Form({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Form.Base = function FormBase({ children, ...restProps}){
    return <Base {...restProps}>{children}</Base>;
};

Form.Error = function FormError({ children, ...restProps}){
    return <Error {...restProps}>{children}</Error>;
};

Form.Title = function FormTitle({ children, ...restProps}){
    return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps}){
    return <Text {...restProps}>{children}</Text>;
};

Form.TextSmall = function FormTextSmall({ children, ...restProps}){
    return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Link = function FormLink({ children, ...restProps}){
    return <Link {...restProps}>{children}</Link>;
};

Form.Text = function FormText({ children, ...restProps}){
    return <Text {...restProps}>{children}</Text>;
};

Form.Input = function FormInput({ children, ...restProps}){
    return <Input {...restProps}>{children}</Input>;
};

Form.Submit = function FormSubmit({ children, ...restProps}){
    return <Submit {...restProps}>{children}</Submit>;
};

Form.Break = function FormBreak({ children, ...restProps }) {
    return <Break {...restProps}>{children}</Break>;
};

Form.Wrapper = function FormWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>;
};

Form.MailWrapper = function FormMailWrapper({ children, ...restProps }) {
    return <MailWrapper {...restProps}>{children}</MailWrapper>;
};

Form.Select = function FormSelect({ children, ...restProps }) {
    return <Select {...restProps}>{children}</Select>;
};

Form.SelectOption = function FormSelectOption({ children, ...restProps }) {
    return <SelectOption {...restProps}>{children}</SelectOption>;
};