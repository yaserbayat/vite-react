import React, { FormEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './style.less';

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
    <form onSubmit={handleSubmit} className='login-form'>
      <input type="text" name="username" />
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
