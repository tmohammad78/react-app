import * as React from 'react';
import { Button } from './Button';
// import ReactDom, { render } from 'react-dom';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { createRenderer } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';

test('render test ', () => {
	const props = { bgcolor: 'red', color: 'white' };
	// ReactDom.render(<Button />, div);
	const { unmount, container, getByText } = render(<Button {...props} >Click</Button>);
	console.log(container);
	expect(getByText('Click')).toBeInTheDocument();
	unmount();
	expect(getByText('Click')).not.toBeInTheDocument();
	// expect(root.props).toEqual({ ...props, primary: true });
	// const tree = component.toJSON();
	// expect(tree).toMatchSnapshot();
	// const div = document.createElement('div');
	// console.log(div.innerHTML);
	// expect(div.querySelector('button')).toHaveAttribute('class');

});
