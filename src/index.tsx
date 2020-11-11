import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import Routs from './routes';
import registerServiceWorker from './service-worker/serviceWorker';
import './styles/main.scss';

ReactDOM.render(
	<Root>
		<Routs />
	</Root>
	,
	document.getElementById('root')
);
registerServiceWorker();

