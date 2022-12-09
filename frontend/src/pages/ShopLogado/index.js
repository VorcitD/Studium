import React, { useState, useEffect } from 'react';
import { useHistory,Link } from 'react-router-dom';
import './styles.css';
import Cursos from '../../assets/Cursos.png';
import Alura from '../../assets/Alura.png';
import ACME from '../../assets/Acme.jpg';
import teste from '../../assets/Rocket.png';
import api from '../../services/api';

export default function ShopLogado() {
  const [category, setCategory] = useState('Marketing');
  const [courses, setCourses] = useState([]);
  const history= useHistory();

  useEffect(() => {
    api.get('courses').then(response => {
      setCourses(response.data)
    })
  }, [category]);

  function IMG(props){
    return(
      <img src={props.img} alt="Tanto Faz"/>
    );
  }


  return (


    <div>

      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link type="text/css" rel="stylesheet" href="css/materialize.min.css" media="screen,projection" />


      <link type="text/css" rel="stylesheet" href="css/Shop.css" media="screen,projection" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <div>
        <div class="navbar-fixed ">
          <nav class='semsombra'>
            <div class="nav-wrapper orange lighten-2">
              <a href="/" class="brand-logo logostudium">A Janela Mágica</a>
              <ul class="right hide-on-med-and-down">
              </ul>
            </div>
          </nav>
        </div>

        <div class="row">
          <p class="flow-text textDestaque">Cursos em Destaque </p>
        </div>


        <div class="row center">


          <div onClick={()=>history.push('/CourseSpace/1')} class="col s12 m3 ">
            <div id="cardDestaque" class="card tamanhoCard cardImagem">
              <div class="card-image ">
                <img src={teste} />

              </div>
              <div class="card-content">
                <span class="card-title"><a href="#">Time Lightning</a></span>
                <p>Rafael Victor</p>
              </div>

            </div>
          </div>

          <div onClick={()=>history.push('/CourseSpace/2')} class="col s12 m3">
            <div id="cardDestaque" class="card tamanhoCard cardImagem">
              <div class="card-image ">
                <img src={ACME} />

              </div>
              <div class="card-content">
                <span class="card-title"><a href="#">ACME CORP Treinamentos</a></span>
                <p>Juninho Coiote</p>
              </div>

            </div>
          </div>

          <div onClick={()=>history.push('/CourseSpace/5')} class="col s12 m3">
            <div id="cardDestaque" class="card tamanhoCard cardImagem">
              <div class="card-image ">
                <img src={Alura} />

              </div>
              <div class="card-content">
                <span class="card-title"><a href="#">Curso Alura de Capacitação</a></span>
                <p>Luiz Victor</p>
              </div>

            </div>
          </div>

          <div onClick={()=>history.push('/CourseSpace/6')} class="col s12 m3">
            <div id="cardDestaque" class="card tamanhoCard cardImagem">
              <div class="card-image ">
                <img src={Cursos} />

              </div>
              <div class="card-content">
                <span class="card-title"><a href="#">Curso Teste de Negócios</a></span>
                <p>Trupute</p>
              </div>

            </div>
          </div>


        </div>


        <div class="row">
          <p class="flow-text textDestaque">Pesquisa por Categorias </p>
        </div>


        <div class="row listaPesquisa">


          <div class="col s12 m4">


            <div id="cardDestaque" class="collection">
              <a onClick={() => setCategory('negocios')} class="collection-item textoPadrao">
                <div class="row  tiraMargem">
                  <div class="col s6 m3">
                    <i class="material-icons prefix">business_center</i>
                  </div>
                  <div class="col s6 m9">
                    Negócios
                    </div>
                </div>
              </a>

              <a onClick={() => setCategory('Marketing')} class="collection-item textoPadrao">
                <div class="row  tiraMargem">
                  <div class="col s6 m3">
                    <i class="material-icons prefix">dashboard</i>
                  </div>
                  <div class="col s6 m9">
                    Marketing
                    </div>
                </div> </a>

              <a onClick={() => setCategory('ti')} class="collection-item textoPadrao">
                <div class="row  tiraMargem">
                  <div class="col s6 m3">
                    <i class="material-icons prefix">computer</i>
                  </div>
                  <div class="col s6 m9">
                    T.I
                    </div>
                </div> </a>

              <a onClick={() => setCategory('programacao')} class="collection-item textoPadrao">
                <div class="row  tiraMargem">
                  <div class="col s6 m3">
                    <i class="material-icons prefix">code</i>
                  </div>
                  <div class="col s6 m9">
                    Programação
                    </div>
                </div> </a>

              <a onClick={() => setCategory('culinaria')} class="collection-item textoPadrao">
                <div class="row  tiraMargem">
                  <div class="col s6 m3">
                    <i class="material-icons prefix">restaurant</i>
                  </div>
                  <div class="col s6 m9">
                    Culinária
                     </div>
                </div> </a>

              <a onClick={() => setCategory('educacao')} class="collection-item textoPadrao">
                <div class="row  tiraMargem">
                  <div class="col s6 m3">
                    <i class="material-icons prefix">book</i>
                  </div>
                  <div class="col s6 m9">
                    Educação
                    </div>
                </div> </a>

              <a onClick={() => setCategory('fotografia')} class="collection-item textoPadrao">
                <div class="row  tiraMargem">
                  <div class="col s6 m3">
                    <i class="material-icons prefix">camera_alt</i>
                  </div>
                  <div class="col s6 m9">
                    Fotografia
                    </div>
                </div> </a>

              <a onClick={() => setCategory('idiomas')} class="collection-item textoPadrao">
                <div class="row  tiraMargem">
                  <div class="col s6 m3">
                    <i class="material-icons prefix">language</i>
                  </div>
                  <div class="col s6 m9">
                    Idiomas
                   </div>
                </div> </a>

              <a onClick={() => setCategory('saude')} class="collection-item textoPadrao">
                <div class="row  tiraMargem">
                  <div class="col s6 m3">
                    <i class="material-icons prefix">local_hospital</i>
                  </div>
                  <div class="col s6 m9">
                    Saúde
                   </div>
                </div> </a>

              <a onClick={() => setCategory('musica')} class="collection-item textoPadrao">
                <div class="row  tiraMargem">
                  <div class="col s6 m3">
                    <i class="material-icons prefix">music_note</i>
                  </div>
                  <div class="col s6 m9">
                    Música
                  </div>
                </div> </a>


            </div>

          </div>

          <div className="col s2 m8">
            <div class="row">

              {courses.map(courses => {
                if (courses.category == category) {
                  return (
                    <Link to={`/CourseSpace/${courses.id}`}>

                      <div class="col s12 m12" key={courses.id}>
                        <div class="card horizontal ">
                          <div class="card-image cardImagem">
                            <img width="200" height="200" src={courses.img} alt=""/>
                          </div>
                          <div class="card-stacked">
                            <div class="card-content">
                              <div class="textTituloCartao"><a href="#">{courses.name}</a></div>
                              <p> {courses.author}</p> <br></br> <p> {courses.description}</p>

                            </div>
                            <div class="textPreco" >
                              <p>R${courses.price},00</p>
                            </div>
                          </div>
                        </div>

                      </div>
                    </Link>
                  )
                } else {
                  return (
                    <div>
                    </div>
                  );
                }
              })}
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
      </div >
    </div>
  );
}