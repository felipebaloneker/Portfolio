import './styles.css'

function Main(){
    return(
        <main>
        <section className="section" id="home">
            <div className="photo-container">
                <img src={require('../../assets/images/photo.jpeg')} alt="Foto" />
                <h2>Felipe Baloneker</h2>
                <h3><span>Desenvolvedor Web</span></h3>
                <p>Criação de Aplicações FrontEnd</p>
            </div>
        </section>
      </main>
    )
}
export default Main;