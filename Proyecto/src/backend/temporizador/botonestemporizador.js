import React, { Component } from 'react';

//iniciar o detenet el temporizador
export default class Botones_controladores extends Component {
  render() {
    return (
      <div className="controller row justify-content-center">
        <button id="start_stop" className="mr-5"  onClick={this.props.onStartStop}>
          {this.props.isStart ? 'Detener' : 'Empezar'}
        </button>
        <button id="reset" onClick={this.props.onReset}>Resetear</button>
      </div>
    )
  }
}