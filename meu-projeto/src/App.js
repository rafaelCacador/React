import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const name = "Rafael";

  const url = "https://g1.globo.com/"
  return (
    //só entrega em um retorno
    //logo todos os elementos jsx devem estar dentro de um elemento (div por exemplo)
    <div className="App">  
{/* class do html é o className do React */}
     <h1>Olá JSX</h1>
     <p>Olá {name}</p>
     <img src = {url} alt = "Minha imagem"/>
     <HelloWorld></HelloWorld>
    </div>
    
  );
}

export default App;
