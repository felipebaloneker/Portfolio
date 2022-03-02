import './styles.css'
import Typing from 'react-typing-animation';
function Main(){
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
                <div className='container'>
                    <p>Olá me chamo Felipe Baloneker. Sou um Desenvolvedor Web atualmente moro no Rio de Janeiro
                    sou muito dedicado ao meu trabalho e sempre procuro aprender e partilhar conhecimento.</p>
                </div>
                <div className='container'>
                 <p><span>Habilidades:</span></p>
                    <div className="skills">
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

      </main>
    )
}
export default Main;