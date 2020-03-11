import * as React from "react";
import * as ReactDOM from 'react-dom';
import Root from './Root';
import Routs from './routes';
// import * as serviceWorker from '../assets/serviceWorker';
import './styles/main.scss';

ReactDOM.render(
	<Root>
		<Routs />
	</Root>,
	document.getElementById('root') as HTMLElement
);

// serviceWorker.register();
// 
// const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
// renderMethod(
//   <Root>
//     <Routs />
//   </Root>,
//   document.getElementById('root')
// );
