import React, { Component } from 'react'
import Proyecto1 from './Proyecto1'

export default class App extends Component {
  render() {
    return (
      <div className='conteiner'>
        <div className='row'>
          <div className='col-1'></div>
          <div className='col-10 bg-light'>
            <p className='display-3'>Ejemplos de proyectos</p>
            <p className='display-5'>0.1.0</p>
            <p>Aux: Oscar Roberto Velásquez León</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-1'></div>
          <div className='col-10 bg-light'>
            <Proyecto1></Proyecto1>
          </div>
        </div>
      </div>
    )
  }
}
