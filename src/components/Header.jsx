import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className="header-logo">
            <img src="https://cdn-icons.flaticon.com/png/512/4710/premium/4710098.png?token=exp=1644804764~hmac=1c49a9279d449f50aec102795e23c2b9" id='rocket' alt="rocket" />
            <h1>LabeCommerce</h1>
        </div>
        <div className="header-links">
            <ul>
                <li>Anuncie</li>
                <li>Registre-se</li>
            </ul>
        </div>
        <div className="header-buttons">
            <button>Login</button>
            <button>Meu Carrinho</button>
        </div>
        <div className="avatar">
            <img src="https://cdn-icons.flaticon.com/png/512/3541/premium/3541871.png?token=exp=1644804951~hmac=6d9d25dc257298367dcd8e353fcf7618" id='avatar' alt="avatar" />
        </div>


    </div>
  )
}
