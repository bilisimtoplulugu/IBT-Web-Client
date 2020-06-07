import React, {useState, useEffect} from 'react';
import {Toast} from 'react-bootstrap';

function ToastComponent({title, body, showState}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(showState);
  }, [showState]);

  return (
    <Toast
      style={{
        position: 'fixed',
        zIndex: 5,
        top: 20,
        right: 20,
      }}
      onClose={() => setShow(false)}
      show={show}
      delay={2000}
      autohide
    >
      <Toast.Header
        style={{
          background: '#0097e4',
          color: 'white',
        }}
      >
        <strong className="mr-auto">{title}!</strong>
      </Toast.Header>
      <Toast.Body>{body}</Toast.Body>
    </Toast>
  );
}

export default ToastComponent;
