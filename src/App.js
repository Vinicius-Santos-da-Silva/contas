import React, { Component } from 'react'

import { 
  BrowserRouter as Router ,
  Route,Link
} from 'react-router-dom'

import Home from './Home'
import Compra from './Compra'



class App extends Component {
  render() {
    const Rendimento = () => <section className="intro-section" ><h1>Rendimento</h1></section>
    //const Compra = () => <section className="intro-section" ><h1>Compra</h1></section>

    
    return (

      <Router>
        <div>
          <Route  exact path='/' component={Home} />
          <Route  exact path='/compra' component={Compra} />
          <Route  exact path='/compra/:id' component={Compra} />
          <Route  exact path='/rendimento' component={Rendimento} />
        </div>
      </Router>
    );
  }
}

export default App;
