import React, { Component } from 'react';

//permite aumentar o disminuir el tiempo en el temporizador
export default class Controlador_tiempo extends Component {
  render() {
    const btnClassName = this.props.isStart ? 'desactivar' : '';
    return (
      <div className="settings">
        <div className="settings-section">
          <label id="break-label">Descanso</label>
          <div>
            <button className={btnClassName} id="break-decrement" onClick={this.props.onDecreaseBreak}>-</button>
            <span id="break-length">{this.props.breakLength}</span>
            <button className={btnClassName} id="break-increment" onClick={this.props.onIncreaseBreak}>+</button>
          </div>
        </div>
        <div className="settings-section">
          <label id="session-label">Sesion </label>
          <div>
            <button className={btnClassName} id="session-decrement" onClick={this.props.onDecreaseSession}>-</button>
            <span id="session-length">{this.props.sessionLength}</span>
            <button className={btnClassName} id="session-increment" onClick={this.props.onIncreaseSession}>+</button>
          </div>
        </div>
      </div>
    )
  }
}