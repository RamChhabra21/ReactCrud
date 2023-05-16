import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Create() {
  let history = useHistory();
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const sendDataToAPI = () => {
    axios.post(`https://6430fed5d4518cfb0e58b606.mockapi.io/crud`, {
      firstName,
      email,
      contact
    }).then(() => {
      history.push('/read')
    })
  }
  return (
    <div>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input name="fname" 
          onChange={(e) => setFirstName(e.target.value)} 
          placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>E-mail</label>
          <input 
          name="email" 
          placeholder='E-mail' 
          onChange={(e) => setEmail(e.target.value)} 
          />
        </Form.Field>
        <Form.Field>
          <label>Contact</label>
          <input 
          name="contact"
          placeholder='Contact' 
          onChange={(e) => setContact(e.target.value)} 
          />
        </Form.Field>
        <Button type='submit' onClick={sendDataToAPI}>Submit</Button>
      </Form>
    </div>
  )
}
