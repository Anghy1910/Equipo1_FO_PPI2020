import React, { Component } from 'react';
import Controlador_tiempo from './controltiempo';
import Tiempo from './tiempo';
import Botonoes_controlador from './botonestemporizador';
import '../../styles/Temporizador/stylestemporizador.css';


//FUNCIONES Y ESTADOS
export default class FuncionTemporizador extends React.Component {
  constructor(props) {
    super(props);

    //createRef recibir el elemento DOM
    this.beep = React.createRef();

    this.state = {
      breakLength: Number.parseInt(this.props.defaultBreakLength, 10),
      sessionLength: Number.parseInt(this.props.defaultSessionLength, 10),
      timeLabel: 'Sesión',
      timeLeftInSecond: Number.parseInt(this.props.defaultSessionLength, 10) * 60,
      isStart: false,
      timerInterval: null
    }

    this.onIncreaseBreak = this.onIncreaseBreak.bind(this);
    this.onDecreaseBreak = this.onDecreaseBreak.bind(this);
    this.onIncreaseSession = this.onIncreaseSession.bind(this);
    this.onDecreaseSession = this.onDecreaseSession.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onStartStop = this.onStartStop.bind(this);
    this.decreaseTimer = this.decreaseTimer.bind(this);
    this.phaseControl = this.phaseControl.bind(this);
  }
//METODO INCREMENTO COMPONENTE BREAK
  onIncreaseBreak() {
    if (this.state.breakLength < 60 && !this.state.isStart) {
      this.setState({
        breakLength: this.state.breakLength + 1
      });
    }
  }
//METODO DECREMENTO COMPOENTE BREAK
  onDecreaseBreak() {
    if (this.state.breakLength > 1 && !this.state.isStart) {
      this.setState({
        breakLength: this.state.breakLength - 1
      });
    }
  }
//METODO INCREMENTO COMPONENTE SESSION
  onIncreaseSession() {
    if (this.state.sessionLength < 60 && !this.state.isStart) {
      this.setState({
        sessionLength: this.state.sessionLength + 1,
        timeLeftInSecond: (this.state.sessionLength + 1) * 60
      });
    }
  }
//METODO DECREMENTO COMPONENTE SESSION
  onDecreaseSession() {
    if (this.state.sessionLength > 1 && !this.state.isStart) {
      this.setState({
        sessionLength: this.state.sessionLength - 1,
        timeLeftInSecond: (this.state.sessionLength - 1) * 60
      });
    }
  }
//METODO RESET 
  onReset() {
    this.setState({
      breakLength: Number.parseInt(this.props.defaultBreakLength, 10),
      sessionLength: Number.parseInt(this.props.defaultSessionLength, 10),
      timeLabel: 'Sesión',
      timeLeftInSecond: Number.parseInt(this.props.defaultSessionLength, 10) * 60,
      isStart: false,
      timerInterval: null
    });
    this.beep.current.pause();
    this.beep.current.currentTime = 0;
    this.state.timerInterval && clearInterval(this.state.timerInterval);
  }

  
//METODO START - STOP
  onStartStop() {
    if (!this.state.isStart) {
      this.setState({
        isStart: !this.state.isStart,
        timerInterval: setInterval(() => {
          this.decreaseTimer();
          this.phaseControl();
        }, 1000)
      })
    } else {
  
      this.beep.current.pause();
      this.beep.current.currentTime = 0;
      this.state.timerInterval && clearInterval(this.state.timerInterval);

      this.setState({
        isStart: !this.state.isStart,
        timerInterval: null
      });
    }
  }

  decreaseTimer() {
    this.setState({
      timeLeftInSecond: this.state.timeLeftInSecond - 1
    });
  }

  phaseControl() {
    if (this.state.timeLeftInSecond === 0) {
      this.beep.current.play();
    } else if (this.state.timeLeftInSecond === -1) {
      if (this.state.timeLabel === 'Sesión') {
        this.setState({
          timeLabel: 'Descanso',
          // timeLeftInSecond: this.state.pause,
          timeLeftInSecond: this.state.breakLength * 60
          // timeLeftInSecond: this.state.breakLength * 60

        });
      } else {
        this.setState({
          timeLabel: 'Sesión',
          timeLeftInSecond: this.state.sessionLength * 60
        });
      }
    }
  }

  render() {
    return (
      <div className="temporizador">
        <div className="temporizador-header">
        </div>

        <Controlador_tiempo
          breakLength={this.state.breakLength}
          sessionLength={this.state.sessionLength}
          isStart={this.state.isStart}
          onDecreaseBreak={this.onDecreaseBreak}
          onDecreaseSession={this.onDecreaseSession}
          onIncreaseBreak={this.onIncreaseBreak}
          onIncreaseSession={this.onIncreaseSession}
        />

        <Tiempo
          timeLabel={this.state.timeLabel}
          timeLeftInSecond={this.state.timeLeftInSecond}
        />

        <Botonoes_controlador 
          onReset={this.onReset}
          onStartStop={this.onStartStop}
          isStart={this.state.isStart}
        />

<audio id="beep" preload="auto" src="https://goo.gl/65cBl1" ref={this.beep}></audio>

      </div>
    );
  }
}
