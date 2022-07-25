import React, { useState } from 'react';

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
    }

    return (
        <form action='' onSubmit={handleLogin} id="sign-up-form">
            <label htmlFor='email'>Email</label>
            <br />
            <input
                type="text"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <div className="email error">
                Login/Mot de passe invalide
            </div>
            < br />
            <label htmlFor='password'></label>
            < br />
            <input
                type="password"
                name='password'
                id='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <div className="password error">
                Login/Mot de passe invalide
            </div>
            <input
                type='submit'
                value='Se connecter' />
        </form>
    );
};

export default SignInForm;