import React , { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom'

import api from './APIs';




class Contas extends Component {
  constructor(props){
    super(props)
    this.state = {
      compras: []
    }
  }

  componentDidMount(){
    api.allCompras()
      .then((res) => {
          console.log(res);
          this.setState({
            compras:res.data
          });

          //this.renderTable(res.data)
      })
  }

  renderTable(data){
    return(
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Loja</th>
              <th scope="col">Valor R$</th>
              <th scope="col">Nº Parcelas</th>
              <th scope="col">Ações</th>
            </tr>
            </thead>
            <tbody>

            {
              data.map((e)=>{
                console.log(e);
                return (
                  <tr>
                    <th scope="row">{e.id}</th>
                    <td>{e.loja}</td>
                    <td>{e.valor}</td>
                    <td>{e.numero_parcelas}</td>
                    <td>
                      <a href={'/compra/'+e.id} class="btn btn-outline-primary">Ver</a>
                    </td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
      </div>
    );
  }

  render(){
    return  this.renderTable(this.state.compras)
  }
}

export default Contas;
