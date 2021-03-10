import React from 'react';
import {Link} from 'react-router-dom';
import './materialize.css';
import scoins from '../../assets/scoins 1.png';
import crowns from '../../assets/crowns 1.png';
import home1 from '../../assets/home1.png';
import home2 from '../../assets/home2.png';
import home3 from '../../assets/home3.png';
import medal from '../../assets/medal 1.png';
import message1 from '../../assets/message 1.png';
import patent from '../../assets/patent 1.png';
import test from '../../assets/test 1.png';
import class1 from '../../assets/class 1.png';
import Header from '../../Header';


export default function Home() {
    
    return (
      
          <body>
          <Header/>
        

      
      <div class="navbar-fixed ">
        <nav class='semsombra'>
          <div class="nav-wrapper  deep-purple lighten-2">
            <a href="#!" class="brand-logo logostudium">studium.</a>
            <ul class="right hide-on-med-and-down">
                <li><a href="sass.html"><i class="material-icons">search</i></a></li>
             <li><a href="sass.html">CURSOS</a></li>
              <li><a href="badges.html">ENTRAR</a></li>
              <Link to="/SignUp"class="waves-effect waves-light btn btnCadastrar  deep-purple darken-4">CADASTRAR</Link>
            </ul>
          </div>
        </nav>
      </div>
          
      
            
          <img class="responsive-img "  src={home1} alt="home1"/>
      

        <p class="flow-text center textDestaque">Como funciona nossa plataforma</p>
      

      <div class="row center  container cardalinhamento">
      
      
          <div class="col s3 ">
            <div class="card card-small center white cardRounded ">
              <div class="card-content black-text cardminimo">
                 
      
                 <img src={medal} alt="medalha"></img>
                
      
                <span class="card-title">Desbloqueie conquistas</span>
                <p>Destrave conquistas e ganhe mais pontos.</p>
              </div>
              <div class="cardbordainferior deep-purple lighten-2" >
            
              </div>
            </div>
          </div>
        
      
          <div class="col s3">
            <div class="card card-small center white cardRounded ">
              <div class="card-content black-text cardminimo">
                 
              <img src={scoins} alt="scoins" />
                
      
                <span class="card-title">Ganhe pontos e troque por descontos</span>
                <p>Durante o seu aprendizado você ganha pontos que podem ser trocados por descontos em outros cursos.</p>
              </div>
              <div class="cardbordainferior  deep-purple lighten-2" >
                
              </div>
            </div>
          </div>
       
      
      
         
          <div class="col s3" >
            <div class="card card-small center white cardRounded ">
              <div class="card-content black-text cardminimo">
                 
      
                 <img src={crowns} alt="coroa"/>
                
      
                <span class="card-title">Fique no topo</span>
                <p>Domine o rank e mostre o quão estudioso você é!.</p>
              </div>
              <div class="cardbordainferior deep-purple lighten-2" >
                
              </div>
            </div>
          </div>
        
      
        </div>
      
      

        <div class="row center">
      
      
          <div class="col s12">
            <div class="card-panel deep-purple lighten-5">
                  
              <div class="row">
                 <p class="flow-text center textDestaque">O que mais a gente oferece</p>
              </div>
      
              <div class="row  cardalinhamento">
      
                        <div class="col s12 deep-purple lighten-5">
                          
                          <div class="card-content black-text ">
                             
      
                             <img src={patent} alt="patente"/>
                            
      
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                          </div>
                          <div class="card-action  deep-purple lighten-2" >
                            
                          </div>
                        </div>
      
      
      
                          <div class="col s12 deep-purple lighten-5">
                          <div class="card-content black-text">
                             
      
                            <img src={message1} alt="mensagem 1"/>
                            
      
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                          </div>
                          <div class="card-action  deep-purple lighten-2" >
                            
                          </div>
                        </div>
      
                         <div class="col s12 deep-purple lighten-5">
                          <div class="card-content black-text">
                             
      
                             <img src={test} alt="test"/>
                            
      
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                          </div>
                          <div class="card-action  deep-purple lighten-2" >
                            
                          </div>
                        </div>
      
                         <div class="col s12  deep-purple lighten-5">
                          <div class="card-content black-text">
                             
      
                             <img src={class1} alt="aula"/>
                            
      
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                          </div>
                          <div class="card-action  deep-purple lighten-2" >
                            
                          </div>
                        </div>
      
      
              </div>
      
      
            </div>
          </div>
      </div>
      
      

      
      
              <div class="row center sejaumAluno">
      
                        <div class="col s12 m8 ">
                          
                          <div class="card-content black-text ">
                              <img src={home2} alt="home2"/>
                          </div>
                          
                        </div>
      
      
      
                          <div class="col s12 m4 ">
                              <div class="card-content black-text">
                                   <div class="row ">
                                         <p class=" center textDestaque"> Seja um aluno</p>
                                     </div>
                                    <div class="row ">
                                      <p class=" center "> Seja um aluno e tenha acesso a nossa plataforma de estudos com cursos de qualidade.</p>
                                    </div>
                                    <div class="row ">
                                            <a class="waves-effect  waves-light btn-large deep-purple lighten-2">Torne-se aluno</a>
                                     </div>
                              </div>
      
                        </div>
              </div>
      
      

      
      
              <div class="row center sejaumAluno">
      
      
                      <div class="col s12 m4 ">
                              <div class="card-content black-text">
                                   <div class="row ">
                                         <p class=" center textDestaque"> Seja um professor</p>
                                     </div>
                                    <div class="row ">
                                      <p class=" center "> Seja um professor compartilhando seus conhecimentos tendo o suporte necessário para suas aulas.</p>
                                    </div>
                                    <div class="row ">
                                            <a class="waves-effect  waves-light btn-large deep-purple lighten-2">Torne-se professor</a>
                                     </div>
                              </div>
      
                        </div>
      
      
                        <div class="col s12 m8 ">
                          
                          <div class="card-content black-text ">
                                <img src={home3} alt="home 3"/>
                          </div>
                          
                        </div>
      
      
      
                          
              </div>
      
      
      
      

             <footer class="page-footer rodapeBackground">
                <div class="rodapeAlinhamento">
                  <div class="row center">
                    <div class="col s12 m4">
                      <h5 class="white-text">A studium.</h5>
                      <ul>
                        <li><a class="grey-text text-lighten-3" href="#!">Sobre nós</a></li>
                        <li><a class="grey-text text-lighten-3" href="#!">Contato</a></li>
                      </ul>
                    </div>
      
                    <div class="col s12 m4">
                      <h5 class="white-text">Suporte</h5>
                      <ul>
                        <li><a class="grey-text text-lighten-3" href="#!">Central de atendimento</a></li>
                        <li><a class="grey-text text-lighten-3" href="#!">Desenvolvedores</a></li>
                      </ul>
                    </div>
      
                    <div class="col s12 m4">
      
      
                      
                      <div class="row">
                                          <h5 class="white-text">Redes Sociais</h5>
                        </div>
                      <div class="row">
                          <div class="col s3 m3">
                              <a class="grey-text text-lighten-3" href="#!">Link 1</a>
                          </div>
                          <div class="col s3 m3">
                              <a class="grey-text text-lighten-3" href="#!">Link 2</a>
                          </div>
                          <div class="col s3 m3">
                              <a class="grey-text text-lighten-3" href="#!">Link 3</a>
                          </div>
                          <div class="col s3 m3">
                              <a class="grey-text text-lighten-3" href="#!">Link 4</a>
                          </div>
                      
                        </div>
      
                      
                    </div>
                  </div>
                </div>
                <div class="footer-copyright">
                  <div class="container">
                  © 2014 Copyright Text
                  <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
                  </div>
                </div>
              </footer>


      

          </body>


    );
}