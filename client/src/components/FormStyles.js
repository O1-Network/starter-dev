import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #031927;
  padding: 50px;
  display: flex;
  align-items: center;
`;

export const FormBox = styled.div`
  width: 560px;
  height: 620px;
  /* Starter - Tertiary 3 */
  background: #2260A1;
  border: 1px solid #000000;
  border-radius: 25px;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FormStyles = styled.form`
  margin: auto 0;
  padding: 20px;
  margin: auto 0;
  padding: 20px;
  /* box-shadow: -1px -1px 3px rgba(255, 230, 230, 0.5), -3px -3px 5px rgba(255, 230, 230, 0.5), 3px 3px 5px rgba(51, 0, 0, 0.3), 1px 1px 3px rgba(51, 0, 0, 0.3); */
  border-radius: 5px;
  margin-right:auto;
  margin-left:auto;
`;

export const FormTitle = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400; 

  text-align: center;
  font-size: 30px;
  font-weight: 100;
  margin-bottom: 30px;
  margin-top: 15px  ;
  color: #C9F0FF;
`;

export const FormList = styled.ul`
  margin: 0;
  padding: 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  /* Starter - Quad - 1 */
  color: #C9F0FF; 
`;

export const ListItem = styled.li`
  display: grid;
  align-items: center;
  margin: 10px;
`;

export const ItemLabel = styled.label`
  text-align: left;
  padding-bottom: 2px;
`;

export const Input = styled.input`
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;

  &:hover {
    border: 1px solid #aaf;
  }
`;

export const ErrorBox = styled.div`
  background: #2D7CD1;
  border: 1px dashed #F2FCFF;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  padding-top: 7%;
  height: 100px;
  font-family: 'Inter';
  color: #F2FCFF;
  width: 80%;
  margin: 30px auto;
  text-align: center;
`;

export const SubmitButton = styled.button`
  background-color: #073959;
  color: #F2FCFF;
  border-radius: 10px;
  width: 180px;
  height: 50px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`;

export const ForgotPassword = styled.a`
  color: rgb(166, 217, 251);
  font-size: 1.4rem;
  padding-left: 50px;
  margin-left:auto;
  margin-right:auto;
  margin-top: 35px;
  text-decoration: underline;
`;

