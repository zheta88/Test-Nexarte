import React from "react";
import { Component } from "react";
import './App.css';

export class App extends Component{
  constructor(props) {
    super(props);
    this.state = {operacion:0,operando1:'', operando2: ''};
    this.resultado=null;
    this.repeticiones();
    this.unirArrays();
  }

  
  onInputChange = (operando,val) => {
    console.log(this.state);
    if(operando === 'operando1')
      this.setState({...this.state, operando1: parseInt(val)});
    else if(operando === 'operando2')
      this.setState({...this.state, operando2: parseInt(val)});
  }

  calcular =()=>{
    const message = document.getElementById("res");
    message.innerHTML = "";
      if(this.state.operacion==0){
        alert("Seleccione operacion a realizar");
        this.setState({...this.state});
      }
      else if(this.state.operacion==='1'){
        this.resultado = (this.state.operando1+this.state.operando2);
        this.setState({...this.state});
      }
      else if(this.state.operacion==='2'){
        this.resultado = (this.state.operando1-this.state.operando2);
        this.setState({...this.state});
      }
      else if(this.state.operacion==='3'){
        this.resultado = (this.state.operando1*this.state.operando2);
        this.setState({...this.state});
      }
      else if(this.state.operacion==='4'){
        this.resultado = (this.state.operando1/this.state.operando2);
        this.setState({...this.state});
      }
    try { 
      if(this.state.operando1=== "" || this.state.operando2=== "")  throw "Ingrese valores";
    }
    catch(err) {
      message.innerHTML =  err;
    }
   
  }

  repeticiones =()=>{
    this.listaCiudades = ["Medellin","Bogota","Cali","Bogota","Medellin","Bogota","Medellin","Bogota","Cali","Bogota","Neiva","Bogota","Cali","Bogota","Medellin"];
    const conteos ={};
    for(let ciudad of this.listaCiudades){
      if(!conteos[ciudad])
        conteos[ciudad] = 1;
      else conteos[ciudad]++;
      conteos[ciudad]++
    }
    this.listaCiudades.sort( ( a, b) => {
      if((conteos[b] - conteos[a]) !== 0)
        return (conteos[b] - conteos[a]); 
    });
    this.listaCiudadesNuevo = new Set(this.listaCiudades);
    this.listaCiudadesNuevo = [...this.listaCiudadesNuevo]
    
  }
  unirArrays =()=>{
    this.arrayDeNumeros = [[1, 2], [3, 4], [5, 6]]; 
    
  }

  render(){
    return (
      <div className="App">
        <div className="card">
        <h5 className="card-header">Ejercicio 1</h5>
          <div className="form-group">
            <select className="custom-select" onChange={event => this.setState({...this.state,operacion:event.target.value})}>
            <option value="0">Elija Operacion</option>
              <option value="1">Sumar</option>
              <option value="2">Restar</option>
              <option value="3">Multiplicar</option>
              <option value="4">Dividir</option>
            </select>
          </div>
          <input className="input" type="number" value={this.state.operando1} onChange={(event) => this.onInputChange('operando1',event.target.value)}/>
          <input className="input" type="number" value={this.state.operando2} onChange={(event) => this.onInputChange('operando2',event.target.value)}/>
          <span id="res">{this.resultado}</span>
          <button className="button" onClick={this.calcular}>Calcular</button>
        </div>
        <div className="card">
          <h5 className="card-header">Ejercicio 2</h5>
          <div className="card-body">
            <h5 className="card-title">Listado de ciudades en orden de repeticiones:</h5>
            <p className="card-text"></p>
            <ul>
              {this.listaCiudadesNuevo.map((item,idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>
        </div>
        <div className="card">
          <h5 className="card-header">Ejercicio 3</h5>
          <div className="card-body">
            <h5 className="card-title">Arreglo unificado</h5>
            <p className="card-text"></p>
            <ul>
              {this.listaCiudadesNuevo.map((item,idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>
        </div>
        
      </div>
      

    );
       
  }
  
}

export default App;
