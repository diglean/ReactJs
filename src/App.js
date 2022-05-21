import React from 'react';

const Equipe = (props) => {
  return(
    <div>
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
      <Social ig={props.insta}/>
    </div>
  );
}

const Sobre = (props) => {
  return(
    <div>
      <h2>Olá, sou o(a) {props.nome}</h2>
      <h3>Cargo: {props.cargo}</h3>
      <h3>idade: {props.idade}</h3>
      
      
    </div>
  );
}

const Social = (props) => {
  return(
    <div>
      <a>Github </a>
      <a href={props.ig}>Instagram </a>
      <a>Facebook </a>
      <hr/>
    </div>
  );
}


function App(){
  return(
    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe nome="Diego" cargo="Programador" idade="20" insta="https://instagram.com/diglean"/>
      <Equipe nome="Guilherme" cargo="QA" idade="21" insta="https://google.com"/>
      <Equipe nome="José" cargo="Programador" idade="32" insta="https://google.com"/>
    </div>
  );
}

export default App;