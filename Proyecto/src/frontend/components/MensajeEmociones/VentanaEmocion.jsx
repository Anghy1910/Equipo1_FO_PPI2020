import React from "react";
import { Button, Modal, ModalHeader, ModalBody, FormGroup } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/MensajeEmociones/ventanaStyle.css";
import angry from "../../images/angry.png";
import bad from "../../images/bad.png";
import calm from "../../images/calm.png";
import disappointed from "../../images/disappointed.png";
import good from "../../images/good.png";
import happy from "../../images/happy.png";
import hi from "../../images/hi.png";
import normal from "../../images/normal.png";
import sad from "../../images/sad.png";
import shocked from "../../images/shocked.png";
import sick from "../../images/sick.png";
import sleeping from "../../images/sleeping.png";

class ventana extends React.Component {
  state = {
    abierto: false,
  };
  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto });
  };
  render() {
    return (
      <div>
        <div className="principal">
          <div className="secundario">
              <Button className="buttonvarios" onClick={this.abrirModal}>Mensaje</Button>
          </div>
        </div>
        <Modal isOpen={this.state.abierto}>
          <ModalHeader>
            <h1 className="tituloventanae">¿Como te sientes hoy?</h1>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <div className="row justify-content-center h-100">
                <table className="table" className="e">
                  <tr>
                    <td>
                      <button
                        className="EmocionBoton  btn-sm"
                        onClick={this.abrirModal}
                      >
                        <img className="img-fluid" src={angry} />
                      </button>
                    </td>
                    <td>
                      <button
                        className="EmocionBoton  btn-sm"
                        onClick={this.abrirModal}
                      >
                        <img className="img-fluid" src={bad} />
                      </button>
                    </td>
                    <td>
                      <button
                        className="EmocionBoton  btn-sm"
                        onClick={this.abrirModal}
                      >
                        <img className="img-fluid" src={calm} />
                      </button>
                    </td>
                    <td>
                      <button
                        className="EmocionBoton  btn-sm"
                        onClick={this.abrirModal}
                      >
                        <img className="img-fluid" src={disappointed} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button
                        className="EmocionBoton  btn-sm"
                        onClick={this.abrirModal}
                      >
                        <img className="img-fluid" src={good} />
                      </button>
                    </td>
                    <td>
                      <button
                        className="EmocionBoton  btn-sm"
                        onClick={this.abrirModal}
                      >
                        <img className="img-fluid" src={happy} />
                      </button>
                    </td>
                    <td>
                      <button
                        className="EmocionBoton  btn-sm"
                        onClick={this.abrirModal}
                      >
                        <img className="img-fluid" src={hi} />
                      </button>
                    </td>
                    <td>
                      <button
                        className="EmocionBoton  btn-sm"
                        onClick={this.abrirModal}
                      >
                        <img className="img-fluid" src={normal} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button
                        className="EmocionBoton btn-sm"
                        onClick={this.abrirModal}
                      >
                        <img className="img-fluid" src={sad} />
                      </button>
                    </td>
                    <td>
                      <button
                        className="EmocionBoton  btn-sm"
                        onClick={this.abrirModal}
                      >
                        <img className="img-fluid" src={shocked} />
                      </button>
                    </td>
                    <td>
                      <button
                        className="EmocionBoton  btn-sm"
                        onClick={this.abrirModal}
                      >
                        <img className="img-fluid" src={sick} />
                      </button>
                    </td>
                    <td>
                      <button
                        className="EmocionBoton  btn-sm"
                        onClick={this.abrirModal}
                      >
                        <img className="img-fluid" src={sleeping} />
                      </button>
                    </td>
                  </tr>
                </table>
              </div>
            </FormGroup>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default ventana;
