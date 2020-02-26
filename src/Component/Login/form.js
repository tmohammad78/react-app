import React, { Fragment, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { Redirect, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { validation } from '../../helper/validation';
import { Button } from '../Buttons/Button';
import { register } from 'services/auth/action';
import Input from '../Input';

const FormLogin = props => {
  const dispatch = useDispatch();
  const logged = useSelector(state => state.auth.logged);
  useEffect(() => {
    logged ? <Redirect to='/' /> : '';
  }, [logged]);
  const InputForm = ({ field, className, meta, form: { touched, errors }, ...props }) => {
    return (
      <Fragment>
        <div className=''>
          <Input {...field} {...props} />
          {errors[field.name] && <div className='errorMessage'>{errors[field.name]}</div>}
        </div>
      </Fragment>
    );
  };

  const submitForm = values => {
    dispatch(register(values));
  };

  return (
    <Formik
      initialValues={{ email: '', phonenumber: '', password: '' }}
      validationSchema={validation}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting, values }) => (
        <Form className='form'>
          <Field name='email' type='email' label='Email' component={InputForm} />
          <Field name='password' type='text' label='password' component={InputForm} />
          <Field
            name='phonenumber'
            autocompelete={true}
            type='text'
            label='Mobile'
            component={InputForm}
          />
          <Button
            type='submit'
            style={{
              position: 'relative',
              width: '100%',
              height: 45
            }}
            // onClick={test}
            onClick={() => submitForm(values)}
            disabled={isSubmitting}
          >
            <i className='fo fo-angle-left' />
            <span>ثبت</span>
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormLogin;
