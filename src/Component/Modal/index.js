import React, { useEffect, useMemo } from 'react';
import './style.scss';

const Modal = ({ Route, show, onClose, closeOnEsc, history, style, children, ...props }) => {
  useEffect(() => {
    if (closeOnEsc) {
      document.addEventListener('keydown', handleEscKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleEscKeyDown);
    };
  });

  const handleEscKeyDown = e => {
    if (onClose || closeOnEsc || e.keyCode === 27) {
      onClose();
    }
  };

  const mainTemplate = (
    <div className='parent-modal'>
      <div className='modalBox' style={style}>
        <div className='wrapper modal'>
          <div className='ancBox'>
            <div className='img' onClick={handleEscKeyDown}>
              <div className='fo fo-cross' />
            </div>
          </div>
          <div className='operation'>{children}</div>
        </div>
      </div>
      <div className='lightBox' onClick={handleEscKeyDown}></div>
    </div>
  );
  return <div>{show ? mainTemplate : null}</div>;
};
export default Modal;
