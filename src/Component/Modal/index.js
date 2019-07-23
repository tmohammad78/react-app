import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Modal = props => {
  const { open, closeBtn, closeOnOverlay, closeOnEsc, onClose, children } = props;

  if (!open) return null;

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
      onClose();
    }
  };

  const handleKeyDown = e => {
    if (closeBtn || e.keyCode === 27) {
      onClose();
    }
  };

  const handleCloseBtn = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className='modal-inner'>
      <div className='modal-box'>
        <header>
          {closeBtn ? (
            <button type='button' className='anchor-close' onClick={handleCloseBtn}>
              <span>
                <i className='fo fo-cross' />
              </span>
            </button>
          ) : null}
        </header>
        {children}
      </div>
      <div
        className='lightBox'
        tabIndex='0'
        role='button'
        onClick={closeOnOverlay ? handleCloseBtn : null}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

Modal.defaultProps = {
  closeBtn: true,
  closeOnOverlay: true,
  closeOnEsc: true
};

Modal.propTypes = {
  children: PropTypes.string,
  open: PropTypes.bool,
  closeBtn: PropTypes.bool,
  closeOnOverlay: PropTypes.bool,
  closeOnEsc: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};

export default Modal;
