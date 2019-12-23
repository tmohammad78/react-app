import React, { Fragment } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { validation } from '../../helper/validation';
import { Button } from '../Buttons/Button';
import { register } from 'services/auth/action';
import Input from '../Input';

const FormLogin = () => {
  const dispatch = useDispatch();
  const InputForm = ({ field, className, meta, form: { touched, errors }, ...props }) => {
    return (
      <Fragment>
        <Input {...field} {...props} />
        {errors[field.name] && <div className='error'>{errors[field.name]}</div>}
      </Fragment>
    );
  };

  const submitForm = values => {
    dispatch(register(values));
  };

  return (
    <div>
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
    </div>
  );
};

export default FormLogin;
