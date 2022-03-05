import './styles.css'
import Typing from 'react-typing-animation';

function Main(){
    // animação de opacidade
    const animated = document.querySelectorAll('[animation]');
    const animationClass = 'animate';
    function scrollAnimation(){
        const position = window.pageYOffset + ((window.innerHeight *3) / 4);
            animated.forEach(function(item){
                if((position) >= item.offsetTop){
                    item.classList.add(animationClass);
                }
                else{
                    item.classList.remove(animationClass);
                }
            })
        }   
    window.addEventListener('scroll', scrollAnimation);
    return(
        <main>
        {/* Home */}
        <section className="section" id="home">
            <div className="photo-container section-wrp">
                <img src={require('../../assets/images/photo.jpeg')} alt="Foto" />
                <h2>Felipe Baloneker</h2>
                <h3><span>Desenvolvedor Web</span></h3>
                <Typing speed={60}>
                    <p>
                        Desenvolvimento de Web Sites
                        <Typing.Backspace count={40}/>
                        Criação de Aplicações BackEnd
                        <Typing.Backspace count={40}/>
                        Criação de Aplicações FrontEnd
                    </p>
                </Typing>
            </div>
        </section>
        {/*  About */}
        <section className="section" id="about">
            <div className="section-wrp">
                <p><span>Descubra</span></p>
                <h2>Sobre Mim</h2>
                <div className='container text'>
                    <p>Olá me chamo Felipe Baloneker. Sou um Desenvolvedor Web atualmente moro no Rio de Janeiro
                    sou muito dedicado ao meu trabalho e sempre procuro aprender e partilhar conhecimento.</p>
                </div>
                <div className='container'>
                 <p><span>Habilidades:</span></p>
                    <div className="skills container-wrp" animation='left'>
                        {/* Js */}
                        <div className="skill">
                            <p>Javascript</p>
                            <span className="progress">
                                <span className="progress-bar"
                                style={{width:'70%'}}
                                ></span>
                            </span>
                        </div>
                        {/* Html5 */}
                        <div className="skill">
                            <p>Html5</p>
                            <span className="progress">
                                <span className="progress-bar"
                                style={{width:'80%'}}
                                ></span>
                            </span>
                        </div>
                        {/* Css */}
                        <div className="skill">
                            <p>Css3</p>
                            <span className="progress">
                                <span className="progress-bar"
                                style={{width:'80%'}}
                                ></span>
                            </span>
                        </div>
                        {/* ReactJs */}
                        <div className="skill">
                            <p>ReactJs</p>
                            <span className="progress">
                                <span className="progress-bar"
                                style={{width:'65%'}}
                                ></span>
                            </span>
                        </div>
                        {/* Nextjs */}
                        <div className="skill">
                            <p>NextJs</p>
                            <span className="progress">
                                <span className="progress-bar"
                                style={{width:'65%'}}
                                ></span>
                            </span>
                        </div>                       
                        {/* Vuejs */}
                        <div className="skill">
                            <p>VueJs</p>
                            <span className="progress">
                                <span className="progress-bar"
                                style={{width:'60%'}}
                                ></span>
                            </span>
                        </div>                       
                        {/* Nodejs */}
                        <div className="skill">
                            <p>NodeJs</p>
                            <span className="progress">
                                <span className="progress-bar"
                                style={{width:'70%'}}
                                ></span>
                            </span>
                        </div> 
                        
                        {/* Ts */}
                        <div className="skill">
                            <p>Typescript</p>
                            <span className="progress">
                                <span className="progress-bar"
                                style={{width:'60%'}}
                                ></span>
                            </span>
                        </div>                          
                        {/* TypeOrm */}
                        <div className="skill">
                            <p>TypeOrm</p>
                            <span className="progress">
                                <span className="progress-bar"
                                style={{width:'60%'}}
                                ></span>
                            </span>
                        </div> 
                                               
                        {/* Docker */}
                        <div className="skill">
                            <p>Docker</p>
                            <span className="progress">
                                <span className="progress-bar"
                                style={{width:'60%'}}
                                ></span>
                            </span>
                        </div>  

                        {/* Bs */}
                        <div className="skill">
                            <p>BootStrap</p>
                            <span className="progress">
                                <span className="progress-bar"
                                style={{width:'60%'}}
                                ></span>
                            </span>
                        </div>                         
                        {/* sql */}
                        <div className="skill">
                            <p>Sql</p>
                            <span className="progress">
                                <span className="progress-bar"
                                style={{width:'60%'}}
                                ></span>
                            </span>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
        {/* Services */}
        <section className="section" id="servicos">
            <div className="section-wrp">
                <p><span>O que faço?</span></p>
                <h2>Meus Serviços</h2>
                <div className="container">
                    <div className='container-wrp'>
                        <div className="service" animation='left'>
                            <img src={require('../../assets/images/esboco.png')} alt="Paginas imagem" />
                            <h2><span>Criação de WebPages</span></h2>
                            <p>Desenvolvimento de paginas com layout responsivo que podem ser visualizadas online.</p>
                        </div>
                        <div className="service"  animation='bottom'>
                            <img src={require('../../assets/images/planejamento.png')} alt="Banco de dados imagem" />
                            <h2><span>Costrução de DB</span></h2>
                            <p>Banco de Dados construidos para armazenar, classificar e recuperar informações</p>
                        </div>                        
                        <div className="service" animation='right'>
                            <img src={require('../../assets/images/monitor.png')} alt="interface Imagem" />
                            <h2><span>Design de Interface</span></h2>
                            <p>Layouts pensados na aparência e fluidez da navegação e na primeira impressão que o usuário terá ao entrar em contato. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Portfolio */}
        <section className='section' id='portfolio'>
            <div className="section-wrp">
                <p><span>Explore</span></p>
                <h2>Portfolio</h2>
                <div className="container">
                        {/* <a className='modal-btn' href="https://github.com/felipebaloneker/Tarefas_React">
                            <img src={require('../../assets/images/tarefas.png')} alt="projeto imagem" />
                        </a>
                        <a className='modal-btn' href="https://github.com/felipebaloneker/Chat-ReactJs">
                            <img src={require('../../assets/images/chatJs.png')} alt="projeto imagem" />
                        </a>
                        <a className='modal-btn' href="https://github.com/felipebaloneker/ConversorMoedas-Vuejs">
                            <img src={require('../../assets/images/conversor.gif')} alt="projeto imagem" />
                        </a> */}
                        <div className="box-wrp" animation='left'>
                            <div className='img-wrp'>
                                <a className='modal-btn' href="https://github.com/felipebaloneker/Chat-ReactJs">
                                    <img src={require('../../assets/images/chatJs.png')} alt="projeto imagem" />
                                </a>
                            </div>
                            <div className="text-wrp">
                                <div className="text-area">
                                    <h2>Project Name</h2>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam dolor, maxime unde pariatur iste sequi alias cumque tempore non vero suscipit dicta sapiente impedit modi, placeat temporibus aliquid, corrupti quibusdam.</p>
                                </div>
                            </div>
                        </div>
                        <div className="box-wrp right" animation='right'>
                            <div className='img-wrp'>
                                <a className='modal-btn' href="https://github.com/felipebaloneker/Tarefas_React">
                                    <img src={require('../../assets/images/tarefas.png')} alt="projeto imagem" />
                                </a>
                            </div>
                            <div className="text-wrp">
                                <div className="text-area">
                                    <h2>Project Name</h2>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam dolor, maxime unde pariatur iste sequi alias cumque tempore non vero suscipit dicta sapiente impedit modi, placeat temporibus aliquid, corrupti quibusdam.</p>
                                </div>
                            </div>
                        </div>
                        <div className="box-wrp" animation='left'>
                            <div className='img-wrp'>
                                <a className='modal-btn' href="https://github.com/felipebaloneker/Tarefas_React">
                                    <img src={require('../../assets/images/tarefas.png')} alt="projeto imagem" />
                                </a>
                            </div>
                            <div className="text-wrp">
                                <div className="text-area">
                                    <h2>Project Name</h2>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam dolor, maxime unde pariatur iste sequi alias cumque tempore non vero suscipit dicta sapiente impedit modi, placeat temporibus aliquid, corrupti quibusdam.</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
        {/* Contato */}
        <section className="section" id="contato">
            <div className="section-wrp">
                <p><span>Me encontre</span></p>
                <h2>Contato</h2>
                
            </div>
        </section>
      </main>
    )
}
export default Main;