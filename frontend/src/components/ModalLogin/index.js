import React from 'react';

const ModalLogin = ()=>{
    return <div id="demo-modal" class="modal cardRounded modalLogin open" tabindex="0">
    <div class="modal-content brand-logo logostudiumLogin " align="center">
      <h4 class="logostudium">studium.</h4>



      <div class="row " align="center">
        <form class="col s12 ">

          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">mail</i>
              <input id="icon_prefix" type="text" class="validate" />
              <label for="icon_prefix">Email</label>
            </div>
          </div>


          <div class="row esqueciminhasenha">
            <div class="input-field col s12">
              <i class="material-icons prefix">enhanced_encryption</i>
              <input id="icon_prefix" type="password" class="validate" />
              <label for="icon_prefix">Senha</label>
            </div>
          </div>
          <div class="row esqueciminhasenha" align="right">
            <a href="esqueciMinhaSenha.html" class="brand-logo textoPadrao "> Esqueci minha senha</a>
          </div>
        </form></div>
    </div>
    <div class="row" align="center">
      <button class="btn waves-effect waves-light corPadrao btnLogin" type="submit" name="action">ENTRAR
    <i class="material-icons right">send</i>
      </button>
    </div>

    <div class="row" align="center">
      <p>Não possui conta? <a href="cadastrarAlunoProfessor.html" class="brand-logo  textoPadrao"> Cadastre-se!</a></p>
    </div>
    <div class="modal-overlay"></div>
  </div>
  
  
};

export default ModalLogin;
