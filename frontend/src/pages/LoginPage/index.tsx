import React, {useState} from 'react'
import './styles.scss'
import logoImage from "/src/assets/XA.png";
import { SubmitBtnPrimary } from '../../components/button/Buttons';
import { Link } from 'react-router-dom';

import {useDispatch} from "react-redux";
import { useLoginMutation } from '../../services/expressApi';
import { setCredentials } from '../../services/auth/auth.slice';
import { AuthenticationResponseModel } from '../../services/auth/auth.model';


export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (e: any) => {
    const login_data = { email, password };
    e.preventDefault();
    try {

      const response: AuthenticationResponseModel = await login(login_data) as unknown as AuthenticationResponseModel;
      
      response.data.message === "Login Successful" && dispatch(setCredentials(response.data.data));
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='loginPage'>
        
        <Link to={"/"}>
        <img src={logoImage} alt="" />
      </Link>
      <form method="post" onSubmit={(e) => handleSubmit(e)}>
          <div className="login-form">
              <input type="email" placeholder='Enter your Email' value={email} onChange={e => setEmail(e.target.value)}/>
              <input type="text" placeholder='Enter your Passowrd' value={password} onChange={e => setPassword(e.target.value)}/>
              <SubmitBtnPrimary  text='Login' onClick={()=>{}}/>
          </div>

      </form>
    </div>
  )
}
