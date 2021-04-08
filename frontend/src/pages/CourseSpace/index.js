import React, {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import api from '../../services/api';

export default function CourseSpace(){

  const [courses,setCourses] = useState([]);
  useEffect(()=>{
    api.get('courses').then(response =>{
      setCourses(response.data)
    })
  },[]);

return(
<div>

  
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>


      <link type="text/css" rel="stylesheet" href="css/Detalhes.css"  media="screen,projection"/>

      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

		<script type = "text/javascript" src = "https://code.jquery.com/jquery-2.1.1.min.js"></script>         



<ul id="MenuUsuario" class="dropdown-content ">
  <li><a href="#!">one</a></li>
  <li><a href="#!">two</a></li>
  <li class="divider"></li>
  <li><a href="#!">Sair</a></li>
</ul>



<div class="navbar-fixed ">
  <nav>
    <div class="nav-wrapper deep-purple lighten-2">
      <a href="index.html" class="brand-logo logostudium">studium.</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="sass.html"><i class="material-icons">search</i></a></li>
       	<li><Link class="waves-effect waves-light" to='/Shop'>CURSOS</Link></li>
        <li><a class="waves-effect waves-light  modal-trigger" href="#demo-modal">ALUNO</a></li>
        <li><a class="dropdown-trigger" href="#!" data-target="MenuUsuario"><i class="material-icons medium right">account_circle</i></a></li>
        <script>
          
        </script>
      </ul>
    </div>
  </nav>
</div>
<ul class="sidenav" id="mobile-demo">
  <li><a href="sass.html"><i class="material-icons">search</i></a></li>
  <li><a href="Shop.html">CURSOS</a></li>
 <li><a class="waves-effect waves-light  modal-trigger" href="#demo-modal">ALUNO</a></li>
</ul>
        

<div class="row">
  <p class="flow-text textDestaque">Como montar um site EAD </p>
</div>


<div class="row tamanhoMinimoRow">
  <div class ='col s12 m2 tamanhoCardEtapas'>
    
    <div class="row">
      <div class="col s12 m12">
        <div class="card ">
          <div class="card-content white-text">
            

          <a href="#!" class="collection-item textoConcluido">
            <div class="row  tiraMargem">
            <div class="col s1 m2"> 
              <i class="material-icons prefix">check_circle</i>  
            </div>
            <div class="col s9 m9 left">
              Sobre o Curso
            </div>
            </div> 
          </a>

           <div class="collection-item textoConcluido">
            <div class="row  tiraMargem">
            <div class="col s1 m2"> 
              <i class="material-icons prefix">arrow_downward</i>  
            </div>
            </div> 
          </div>


          <a href="#!" class="collection-item textoConcluido">
            <div class="row  tiraMargem">
            <div class="col s1 m2"> 
              <i class="material-icons prefix">check_circle</i>  
            </div>
            <div class="col s6 m9">
              Conceitos Introdutorios
            </div>
            </div> 
          </a>


          <div class="collection-item textoConcluido">
            <div class="row  tiraMargem">
            <div class="col s1 m2"> 
              <i class="material-icons prefix">arrow_downward</i>  
            </div>
            </div> 
          </div>



          <a href="#!" class="collection-item textoConcluido">
            <div class="row  tiraMargem">
            <div class="col s1 m2"> 
              <i class="material-icons prefix">check_circle</i>  
            </div>
            <div class="col s6 m9">
              Bla Bla Bla
            </div>
            </div> 
          </a>

          <div class="collection-item textoConcluido">
            <div class="row  tiraMargem">
            <div class="col s1 m2"> 
              <i class="material-icons prefix">arrow_downward</i>  
            </div>
            </div> 
          </div>


          <a href="#!" class="collection-item textoPendente">
            <div class="row  tiraMargem">
            <div class="col s1 m2"> 
              <i class="material-icons prefix">play_circle_outline</i>  
            </div>
            <div class="col s6 m9">
              Video que ainda nao viu
            </div>
            </div> 
          </a>

          <div class="collection-item textoPendente">
            <div class="row  tiraMargem">
            <div class="col s1 m2"> 
              <i class="material-icons prefix">arrow_downward</i>  
            </div>
            </div> 
          </div>

          <a href="#!" class="collection-item textoPendente">
            <div class="row  tiraMargem">
            <div class="col s1 m2">  
              <i class="material-icons prefix">play_circle_outline</i>  
            </div>
            <div class="col s6 m9">
              Video que ainda nao viu
            </div>
            </div> 
          </a>

          <div class="row center">
            <div class="col s12 center">
              <br></br>
              <a class="waves-effect waves-light btn  deep-purple lighten-5 btnProximoModulo textoPadrao"href="#!"> Proximo Modulo</a>
            </div>
          </div>
          

          </div>
        </div>
  </div>
  </div>
  </div>



  <div class=' col s12 m8'>
    <div class="row">
      <div class="col s12 m12">
        <div class="card tamanhoCardEtapas">
          <div class="card-content textoPendente">



            <div class="row">
              <div class="col s12">
                <span class="card-title">Titulo do Video</span>
                <div class = "video-container">
                  <iframe 
                    src = "https://www.youtube.com/embed/Q8TXgCzxEnw?rel=0"
                    frameborder = "0" allowfullscreen>
                  </iframe>
                </div> 
              </div>
            </div>
            
            <div class="row">
              <div class="col s12">
                <a class="waves-effect waves-light btn btnCadastrar deep-purple darken-4 right" href="#!"> Baixar Video</a>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      

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

      <script type="text/javascript" src="js/materialize.min.js"></script>
      </div>
)}