import React, { useState } from 'react';
import  Form  from './form';
import { Link } from 'react-router-dom'; 
import Graph from './components/Graph';

function SignIn(props) {
  // const [emailAddress, setEmailAddress] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || username === ``;

  const submitHandler = (e) => {
    let user = { username: username, password: password };
    e.preventDefault();
    props.signInHandler(user);
    // props.loggedIn = true;
  };

  return (
    <>
      
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={submitHandler} method='POST' loggedIn={props.loggedIn}>
            <Form.Input
              placeholder='username'
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />
            <Form.Input
              type='password'
              placeholder='Password'
              autoComplete='off'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            {/* <Link to='/graph'> */}
              <Form.Submit disabled={isInvalid} type='submit'>
                Sign In
              </Form.Submit>
            {/* </Link> */}
          </Form.Base>
        </Form>
    </>
  );
}

export default SignIn;