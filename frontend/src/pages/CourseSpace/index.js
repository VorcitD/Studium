import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import WhatsAppButtonGreenMedium from '../../assets/WhatsAppButtonGreenLarge.png';
import Cursos from '../../assets/Cursos.png'
import './styles.css';
import api from '../../services/api';

export default function CourseSpace() {

  const [courses, setCourses] = useState({ name: "", description: "", author: "", price: "", numClasses: "", category: "" });
  const [, setVideos] = useState([]);
  const [selectedV, setSelectedV] = useState({ id: "", title: "", url: "" });
  const { Course_id } = useParams();
  useEffect(() => {
    api.get(`courseSpace/${Course_id}`).then(response => {
      const { course, video } = response.data;
      setCourses(course);
      setVideos(video);
    })
    console.log(selectedV);

  }, [Course_id]);





  function HandleFrame(selection) {
    setSelectedV(selection);
    console.log(selection)
    var newframe = document.querySelector('.framenova');
    newframe.innerHTML = `<div class="row">
  <div class="col s12">
    <span class="card-title">${selection.title}</span>
    <div class="video-container">
    <iframe width="956" height="538" src=${selection.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</div>`;
    var a = document.querySelector('#CourseTitleNew');

    a.innerHTML = `<p class="flow-text textDestaque">${courses.name} </p>`;

  }



  return (
    <div>


      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <link type="text/css" rel="stylesheet" href="css/materialize.min.css" media="screen,projection" />


      <link type="text/css" rel="stylesheet" href="css/Detalhes.css" media="screen,projection" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>



      <ul id="MenuUsuario" class="dropdown-content ">
        <li><a href="#!">one</a></li>
        <li><a href="#!">two</a></li>
        <li class="divider"></li>
        <li><a href="#!">Sair</a></li>
      </ul>



      <div class="navbar-fixed ">
        <nav>
          <div class="nav-wrapper orange lighten-1  ">
            <a href="/Shop" class="brand-logo logostudium">A Janela Mágica</a>
            <a href="/Shop" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
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


      <div class="course-space-container">
        <div class="course-space-header">
          <img class="course-img" src={Cursos}></img>
          <div class="title-container">
            <h1>Aulas de Jiu-Jitsu</h1>
            <h4 >Professor piriri</h4>
          </div>
        </div>

        <div class="course-description-wrapper">
          <div class="course-description-container">
            <h5 class="description-title">
              Informações sobre o curso:
            </h5>

            <p class="description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <h5 class="description-title">
              O que você vai aprender nesse curso:
            </h5>
            <p class="description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <h5 class="description-title">
              Requisitos para o curso:
            </h5>
            <p class="description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          </div>
          <div class="price-container">
            <h5>R$120,00/mês</h5>
            <a aria-label="Tenho interesse!"
              href="https://wa.me/5562999189082?text=Tenho%20interesse%20em%20um%20curso%20que%20vocês%20oferecem!">
              <img class="whatsapp"
                alt="Chat on WhatsApp"
                src={WhatsAppButtonGreenMedium} />
            </a>
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
  )
}