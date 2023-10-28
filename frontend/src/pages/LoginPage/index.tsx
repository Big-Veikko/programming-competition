import React from 'react'
import './styles.scss'
import logoImage from "/src/assets/XA.png";
import { SubmitBtn, SubmitBtnPrimary } from '../../components/button/Buttons';
import { Link } from 'react-router-dom';


export const LoginPage = () => {
  return (
    <div className='loginPage'>
        
        <Link to={"/"}>
        <img src={logoImage} alt="" />
      </Link>
        <div className="login-form">
            <input type="text" placeholder='id'/>
            <input type="text" placeholder='password'/>
            <SubmitBtnPrimary  text='Login' onClick={()=>{}}/>
        </div>
    </div>
  )
}
