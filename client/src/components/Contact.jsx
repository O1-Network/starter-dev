import {
  ContactContainer,
  FormContainer,
  TextInput,
  SelectInput,
  TextAreaInput,
  SubmitButton
} from './ContactStyles';

const Contact = () => {
  return (
      <ContactContainer>
        <h1>We would love to hear from you. Please get in touch and reach one of our application specialists. </h1>
          <FormContainer>
            <form action="action_page.php" >
          
              <label htmlFor="fname">First Name</label>
              <TextInput type="text" id="fname" name="firstname" placeholder="Your name.." />
          
              <label htmlFor="lname">Last Name</label>
              <TextInput type="text" id="lname" name="lastname" placeholder="Your last name.." />
          
              <label htmlFor="country">Country</label>
              <SelectInput id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </SelectInput>
          
              <label htmlFor="subject">Subject</label>
              <TextAreaInput id="subject" name="subject" placeholder="Write something.."></TextAreaInput>
          
              <SubmitButton type="submit" value="Submit" />
          
            </form>
          </FormContainer> 
      </ContactContainer>
    );
}

export default Contact;