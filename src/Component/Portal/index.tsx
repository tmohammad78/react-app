import { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface Props {
	children: React.ReactNode
}

const Portal = ({ children }: Props) => {
	const modalRoot: (HTMLElement | null) = document.getElementById('modal-root');
	const el = document.createElement('div');

	useEffect(() => {
		modalRoot.appendChild(el);
		return function cleanup() {
			modalRoot.removeChild(el);
		};
	});

	return ReactDOM.createPortal(children, el);
};

export default Portal;
