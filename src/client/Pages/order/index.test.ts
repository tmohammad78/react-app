import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";

// unit testing : its for that whast code suppose to be 
// and it check's a simple component 
test('is for testning', ()=> {
	console.log('true');
})

test('plus two with three is five ' , ()=>{
	expect(2+3).toBe(5);
})