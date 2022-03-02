import './styles.css'
import Typing from 'react-typing-animation';
function Main(){
    return(
        <main>
        {/* Home */}
        <section className="section" id="home">
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
        </section>
        {/*  About */}
        <section className="section" id="about">
            <h2>About</h2>
        </section>

      </main>
    )
}
export default Main;