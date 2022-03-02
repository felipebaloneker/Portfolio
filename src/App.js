import './styles/global.css';
import './styles/app.css'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <div className="content-wrp">
          <Header/>
        <main>
          <section className="section" id="home">
          </section>
          <section className="section" id="about">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit officia nostrum quaerat sapiente ex ipsa, totam eos necessitatibus enim, non architecto dolore accusantium cupiditate corrupti reprehenderit excepturi provident error nisi!</p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
