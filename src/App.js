import React from 'react';
import {HashRouter, Route,} from 'react-router-dom';
import Players from './containers/players';
import MyCamera from './containers/camera';
import User from './components/user'




class App extends React.Component {
  render() {
    return (
       <HashRouter>
          <MyCamera />
         <Route path='/' component={Players} />  
         <User />
       
       </HashRouter>
    
    );
  }
}

export default App;
