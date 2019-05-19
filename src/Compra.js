import React , { Component } from   'react'
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom'

import api from './APIs';

import Menu from './Menu';


class Compra extends Component{

  constructor(props){
    super(props)
    this.state = {
      loja: '',
      tipo_pagamento:0,
      modo_pagamento:0,
      numero_parcelas:1,
      valor:0.0
    }
    this.handleChangeTipoPagamento = this.handleChangeTipoPagamento.bind(this)
    this.handleChangeModoPagamento = this.handleChangeModoPagamento.bind(this)
    this.salvar = this.salvar.bind(this)
    this.changeLoja = this.changeLoja.bind(this)
    this.changeValor = this.changeValor.bind(this)
    this.changeParcelas = this.changeParcelas.bind(this)
    this.renderAVista = this.renderAVista.bind(this)

  }

  componentDidMount(){

    if (this.props.match.params.id) {
      const cd_compra = this.props.match.params.id

      api.comprasById(cd_compra)
      .then((data)=>{
        console.log(data);
        this.setState({
          loja: data.data[0].loja,
          tipo_pagamento:data.data[0].tipo_pagamento,
          modo_pagamento:data.data[0].tipo_pagamento,
          numero_parcelas:data.data[0].numero_parcelas,
          valor:data.data[0].valor
        });
      })
    }

  }

  handleChangeTipoPagamento(){    
    this.setState({
      tipo_pagamento: Number(this.refs.tipopgto.value),
      modo_pagamento: 0,
    });

    //alert(this.state.tipo_pagamento);
  }

  handleChangeModoPagamento(){
    this.setState({
      modo_pagamento: Number(this.refs.modopgto.value),
    });
  }

  buttonSalvar(){
    return(
      <div>
        <button type="button" onClick={this.salvar} className="btn btn-primary">Salvar</button>
      </div>
    );
  }

  changeLoja(){
    this.setState({
      loja:this.refs.loja.value
    });
  }

  changeValor(){
    this.setState({
      valor:parseFloat(this.refs.valor.value)
    });
  }

  changeParcelas(){
    this.setState({
      numero_parcelas:Number(this.refs.num_parcelas.value)
    });
  }

  renderDinheiro(){
    return(
      <div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Valor</span>
          </div>
          <input type="text" className="form-control" ref='valor' value={this.state.valor} onChange={this.changeValor} placeholder="Ex: 120,00" aria-label="Valor" aria-describedby="basic-addon1"/>
        </div>
        {
          this.buttonSalvar()
        }
      </div>
    );
  }

  renderCartao(){
    return(
      <div>
        <div className="input-group mt-3 mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" for="inputGroupSelect01">Modo de Pagamento</label>
            </div>
            <select className="custom-select" ref='modopgto' onChange={this.handleChangeModoPagamento} value={this.state.modo_pagamento} id="inputGroupSelect01">
            <option>Selecione...</option>
            <option value="1">Á Vista</option>
            <option value="2">Parcelado</option>
            <option value="3">Debito</option>
          </select>
        </div>
      </div>
    );
  }


  renderAVista(){
    return(
      <div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Valor</span>
          </div>
          <input type="text" className="form-control" onChange={this.changeValor} ref='valor' value={this.state.valor} placeholder="Ex: 120,00" aria-label="Valor" aria-describedby="basic-addon1"/>
        </div>
        {
          this.buttonSalvar()
        }
        
      </div>
    );
  }

  renderParcelado(){
    return(
      <div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Valor</span>
          </div>
          <input type="text" className="form-control" ref='valor' onChange={this.changeValor} value={this.state.valor}placeholder="Ex: 120,00" aria-label="Valor" aria-describedby="basic-addon1"/>
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Nº Parcelas</span>
          </div>
          <input type="text" className="form-control" ref='num_parcelas' onChange={this.changeParcelas} value={this.state.numero_parcelas} placeholder="Ex: 5" aria-label="num_parcelas" aria-describedby="basic-addon1"/>
        </div>
        {
          this.buttonSalvar()
        }
      </div>
    );
  }

  renderDebito(){
    return(
      <div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Valor</span>
          </div>
          <input type="text" className="form-control" ref='valor'  onChange={this.changeValor}  value={this.state.valor}placeholder="Ex: 120,00" aria-label="Valor" aria-describedby="basic-addon1"/>
        </div>
        {
          this.buttonSalvar()
        }
      </div>
    );
  }

  salvar(){
    if (this.state.loja && this.state.valor) {
      console.log(this.state);

      api.compra(this.state)
        .then((res) => {
          console.log(res);
          if (res.status === 200) 
            window.location.reload();
        })
    }else{
      alert('Preencha todos os campos.');
    }
  }

  render(){
    return (
      <div>
        <Menu />
        <div className="container mt-5">          
          	<div className="mx-5 form-group">

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">Loja</span>
                </div>
                <input type="text" className="form-control"  ref='loja' onChange={this.changeLoja} value={this.state.loja} placeholder="Ex: Ponto Frio" aria-label="Loja" aria-describedby="basic-addon1"/>
              </div>

              <div className="input-group mt-3 mb-3">
                <div className="input-group-prepend">
                  <label className="input-group-text" for="inputGroupSelect01">Tipo de Pagamento</label>
                </div>
                <select className="custom-select" ref='tipopgto' onChange={this.handleChangeTipoPagamento} value={this.state.tipo_pagamento} id="inputGroupSelect01">
                  <option>Selecione...</option>
                  <option value="1">Dinheiro</option>
                  <option value="2">Cartão</option>
                </select>
              </div>
              {
                this.state.tipo_pagamento == 1 && this.renderDinheiro()
              }
              {
                this.state.tipo_pagamento == 2 && this.renderCartao()
              }
              {
                this.state.modo_pagamento == 1 && this.renderAVista()
              }
              {
                this.state.modo_pagamento == 2 && this.renderParcelado()
              }
              {
                this.state.modo_pagamento == 3 && this.renderDebito()
              }


          	</div>
        </div>
      </div>
    );
  }
}

export default Compra;
