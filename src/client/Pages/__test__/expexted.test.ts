import React from 'react';
// import { MenuTab } from '../order/style';
// import TabBar from '../order/tabBar/index';
// import { mount } from "@testing-library/react";

test('to be same object', () => {
	expect({ id: '1' }).toBe({ id: '1' })
	expect({}).not.toBe({})
})


test('toEqual', () => {
	const arr1 = { a: 1, b: 2 }
	const arr2 = { a: 1, b: 2 }
	expect(arr1).toEqual(arr2)
})

test('to match object', () => {
	const arr1 = { a: 1, b: 2, c: 3 }
	const arr2 = { a: 1, b: 2 }
	expect(arr1).toMatchObject(arr2)
})
// make one assetion in test because if there is a bug you can see it better

test('schema', () => {
	const obj = {
		day: 18,
		name: 'mohammad',
		meta: {
			1: 's'
		}
	}

	const schema = {
		day: expect.any(Number),
		name: expect.any(String),
		meta: { 1: expect.stringContaining('s') }
	}
	expect(obj).toEqual(schema);
})

test('mock function', () => {
	const myFn = jest.fn();
	expect(myFn).toHaveBeenCalledTimes(0)
	myFn();
	expect(myFn).toHaveBeenCalledTimes(1)
})