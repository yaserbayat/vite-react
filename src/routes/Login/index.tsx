import React, { FormEvent } from 'react';
import {Button, Form} from "react-bootstrap";
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const returnUrl = location.search.replace('?returnUrl=', '');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { elements } = e.target as HTMLFormElement;
    const username = elements.namedItem('username') as HTMLInputElement;
    const password = elements.namedItem('password') as HTMLInputElement;
    let isLogeIin = true;
    [...elements].forEach(elm => {
      if (elm.tagName === 'INPUT') {
        const input = elm as HTMLInputElement;
        if (!input.value) isLogeIin = false;
      }
    });
    if (isLogeIin) {
      localStorage.accessToken = `${username.value}${password.value}`
        .split('')
        .map(item => item + '$%^')
        .join('');
      navigate(returnUrl || '/');
    }
  };
  return (
    <Form onSubmit={handleSubmit} className='col-12 col-sm-6 col-md-3 mx-auto vh-100 d-flex flex-column justify-content-center'>
      <h1 className='text-center'>Welcome</h1>
      <Form.Group className='mb-3'>
        <Form.Control type="text" name='username' placeholder="Enter your username" />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Control type="password" name="password" placeholder="Enter your password" />
      </Form.Group>
      <Button type="submit" className=''>Login</Button>
    </Form>
  );
};

export default Login;
