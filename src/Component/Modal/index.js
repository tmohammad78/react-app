import React, { useEffect, useMemo } from 'react';
import './style.scss';

const Modal = ({ Route, open, onClose, closeOnEsc, history, style, children, ...props }) => {
  useEffect(() => {
    if (closeOnEsc) {
      document.addEventListener('keydown', handleEscKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleEscKeyDown);
    };
  });

  const handleEscKeyDown = e => {
    if (onClose && closeOnEsc && e.keyCode === 27) {
      clodeModal();
    }
  };

  const mainTemplate = (
    <div className='parent-modal'>
      <div className='modalBox' style={style}>
        <div className='wrapper modal'>
          <div className='ancBox'>
            <div className='img' onClick={onClose}>
              <div className='fo fo-cross' />
            </div>
          </div>
          <div className='operation'>{children}</div>
        </div>
      </div>
      <div className='lightBox' onClick={onClose}></div>
    </div>
  );
  return <div>{open ? mainTemplate : null}</div>;
};
export default Modal;
