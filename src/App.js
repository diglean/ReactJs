import React from 'react';

const Bemvindo = (props) => {
    return(
        <div>
            <h2>Bem vindo(a), {props.nome}</h2>
            <h3>Tenho {props.idade} anos</h3>
        </div>
    );
}

function App(){
  return(
    <div>
      Olá Mundo!
      <Bemvindo nome="Diego" idade="20"/>
      <Bemvindo nome="Leandro" idade="21"/>
      <h1>Diglean</h1>
    </div>
  );
}

export default App;