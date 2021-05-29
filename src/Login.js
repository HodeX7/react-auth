import React from 'react'
import './Login.css'

function Login({email, pass, handleSignup, handleLogin, hasAccount, setHasAccount, setEmail, setPass, emailError, passError}) {
    return (
        <section className='login'>
            <div className='login__box'>
                <label>Username</label> 
                <input type='text' autoFocus required value={email} onChange = {e => setEmail(e.target.value)} />
                <p className='errorMsg'>{emailError}</p>
                <label>Password</label>
                <input type='password' autoFocus required value={pass} onChange = {e => setPass(e.target.value)} />
                <p className='errorMsg'>{passError}</p>
                <div className='btnContainer'>
                    {
                        hasAccount? (
                            <>
                                <button onClick={handleLogin}>Sign In</button>
                                <p>Don't Have an Account? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                        </>
                        ) : (
                            <>
                                <button onClick={handleSignup} >Sign Up</button>
                                <p>Have an Account? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                        </>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Login
