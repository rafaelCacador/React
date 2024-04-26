import "./App.css";
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";

function App() {
  return (
    //só entrega em um retorno
    //logo todos os elementos jsx devem estar dentro de um elemento (div por exemplo)
    // class do html é o className do React 
    <div className="App">
      <h1>Testando CSS</h1>
      <Pessoa nome = "Rafael" idade = "19" profissao = "Analista de TI" foto="eu.jpeg"/>
      <Frase/>
      <Frase/>
      <SayMyName nome="Rafael" />
      <SayMyName nome="Otávio" />
      <SayMyName nome="Ricardo" />
      <HelloWorld />
      
      
    </div>
  );
}

export default App;
