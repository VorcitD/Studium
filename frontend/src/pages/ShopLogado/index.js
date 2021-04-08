import React,{useState,useEffect} from 'react';
import './styles.css';
import Cursos from '../../assets/Cursos.png';
import IconBusiness from '../../assets/iconbusiness.png';
import IconEletronics from '../../assets/iconelectronics.png';
import Misterioso1 from '../../assets/misterioso1.png';
import Misterioso1j from '../../assets/misterioso1.jpg';
import SignUp from '../../assets/signup1.png';
import api from '../../services/api';
export default function ShopLogado() {
  const [category,setCategory] = useState('marketing');
  const [courses,setCourses] = useState([]);
 
  useEffect(()=>{
    api.get('courses').then(response =>{
      setCourses(response.data)
    })
  },[category]);

  return (
    

    <div>
        <div>
          <div class="navbar-fixed ">
            <nav class='semsombra'>
              <div class="nav-wrapper  deep-purple lighten-2">
                <a href="#!" class="brand-logo logostudium">studium.</a>
                <ul class="right hide-on-med-and-down">
                </ul>
              </div>
            </nav>
          </div>

          <div class="row">
            <p class="flow-text textDestaque">Cursos em Destaque </p>
          </div>


          <div class="row center">


            <div class="col s12 m3">
              <div class="card tamanhoCard cardImagem">
                <div class="card-image ">
                  <img src={Cursos} />

                </div>
                <div class="card-content">
                  <span class="card-title"><a href="#">Como montar um software</a></span>
                  <p>Professora Andressa</p>
                </div>

              </div>
            </div>

            <div class="col s12 m3">
              <div class="card tamanhoCard cardImagem">
                <div class="card-image ">
                  <img src={Cursos} />

                </div>
                <div class="card-content">
                  <span class="card-title"><a href="#">Como montar um site</a></span>
                  <p>Professor André</p>
                </div>

              </div>
            </div>

            <div class="col s12 m3">
              <div class="card tamanhoCard cardImagem">
                <div class="card-image ">
                  <img src={Cursos} />

                </div>
                <div class="card-content">
                  <span class="card-title"><a href="#">Como montar um backend</a></span>
                  <p>Professor Victor</p>
                </div>

              </div>
            </div>

            <div class="col s12 m3">
              <div class="card tamanhoCard cardImagem">
                <div class="card-image ">
                  <img src={Cursos} />

                </div>
                <div class="card-content">
                  <span class="card-title"><a href="#">Como montar um Banco de Dados</a></span>
                  <p>Professora Deisymar</p>
                </div>

              </div>
            </div>


          </div>


          <div class="row">
            <p class="flow-text textDestaque">Pesquisa por Categorias </p>
          </div>


          <div class="row listaPesquisa">


            <div class="col s12 m4">


              <div class="collection">
                <button class="collection-item textoPadrao">                
                  <div class="row  tiraMargem">
                    <div class="col s6 m3">
                      <i class="material-icons prefix">business_center</i>
                    </div>
                    <div class="col s6 m9">
                      Negócios
                    </div>
                  </div> 
                  </button>

                <a href="#!" class="collection-item textoPadrao">
                  <div class="row  tiraMargem">
                    <div class="col s6 m3">
                      <i class="material-icons prefix">dashboard</i>
                    </div>
                    <div class="col s6 m9">
                      Marketing
                    </div>
                  </div> </a>

                <a href="#!" class="collection-item textoPadrao">
                  <div class="row  tiraMargem">
                    <div class="col s6 m3">
                      <i class="material-icons prefix">computer</i>
                    </div>
                    <div class="col s6 m9">
                      T.I
                    </div>
                  </div> </a>

                <a href="#!" class="collection-item textoPadrao">
                  <div class="row  tiraMargem">
                    <div class="col s6 m3">
                      <i class="material-icons prefix">code</i>
                    </div>
                    <div class="col s6 m9">
                      Programação
                    </div>
                  </div> </a>

                <a href="#!" class="collection-item textoPadrao">
                  <div class="row  tiraMargem">
                    <div class="col s6 m3">
                      <i class="material-icons prefix">restaurant</i>
                    </div>
                    <div class="col s6 m9">
                      Culinária
                     </div>
                  </div> </a>

                <a href="#!" class="collection-item textoPadrao">
                  <div class="row  tiraMargem">
                    <div class="col s6 m3">
                      <i class="material-icons prefix">book</i>
                    </div>
                    <div class="col s6 m9">
                      Educação
                    </div>
                  </div> </a>

                <a href="#!" class="collection-item textoPadrao">
                  <div class="row  tiraMargem">
                    <div class="col s6 m3">
                      <i class="material-icons prefix">camera_alt</i>
                    </div>
                    <div class="col s6 m9">
                      Fotografia
                    </div>
                  </div> </a>

                <a href="#!" class="collection-item textoPadrao">
                  <div class="row  tiraMargem">
                    <div class="col s6 m3">
                      <i class="material-icons prefix">language</i>
                    </div>
                    <div class="col s6 m9">
                      Idiomas
                   </div>
                  </div> </a>

                <a href="#!" class="collection-item textoPadrao">
                  <div class="row  tiraMargem">
                    <div class="col s6 m3">
                      <i class="material-icons prefix">local_hospital</i>
                    </div>
                    <div class="col s6 m9">
                      Saúde
                   </div>
                  </div> </a>

                <a href="#!" class="collection-item textoPadrao">
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


            <div class="col s12 m12">
              <div class="card horizontal ">
                <div class="card-image cardImagem">
                  <img src={Cursos} />
                </div>
                <div class="card-stacked">
                  <div class="card-content">
                    <div class="textTituloCartao"><a href="#">Como montar um Software</a></div>
                    <p> Professora Andressa</p> <br></br> <p> 30 horas</p>

                  </div>
                  <div class="textPreco" >
                    <p>R$ 60,00</p>
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
                    <div class="textTituloCartao"><a href="#">Como montar um Site</a></div>
                    <p> Professor André</p> <br></br> <p>15 horas</p>

                  </div>
                  <div class="textPreco" >
                    <p>R$ 40,00</p>
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
                    <div class="textTituloCartao"><a href="#">Como montar um Backend</a></div>
                    <p> Professor Victor</p> <br></br><p>30 horas</p>

                  </div>
                  <div class="textPreco" >
                    <p>R$ 50,00</p>
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
                    <div class="textTituloCartao"><a href="#">Como montar um Banco de Dados</a></div>
                    <p> Professora Deisymar</p> <br></br><p>90 horas</p>

                  </div>
                  <div class="textPreco" >
                    <p>R$ 70,00</p>
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
        </div >
    </div>
  );
}