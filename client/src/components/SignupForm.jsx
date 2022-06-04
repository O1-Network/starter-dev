import {
  FormContainer,
  FormBox,
  FormStyles,
  FormTitle,
  FormList,
  ListItem,
  Input,
  ItemLabel,
  ErrorBox,
  SubmitButton
} from './FormStyles';

const Signup = () => {
  return (
    <FormContainer>
      <FormBox>
      <FormStyles>
        <FormTitle> Starter Business Sign-up </FormTitle>
        <FormList>
          <ListItem>
            <ItemLabel htmlFor="username">Email Address</ItemLabel>
          </ListItem>
          <ListItem>      
            <Input type="text" id="email address" required />
          </ListItem> 
          <ListItem> 
            <ItemLabel htmlFor="password">Password</ItemLabel>
          </ListItem>
          <ListItem>      
            <Input type="password" id="password" required />
          </ListItem>
          <ListItem> 
            <ItemLabel htmlFor="password">Retype Password</ItemLabel>
          </ListItem>
          <ListItem>      
            <Input type="password" id="re-password" required />
          </ListItem>
        </FormList>
        <ErrorBox> Email, Username or Password rules and errors. . </ErrorBox>
        <SubmitButton>Sign Up</SubmitButton>
      </FormStyles>
      </FormBox>
    </FormContainer>
  );
}

export default Signup;