# Introduction


This is a sample Food Delivery App that I started before and I'm trying to improve it and implement server side 
rendering on it , unfortuntly this project is not compelete Now ,Because I want to add many good things in this
project , but I pushed a this app without bug in master branch , this is a SPA and  I created a cart and routing
like auth and favorite and ....  Now this app is using Firebase and I have plane to implement backend with 
Golang in future 😎


# Motivation


The main motivation for creating this app was for learning many frontend technology and improve code style and 
make a acceptable project for my CV . Now I'm trying to learn and implement server side rendering for it 



# Technology Stack

* [React](https://github.com/facebook/react)
* [Typescript](https://github.com/microsoft/TypeScript)
* [React Router](https://github.com/ReactTraining/react-router)
* [Redux](https://github.com/reduxjs/redux)
* [Redux Thunk](https://github.com/reduxjs/redux-thunk)
* [Sass](https://github.com/sass/sass)
* [Webpack 4](https://github.com/webpack/webpack)
* [Babel 7](https://github.com/babel/babel)
* [Styled component](https://github.com/styled-components/styled-components)
* [Jest](https://github.com/facebook/jest)
* [react Helmet](https://github.com/nfl/react-helmet)


# Why?

### motivation
In this Section I wanna to explain why this package and why Not others
The First things is about Why [Redux](https://github.com/reduxjs/redux) the main Reason that I not used Context (Hook React )
is I think if we have very state in React App like a Resturant site with many object of data it's easier we use Redux and 
I think Context is good when we want update our child component not a seprate file 
## Redux

### Asynce 
The solution is We should use Redux Thunk for be asynce foexample for data fetching 
in this Project I used Redux thunk but I want to change it to [redux saga](https://github.com/redux-saga/redux-saga)  , it's more powerful 
###Sample Code
In this sample code we are using HOF and we pass a function in a nother function (Redux Thunk)
```
export const fetchMenu = () => (dispatch,getState) =>{
	
	return dispatch({
		type:FETCHMENU
		payload:{
			Food
		}
	})
}
```

## Webpack
Be honstly  , With using Webpack you should have headache😁 , but the Good Reason for continue is that you learn alot of things 
and you learn what happend it building and serving
I seperate development and production in webpack and the common file that is all the things we do in both ,
and a main webpack.config in the root dir


# In Progress
- [ ] server side rendering


# To DO
- [ ] compelete Server side rendering
- [ ] Add Redux Saga
- [ ] Add SWR for cache
- [ ] Add Testing with Jest
- [ ] Add Tree shaking

![](sitelast.gif)
