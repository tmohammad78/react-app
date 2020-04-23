import { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface Props {
	children: React.ReactNode
}

const Portal = ({ children }: Props) => {
	const modalRoot: HTMLElement | null = document.getElementById('modal-root');
	const el = document.createElement('div');

	useEffect(() => {
		modalRoot ? modalRoot.appendChild(el) : null;
		return function cleanup() {
			modalRoot ? modalRoot.removeChild(el) : null;
		};
	});

	return ReactDOM.createPortal(children, el);
};

export default Portal;
