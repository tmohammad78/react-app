import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Portal = (props) => {
  const modalRoot = document.getElementById('modal-root');
  const el = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(el);
    return function cleanup() {
      modalRoot.removeChild(el);
    };
  });

  return ReactDOM.createPortal(props.children, el);
};

export default Portal;
