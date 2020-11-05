import React, { useState } from 'react';
import { InputStyle, ParentInput, IconName } from './style';
interface DefaultInput {
	type?: string | undefined;
	label?: string | undefined;
	icon?: string | undefined;
	id?: string | undefined;
	value?: string | null | undefined;
	onChange: ((e: React.FormEvent<EventTarget>) => void);
	onBlur?: () => void;
	onFocus?: () => void;
	className?: string | undefined;
	name?: string | undefined;
}
const Input = ({
	type,
	label,
	icon,
	onChange,
	id,
	value,
	onBlur,
	onFocus,
	className,
	name,
	...props
}: DefaultInput) => {
	const [focus, setFocus] = useState(false);

	const handleFocus = () => {
		setFocus(true);
	};
	const handleBlur = () => {
		if (value) {
			setFocus(true);
		} else {
			setFocus(false);
		}
	};

	return (
		<ParentInput className={`${focus ? 'focus' : null}`}>
			{icon ? (
				<IconName>
					<i className={`fo fo-${icon}`} />
				</IconName>
			) : null}
			<InputStyle
				value={value || ''}
				type={type}
				onChange={onChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
				name={name ? name : ''}
				id={id}
				{...props}
			/>
			<label className='input-test' htmlFor={id}>
				{label}
			</label>
		</ParentInput>
	);
};
export default Input;
