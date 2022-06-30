import {
  ContactContainer,
  FormContainer,
  TextInput,
  SelectInput,
  TextAreaInput,
  SubmitButton,
  NameField,
  FieldArea,
  ContactCard,
  SubmitContainer
} from './ContactStyles';
import React, {useState}  from 'react'

/*
side card  alllison  

label issue /submit button /margin/padding configaration  : David
  
resposive    omaran


*/



/*
*idea: make the field horizontal          saxx // done
*idea: put first and last name at the same line // done
*idea: add introduction animation      saxx // done 
*idea :prevent the resizable textarea // done
 


omaran 
*idea :add some missing fields like email
*idea :remove additonal unneccerly fields   countries
*idea :font stlying
*idea :padding and margins
*idea :conver the form to React --implement onChange track value 



angie-La
*idea :add side card                  
*idea: add subject 
*idea :focus effect          


them:
  background-color:  steelblue;
  form-background: rgba(0, 0, 0, 0.4);
  text-color:white;
  font:arial

  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300&display=swap" rel="stylesheet">




<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Spectral:wght@200&display=swap" rel="stylesheet">

<style>
@import url('https://fonts.googleapis.com/css2?family=Spectral:wght@200&display=swap');
</style>


*/
const Contact = () => {
  const [firstname,setFirstName] = useState("");
  const [lastname,setLastName]  = useState("");
  const [subject, setSubject]=useState("");
  const [email,setEmail] = useState("");
      

  
  return (
      <ContactContainer>


      <ContactCard>
         
      </ContactCard>

      

          <FormContainer>
     
            <form action="action_page.php" >
             <NameField>
                <FieldArea>
                <TextInput type="text" id="fname" name="firstname" onChange={()=>{setFirstName(this.target.value)}}/>
                  <span> First Name </span>
                </FieldArea>
                <FieldArea>
                  <TextInput type="text" id="lname" name="lastname" onChange={()=>{setLastName(this.target.value)}} />
                  <span>Last Name</span>
                </FieldArea>
             </NameField>
                 {/* <label htmlFor="country">Country</label>
                <SelectInput id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </SelectInput> */}

              <FieldArea>
                <TextInput type="email" id="email" name="email" onChange={()=>{setEmail(this.target.value)}}></TextInput>
                <span>Email</span>
              </FieldArea>

              <FieldArea>
                <TextInput type="text" id="title" name="title" ></TextInput>
                <span>Title</span>
              </FieldArea>
          
              <label htmlFor="subject">Subject</label>
              <TextAreaInput id="subject" name="subject" rows={9} placeholder="Write something.." onChange={()=>{setSubject(this.target.value)}}></TextAreaInput>
              <SubmitContainer>
              <SubmitButton type="submit" value="Submit" />
              </SubmitContainer>
            </form>
            
            
          </FormContainer> 
      </ContactContainer>
    );
}

export default Contact;