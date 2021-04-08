import React,{useState} from 'react';
import './styles.css';
import SignUp from '../../assets/signup1.png';
import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api';
export default function Login() {
    const [email,setEmail]= useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        try{
            const response =await api.post('/session',{email,password});
            localStorage.setItem('id',response.data.id);

            history.push('/Shop');
        }catch(err){
            alert('Falha no Login, tente novamente');
        }
    }
    return (
        <div>
            <div class="limiter">
                <div class="container-login100">
                    <div class="wrap-login100">
                        <div class="login100-pic js-tilt">
                            <img src={SignUp} alt="SignUp" />
                        </div>
                        <form onSubmit={handleLogin} class="login100-form validate-form">
                            <h1 class="login100-form-title">
                                Bora Logar!
                            </h1>
                            <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input class="input100" type="email" name="email" placeholder="Email" 
                                    value={email}
                                    onChange={e=>setEmail(e.target.value)}
                                />
                                <span class="focus-input100"></span>
                                <span class="symbol-input100">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div class="wrap-input100 validate-input" data-validate="Password is required">
                                <input class="input100" type="password" name="pass" placeholder="Password" 
                                    value={password}
                                    onChange={e=>setPassword(e.target.value)}
                                />
                                <span class="focus-input100"></span>
                                <span class="symbol-input100">
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div class="container-login100-form-btn">
                                <button class="login100-form-btn">
                                    Entrar
</button>
                            </div>
                            <div class="text-center p-t-136">
                                <a class="txt2" href="/SignUp">
                                    Crie sua conta
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script><script src="vendor/jquery/jquery-3.2.1.min.js"></script>
        </div>
    );
}