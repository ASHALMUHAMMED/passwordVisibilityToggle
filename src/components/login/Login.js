import React,{useState} from 'react'
import './Login.css'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'

const Login = () => {
    const [showPassword,setShowPassword] = useState(false)

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

  return (
    <section className='login-page'>
      <div className="container login-sec">
        <h1>Login</h1>
        <div className='form-control username'>
           <input type="text" className='form-control' placeholder='UserName' />
        </div>
        <div className='form-control password'>
            <input type={showPassword ? ("text") : ("password")} className='form-control' placeholder='Password' />
            <div className="icon" onClick={togglePassword}>
                {showPassword ? (<AiOutlineEye size={25}/>) : (<AiOutlineEyeInvisible size={25}/>)}
            </div>
        </div>
        
        <button className='btn btn-success w-100'>Login</button>

      </div>
    </section>
  )
}

export default Login
