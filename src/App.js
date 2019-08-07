import React from 'react';
import {HashRouter, Route,} from 'react-router-dom';
import Players from './containers/players';
import MyCamera from './containers/camera';






class App extends React.Component {
  render() {
    return (
       <HashRouter>
          <MyCamera />
         <Route path='/' component={Players} />  
         
       
       </HashRouter>
    
    );
  }
}

export default App;
