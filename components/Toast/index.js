import React, { useMemo, useState } from 'react';
import cx from 'classnames';

//import './index.css';

const Toast = ({
  title,
  message,
  children,
  color = 'info',
  position = 'top-right',
  duration = 2000,
}) => {
  
  const [visible, setVisible] = useState(false);
  
  const onShow = () => {
    setVisible(true)
    
    if (duration > 0) {
      setTimeout(() => {
        setVisible(false)
      }, duration)
    }
  }
  
  const onHide = () => {
    setVisible(false)
  }
  
  const containerClass = useMemo(() => (
    cx('toastr-container', {
      'toastr-tr': position === 'top-right',
      'toastr-tl': position === 'top-left',
      'toastr-tc': position === 'top-center',
      'toastr-br': position === 'bottom-right',
      'toastr-bl': position === 'bottom-left',
      'toastr-bc': position === 'bottom-center',
      'toastr-hidden': !visible
    })
  ), [position, visible])
  
  const colorClass = useMemo(() => (
    cx('toastr-content', {
      'toastr-info': color === 'info',
      'toastr-success': color === 'success',
      'toastr-warning': color === 'warning',
      'toastr-error': color === 'error',
    })
  ), [color])
  
  return (
    <React.Fragment>
      <div className={containerClass}>
        <div className={colorClass}>
          <div className="toast-title">
            {title}
          </div>
          <div className="toast-message">
            {message}
          </div>
        </div>
      </div>
      {children({
        onShow,
        onHide,
        state: visible
      })}
      <style jsx>{`
      .toastr-container {
        position: fixed;
        z-index: 999999;
        pointer-events: none;
        opacity: 1;
        transition: opacity .5s ease-in;
    }
    
    .toastr-content {
        padding: 15px 15px 15px 50px;
        width: 300px;
        box-shadow: 0 0 12px #999999;
        overflow: hidden;
        border-radius: 3px;
        color: #FFFFFF;
        opacity: 0.9;
        font-size: 13px;
        line-height: 18px;
    }
    
    .toastr-info {
        background-color: #00CFE8;
    }
    
    .toastr-error {
        background-color: #EA5455;
    }
    
    .toastr-warning {
        background-color: #FF9F43;
    }
    
    .toastr-success {
        background-color: #28C76F;
    }
    
    .toastr-tr {
        right: 10px;
        top: 10px;
    }
    
    .toastr-tl {
        left: 10px;
        top: 10px;
    }
    
    .toastr-tc {
        transition: opacity 1s ease-in;
    }
    
    .toastr-br {
        right: 10px;
        bottom: 10px;
    }
    
    .toastr-bl {
        left: 10px;
        bottom: 10px;
    }
    
    .toastr-bc {
        width: 100%;
        bottom: 10px;
    }
    
    .toastr-tc>.toastr-content,
    .toastr-bc>.toastr-content {
        margin-left: auto;
        margin-right: auto;
    }
    
    .toast-title {
        font-weight: 700;
    }
    
    .toast-message {
        font-weight: 400;
    }
    
    .toastr-hidden {
        opacity: 0;
        transition: opacity .5s ease-in;
    }
      `}
      

      </style>
    </React.Fragment>
  )
}


export default Toast;