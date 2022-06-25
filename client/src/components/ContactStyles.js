import styled, { keyframes } from 'styled-components'

const fadeAnimation = keyframes`
 0% { opacity : 0; transform: translateY(20px); }
 100% { opacity : 1; transform: translateY(0px);}
`

export const ContactContainer = styled.div`
  margin: 0 20%;
  width: 40%;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  height:600px;
`;
export const ContactCard = styled.div`
height:600px;

width:100px;
background:red;
`;
export const FormContainer = styled.div`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  animation-name: ${fadeAnimation};
  animation-duration: 1s;
  animation-iteration-count: easy-in;
`;

export const TextInput = styled.input`
  width: 100%;
  padding: 12px;
  border: none;
  outline: none;
  border-bottom: 3px solid #ccc;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  &:focus {
    border-bottom-color: #BA1200;
  }

`;

export const SelectInput = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
`;

export const TextAreaInput = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: none;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }

`

export const SubmitButton = styled.input`
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`


export const FieldArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction : column;
  align-items: flex-start;
  position: relative;
  
  &> input:focus ~ span, 
  &> input:placeholder-shown ~ span {
    font-size: 14px;
    position: absolute;
    top: -5px;
    left: 0px;
    transform: translateY(-50%);
    color: black;
    font-style: bold;
  }

  &> input ~ span {
    font-size: 12px;
    position: absolute;
    top: 40%;
    left: 10px;
    transform: translateY(-50%);
    color: gray;
    transition: all 0.5s;
  }

 
`

export const NameField = styled.div `
  flex-shrink: 1;
  width : 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`


