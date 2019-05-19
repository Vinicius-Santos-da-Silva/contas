import React from 'react';
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom'

import Menu from './Menu';
import Contas from './Contas';
import Apresentacao from './Apresentacao';


function Home() {
  return (

    <div>
      <Menu />
      <Apresentacao/>
      <Contas />
    </div>
  );
}

export default Home;
