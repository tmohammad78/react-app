import React, { Fragment } from 'react';
import { Formik, Form, Field } from 'formik';
import { validation } from '../../helper/validation';
import { Button } from '../Buttons/Button';
import Input from '../Input';
import './style.scss';

const FormLogin = props => {
  const InputForm = ({ field, className, meta, form: { touched, errors }, ...props }) => {
    return (
      <Fragment>
        <div className='inputPack  clearfix'>
          <Input {...field} {...props} />
          {errors[field.name] && <div className='errorMessage'>{errors[field.name]}</div>}
        </div>
      </Fragment>
    );
  };

  const submitForm = values => {
    props.submitAction(values);
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
          <Field name='password' type='password' label='password' component={InputForm} />
          <Field
            name='phonenumber'
            autocompelete={true}
            type='text'
            label='Mobile'
            component={InputForm}
          />
          <Button
            type='submit'
            // onClick={test}
            className='registerBtn'
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
