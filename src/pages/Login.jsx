import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { URL_API } from '../helper/url';
import { useDispatch, useSelector } from 'react-redux';
import {
  toastError,
  toastInfo,
  toastSuccess,
} from '../redux/actions/toastActions';
import Logo from '../assets/img/logo.png';

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory()

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    var data = {
      userName: email,
      password: password,
    };
    axios
      .post(`${URL_API}/users/login`, data)
      .then((res) => {
        // console.log('Res1', res.data.data)
        dispatch(toastInfo('Please wait getting user data...'));
        
        setTimeout(() => {
          dispatch({
            type: 'LOGIN',
            payload: {
              id: res.data.result.id,
              token: res.data.result.token,
              name: res.data.result.name,
              address: res.data.result.profile.name,
              profilePhoto: res.data.result.profile.profilePhoto,
              coverPhoto: res.data.result.profile.profilePhoto,
              address: res.data.result.profile.address,
              email: res.data.result.email,
            },
          });
          localStorage.setItem('userid', res.data.result.id);
          localStorage.setItem('token', res.data.result.token);
          window.location = '/homepage';
        }, 2000);

        
      })
      .catch((err) => {
        dispatch(toastError(`${err.response.data.message}`));
        setIsLoading(false);
      });
  }

  if (isLoading) {
    return (
      <>
        <div className="loader"></div>
      </>
    );
  }

  return (
    <>
      <div className="port-background">
        <div className="port-main">
          <div className="port-main-header">
            <div className="port-main-header-logo">
              <img src={Logo} alt="portlogo" />
            </div>
            <div className="port-main-header-link">
              Don't have account? <Link to="/register">Signup</Link>
            </div>
          </div>
          <div className="port-text">Login</div>
          <div className="user-form">
            <Form onSubmit={handleSubmit}>
              <Form.Group size="lg" controlId="email">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  autoFocus
                  className="custom-form-port"
                  type="text"
                  value={email}
                  placeholder="e.g. Diora"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="custom-form-port"
                  type="password"
                  value={password}
                  placeholder="********"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button block size="lg" type="submit">
                Login
              </Button>
            </Form>
          </div>
          <div className="port-main-footer-login">
            <Link to="/">Cancel and back to website</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
