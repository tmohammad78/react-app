import React, { Fragment } from 'react';
import { Formik, Form, Field } from 'formik';
import { validation } from '../../Helper/validation';
import { Button } from '../Buttons/Button';
import Input from '../Input/index';
import { MyFormValues } from '@Types/index';
import './style.scss';


interface Props {
	submitAction: (values: MyFormValues) => void
}

interface IInputForm {
	[x: string]: any;
	field: any;
	className: string;
	meta: string;
	form: {
		touched: boolean;
		errors: string;
	};
}
const FormLogin = ({ submitAction }: Props) => {
	const initialValues: MyFormValues = { email: '', phonenumber: '', password: '' };

	const InputForm = ({ field, className, meta, form: { touched, errors }, ...props }: IInputForm) => {
		return (
			<Fragment>
				<div className='inputPack  clearfix'>
					<Input {...field} {...props} />
					{errors[field.name] && <div className='errorMessage'>{errors[field.name]}</div>}
				</div>
			</Fragment>
		);
	};

	const submitForm = (values: MyFormValues) => {
		submitAction(values);
	};


	return (
		<Formik
			initialValues={initialValues}
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
						placeholder='09375050156'
					/>
					<Button
						type='submit'
						// onClick={test}
						className='registerBtn'
						onClick={() => submitForm(values)}
						disabled={isSubmitting}
					>
						<i className='fo fo-angle-left' />
						<span>دریافت کد</span>
					</Button>
				</Form>
			)}
		</Formik>
	);
};

export default FormLogin;
