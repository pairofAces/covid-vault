import React, { useState } from 'react';
import  Form  from './form';

function SignUp(props) {
  const [username, setUsername] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = username === '' || password === '' || emailAddress === '';

  const submitHandler = (e) => {
    let user = { username: username, password: password, email: emailAddress };
    e.preventDefault();
    props.signUpHandler(user);
  };

  return (
    <>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={submitHandler} method='POST'>
            <Form.Input
              placeholder='Username'
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />
            <Form.Input
              placeholder='Email Address'
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type='password'
              placeholder='Password'
              value={password}
              autoComplete='off'
              onChange={({ target }) => setPassword(target.value)}
            />

            <Form.Submit disabled={isInvalid} type='submit'>
              Sign Up
            </Form.Submit>

            <Form.Text>
              Already a user? <Form.Link to='/login'>Sign in now.</Form.Link>
            </Form.Text>
          </Form.Base>
        </Form>
    </>
  );
}

export default SignUp;