import {
  FormContainer,
  FormBox,
  FormStyles,
  FormTitle,
  FormList,
  ListItem,
  ItemLabel,
  Input,
  ErrorBox,
  SubmitButton,
  ForgotPassword
} from './FormStyles';

const Login = () => {
  return (
    <FormContainer>
      <FormBox>
        <FormStyles>
          <FormTitle>Login</FormTitle>
          <FormList>
              <ListItem>
                  <ItemLabel htmlFor='login_email'>Email Address</ItemLabel>
              </ListItem>
              <ListItem>
                  <Input type="text" id="login_email"required />
              </ListItem>
              <ListItem>
                  <ItemLabel htmlFor='login_password'>Password</ItemLabel>
              </ListItem>
              <ListItem>
                  <Input type="password" id="login_password" required />
              </ListItem>
          </FormList>
          <ErrorBox>Email, username, rules placeholder</ErrorBox>
            <SubmitButton>Login</SubmitButton>
            <ForgotPassword href='#'>Forgot Password?</ForgotPassword>
        </FormStyles>
      </FormBox>
    </FormContainer>
  );
}

export default Login;