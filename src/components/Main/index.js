import './styles.css'
import Typing from 'react-typing-animation';
import Service from '../Service'
import Skill from '../Skill'
import Projeto from '../Projeto';

function Main(){
    return(
        <main>
        {/* Home */}
        <section className="section" id="home">
            <div className="section-wrp">
                <div className="photo-container">
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
                        <Skill
                        name={'Javascript'}
                        progress={'70%'}
                        />
                        {/* Html5 */}
                        <Skill
                        name={'Html5'}
                        progress={'80%'}
                        />
                        {/* Css */}
                        <Skill
                        name={'Css'}
                        progress={'80%'}
                        />
                        {/* ReactJs */}
                        <Skill
                        name={'ReactJs'}
                        progress={'65%'}
                        />
                        {/* Nextjs */}
                        <Skill
                        name={'Javascript'}
                        progress={'65%'}
                        />                      
                        {/* Vuejs */}
                        <Skill
                        name={'VueJs'}
                        progress={'60%'}
                        />                       
                        {/* Nodejs */}
                        <Skill
                        name={'NodeJs'}
                        progress={'70%'}
                        />
                        
                        {/* Ts */}
                        <Skill
                        name={'TypeScript'}
                        progress={'65%'}
                        />                       
                        {/* TypeOrm */}
                        <Skill
                        name={'TypeOrm'}
                        progress={'60%'}
                        />
                        {/* Docker */}
                        <Skill
                        name={'Docker'}
                        progress={'60%'}
                        />

                        {/* Bs */}
                        <Skill
                        name={'BootStrap'}
                        progress={'60%'}
                        />                        
                        {/* sql */}
                        <Skill
                        name={'Sql'}
                        progress={'60%'}
                        />
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
                        <Service
                        image={require('../../assets/images/esboco.png')}
                        title={'Criação de WebPages'}
                        text={'Desenvolvimento de paginas com layout responsivo que podem ser visualizadas online.'}
                        />
                        <Service
                        image={require('../../assets/images/planejamento.png')}
                        title={'Costrução de DB'}
                        text={'Banco de Dados construidos para armazenar, classificar e recuperar informações.'}
                        />   
                        <Service
                        image={require('../../assets/images/monitor.png')}
                        title={'Design de Interface'}
                        text={'Layouts pensados na aparência e fluidez da navegação e na primeira impressão que o usuário terá ao entrar em contato.'}
                        />
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
                        <Projeto
                        link={"https://github.com/felipebaloneker/Chat-ReactJs"}
                        image={require('../../assets/images/chatJs.png')}
                        title={'Projeto'}
                        text={'Projeto text'}
                        />
                        <Projeto
                        link={"https://github.com/felipebaloneker/Tarefas_React"}
                        image={require('../../assets/images/chatJs.png')}
                        title={'Projeto'}
                        text={'Projeto text'}
                        />
                        <Projeto
                        link={"https://github.com/felipebaloneker/Tarefas_React"}
                        image={require('../../assets/images/tarefas.png')}
                        title={'Projeto'}
                        text={'Projeto text'}
                        />
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