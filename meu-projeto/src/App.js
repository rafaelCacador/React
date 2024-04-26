import "./App.css";
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";

function App() {
  return (
    //só entrega em um retorno
    //logo todos os elementos jsx devem estar dentro de um elemento (div por exemplo)
    // class do html é o className do React 
    <div className="App">
      <Pessoa nome = "Rafael" idade = "19" profissao = "Analista de TI" foto="..\public\logo192.png"/>
      <SayMyName nome="Rafael" />
      <SayMyName nome="Otávio" />
      <SayMyName nome="Ricardo" />
      <HelloWorld />
      
    </div>
  );
}

export default App;
