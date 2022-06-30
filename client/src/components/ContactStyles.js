import styled, { keyframes } from 'styled-components'

const fadeAnimation = keyframes`
 0% { opacity : 0; transform: translateY(20px); }
 100% { opacity : 1; transform: translateY(0px);}
`

export const ContactContainer = styled.div`
  // margin: 0 20%;
  width: 60%;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  height:600px;
  margin:auto;
  @media(max-width:720px){
    width:90%;
  }
`;
export const ContactCard = styled.div`

height: 530px;
width:40%;
background-image: linear-gradient(#B9E8F7, #7483c3);
border-top-left-radius: 5px;
border-bottom-left-radius: 5px;
padding 10px;
display: flex;
justify-content: center;
align-items: center;
color: white;
@media (max-width:720px){
  display:none;
}
`;
export const FormContainer = styled.div`
border-top-left-radius: 0px;
border-bottom-left-radius: 0px;
  background-color: #f2f2f2;
  padding: 30px;
  animation-name: ${fadeAnimation};
  animation-duration: 1s;
  animation-iteration-count: easy-in;
  margin: auto;
  width:80%;
 
  
`;

export const TextInput = styled.input`
  width: 100%;
  padding: 12px;
  border: none;
  outline: none;
  border-bottom: 3px solid #ccc;
  box-sizing: border-box;
  margin-top: 20px;
  margin-bottom: 16px;
  resize: vertical;
  &:focus {
    border-bottom-color: rgba(255,0,0,0.3);
  }
 
`;

// export const SelectInput = styled.select`
//   width: 100%;
//   padding: 12px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   box-sizing: border-box;
//   margin-top: 6px;
//   margin-bottom: 16px;
//   resize: vertical;
// `;

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
  padding: 14px 25px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width:60%;
  display:block;
  margin:auto;
  font-size:18px;
  &:hover {
    backgr20und-color: #45a049;
  }
`
export const SubmitContainer=styled.div`

width:100%;
display:flex;
justify-content:center;

`





export const FieldArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  
  &> input:focus ~ span, 
  &> input:placeholder-shown ~ span {
    // font-size: 14px;
    position: absolute;
    top: -12px;
    left: 14px;
    // transform: scale(1.2);
    color: black;
    font-style: bold;
  }

  &> input ~ span {
    font-size: 14px;
    position: absolute;
    // top: 5px;
    left: 10px;
    // transform: translateY(-50%);
    color: gray;
    transition: all 0.5s;
  }

 
`

export const NameField = styled.div `
  flex-shrink: 1;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
  @media(max-width: 720px) {
    flex-direction: column;
  }
`


