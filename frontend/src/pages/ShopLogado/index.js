import React from 'react';
import 'styles.css';
import Cursos from '../../assets/Cursos.png';
import IconBusiness from '../../assets/iconbusiness.png';
import IconEletronics from '../../assets/iconeletronics.png';
import Misterioso1 from '../../assets/misterioso1.png';
import Misterioso1j from '../../assets/misterioso1.jpg';
import SignUp from '../../assets/signup.png';
export default function ShopLogado() {
  return (

      <div>
        <head>

          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

          <link type="text/css" rel="stylesheet" href="css/materialize.min.css" media="screen,projection" />


          <link type="text/css" rel="stylesheet" href="css/Shop.css" media="screen,projection" />

          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>









        </head>



        <div class="navbar-fixed ">
          <nav class='semsombra'>
            <div class="nav-wrapper  deep-purple lighten-2">
              <a href="#!" class="brand-logo logostudium">studium.</a>
              <ul class="right hide-on-med-and-down">
                <li><a href="sass.html"><i class="material-icons">search</i></a></li>
                <li><a href="sass.html">CURSOS</a></li>
                <li><a class="waves-effect waves-light  modal-trigger" href="#demo-modal">ENTRAR</a></li>
                <li><a class="waves-effect waves-light btn btnCadastrar deep-purple darken-4" href="cadastrarAlunoProfessor.html"> CADASTRAR</a></li>
              </ul>
            </div>
          </nav>
        </div>



        <div class="row">
          <p class="flow-text textDestaque">Como funciona </p>
        </div>



        <div class="row container center">


          <div class="col s12 m3">
            <div class="card cardImagem">
              <div class="card-image ">
                <img src={Cursos} />

              </div>
              <div class="card-content">
                <span class="card-title"><a href="#">Como montar um site</a></span>
                <p>I am a very simple card..</p>
              </div>

            </div>
          </div>

          <div class="col s12 m3">
            <div class="card cardImagem">
              <div class="card-image ">
              <img src={Cursos} />

              </div>
              <div class="card-content">
                <span class="card-title"><a href="#">Como montar um site</a></span>
                <p>I am a very simple card..</p>
              </div>

            </div>
          </div>

          <div class="col s12 m3">
            <div class="card cardImagem">
              <div class="card-image ">
              <img src={Cursos} />

              </div>
              <div class="card-content">
                <span class="card-title"><a href="#">Como montar um site</a></span>
                <p>I am a very simple card..</p>
              </div>

            </div>
          </div>

          <div class="col s12 m3">
            <div class="card cardImagem">
              <div class="card-image ">
              <img src={Cursos} />

              </div>
              <div class="card-content">
                <span class="card-title"><a href="#">Como montar um site</a></span>
                <p>I am a very simple card..</p>
              </div>

            </div>
          </div>


        </div>



        <div class="row listaPesquisa">


          <div class="col s12 m4">


            <div class="collection">
              <a href="#!" class="collection-item textoPadrao"><i class="material-icons prefix">business_center</i>  Alvin</a>
              <a href="#!" class="collection-item textoPadrao"><i class="material-icons prefix">store_mall_directory</i>Alvin</a>
              <a href="#!" class="collection-item textoPadrao">Alvin</a>
              <a href="#!" class="collection-item textoPadrao">Alvin</a>
            </div>
          </div>
        </div>


        <div class="col s12 m8">

          <div class="row">


            <div class="col s12 m12">
              <div class="card horizontal ">
                <div class="card-image cardImagem">
                <img src={Cursos} />
                </div>
                <div class="card-stacked">
                  <div class="card-content">
                    <h2 class="header"><a href="#">Horizontal Card</a></h2>
                    <p>I am a very simple card. I am good at containing small bits of information.</p>
                    <p><br>Preço R$ 32,00</br></p>
                  </div>

                </div>
              </div>
            </div>

            <div class="col s12 m12">
              <div class="card horizontal ">
                <div class="card-image cardImagem">
                <img src={Cursos} />
                </div>
                <div class="card-stacked">
                  <div class="card-content">
                    <h2 class="header"><a href="#">Horizontal Card</a></h2>
                    <p>I am a very simple card. I am good at containing small bits of information.</p>
                    <p><br>Preço R$ 32,00</br></p>
                  </div>

                </div>
              </div>
            </div>

            <div class="col s12 m12">
              <div class="card horizontal ">
                <div class="card-image cardImagem">
                <img src={Cursos} />
                </div>
                <div class="card-stacked">
                  <div class="card-content">
                    <h2 class="textTituloCartao"><a href="#">Horizontal Card</a></h2>
                    <p>I am a very simple card. I am good at containing small bits of information.</p>

                  </div>
                  <div class="textPreco" >
                    <p>R$ 32,00</p>
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
      </div>

  );
}