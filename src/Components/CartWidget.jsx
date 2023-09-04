import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function CartWidget() {
  return (
    <div className="d-flex flex-row align-items-center gap-2">
        <FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} />
        <span className="badge bg-secondary">0</span>
    </div>
  )
}

export default CartWidget
