import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label } from 'reactstrap';
import { setCurrentUser, selectCurrentUser } from './userSlice'; // Adjust the import path as needed
import defaultAvatar from '../../app/assets/img/unicorn.png'; // Import your default avatar image

const UserLoginForm = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleLogin = (values) => {
    const newUser = {
      id: Date.now(),
      avatar: defaultAvatar,
      username: values.username,
      password: values.password,
    };

    dispatch(setCurrentUser(newUser));
    setLoginModalOpen(false);
  };

  return (
    <>
      <span className='navbar-text ml-auto'>
        {currentUser ? (
          <div style={{ width: '4rem', height: '4rem' }}>
            <img
              src={currentUser.avatar}
              alt={'user'}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        ) : (
          <Button
            outline
            onClick={() => setLoginModalOpen(true)}
            style={{ color: 'white', border: '1px solid white' }}
          >
            <i className='fa fa-sign-in fa-lg' /> Login
          </Button>
        )}
      </span>
      <Modal isOpen={loginModalOpen}>
        <ModalHeader toggle={() => setLoginModalOpen(false)}>Login</ModalHeader>
        <ModalBody>
          <Formik initialValues={{ username: '', password: '' }} onSubmit={handleLogin}>
            <Form>
              <FormGroup>
                <Label htmlFor='username'>Username</Label>
                <Field
                  type='text'
                  id='username'
                  name='username'
                  placeholder='Username'
                  className='form-control'
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='password'>Password</Label>
                <Field
                  type='password'
                  id='password'
                  name='password'
                  placeholder='Password'
                  className='form-control'
                />
              </FormGroup>
              <Button type='submit' color='primary'>
                Login
              </Button>
            </Form>
          </Formik>
        </ModalBody>
      </Modal>
    </>
  );
};

export default UserLoginForm;
