import './styles/global.css';
import './styles/app.css'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  return (
    <div className="App">
      <div className="content-wrp">
          <Header/>
          <Main/>
      </div>
    </div>
  );
}

export default App;
