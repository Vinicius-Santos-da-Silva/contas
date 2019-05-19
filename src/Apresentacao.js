import React from 'react';
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom'


function Apresentacao() {
  return (
    <div className="container">
    	<div className="mx-5">
    	
    		Apresentação do Sistema de Contas

    		<div className="d-grid">
    			<div class="btn-group btn-group-toggle d-grid" data-toggle="buttons">

				  	<Link to='/rendimento' className="mr-5">
				  		<p className="btn btn-secondary">
				    		Rendimento
				  		</p>
				  	</Link>


				  	<Link to='/compra' className="mr-5">
				  		<p className="btn btn-secondary">
				    		Compras
				  		</p>
				  	</Link>


				</div>
    		</div>
    	</div>
    </div>
  );
}

export default Apresentacao;
