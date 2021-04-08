import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import './styles.css';
import loginCelebration from '../../assets/LoginCelebration.png';
import api from '../../services/api';

export default function SignUp() {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[cpassword,setCpassword]=useState('');
    const history = useHistory();

    function changeButtonColor(){
        if(document.getElementById('tipouser1').style.backgroundColor === "#a77aed"){
        document.getElementById('tipouser1').style.backgroundColor = "#dcdce6";
    }else{
        document.getElementById('tipouser1').style.backgroundColor = "#a77aed";
    }
    
    }

    async function handleSignUp(e){
        e.preventDefault();//impedir que a página recarregue quando o botão for pressionado
        const data={
            name,
            email,
            password,
            cpassword
        };
        try{
        const response = await api.post('users',data);
        history.push('/Login');
        }catch(err){
        alert('Erro no Cadastro de Usuário, por favor tente novamente!');
        
    }
    }
    
    return (
        <div className="signup-container">

            <div className="form-container">
                <section className="form">
                    <form className="form" onSubmit={handleSignUp} >
                        <h1 className="SignUp">Bem vindo!</h1>
                        
                        <p className="SignUp">Crie sua conta preenchendo os campos abaixo</p>
                        
                        <input className="SignUp"
                        type="text" 
                        placeholder="Nome Completo" 
                        value={name}
                        onChange={e=>setName(e.target.value)}
                        />
                        
                        <input className="SignUp"
                        type="email" 
                        placeholder="E-mail"
                        value={email}
                        onChange={e=>setEmail(e.target.value)} 
                        />

                        <input className="SignUp"
                        type="password" 
                        placeholder="Senha"
                        value={password}
                        onChange={e=>setPassword(e.target.value)} 
                        />

                        <input className="SignUp"
                        type="password" 
                        placeholder="Confirme sua senha"
                        value={cpassword}
                        onChange={e=>setCpassword(e.target.value)} 
                        />

                        <div className="form-container-h2">
                            <h4 className="SignUp">Oque você deseja ser?</h4>
                        </div>
                        <div className="usertype-container">
                            <button id="tipouser1" onClick={changeButtonColor} type="button" >Professor</button>
                            <button id="tipouser2"onClick={changeButtonColor} type="button">Aluno</button>
                        </div>
                        <button className="button-signup"type="submit">Cadastrar</button>
                        <a href="/login">Já tenho cadastro</a>

                    </form>
                </section>
            </div>
            <img src={loginCelebration} alt="Login" />
        </div>
    );
}