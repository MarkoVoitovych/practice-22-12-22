import React, { useEffect } from 'react';

function Modal({ url, onClose }) {
  useEffect(() => {
    document.addEventListener('keydown', onClose);
    return () => {
      document.removeEventListener('keydown', onClose);
    };
  }, [onClose]);

  return (
    <div>
      <img src={url} alt="pokemon" width="640" />
    </div>
  );
}

export default Modal;
