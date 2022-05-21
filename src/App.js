import React, { Component} from 'react';
//import Membro from './components/Membro';
import Feed from './components/feed'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
        feed: [
          {id: 1, username: 'Diego', curtidas:10, comentarios:2},
          {id: 2, username: 'Leandro', curtidas:120, comentarios:22},
          {id: 3, username: 'Silva', curtidas:102, comentarios:32},
          {id: 4, username: 'Henrique', curtidas:1, comentarios:0}
        ]
    };

  }

    render(){
        return(
            <div>

                {this.state.feed.map((item)=>{
                  return(
                    <Feed id={item.id} username={item.username} curtidas={item.curtidas} comentarios={item.comentarios}/>
                  );
                })}

            </div>
            

        );
    }
}

export default App;