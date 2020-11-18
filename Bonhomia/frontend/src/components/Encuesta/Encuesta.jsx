import React from 'react'; 
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import { Component } from 'react';
import 'survey-react/survey.css'
import * as Survey from 'survey-react';
import '../../styles/Generales/tipografias.css';
import TituloPrincipal from "../Generales/TituloPrincipal";
import TituloSecundario from "../Generales/TituloSecundario";
import BotonUsuario from '../InicioSesion/BotonUsuario';
import Espacio from "../Generales/Espacio";
import Exito from "../../images/Exito.png";
import "../../styles/Encuesta/encuesta.css";
Survey.StylesManager.applyTheme("boostrap");
class Cuestionario extends Component{
constructor(props){
    super(props)
    this.state={
    }
this.onCompleteComponent= this.onCompleteComponent.bind(this)
}
onCompleteComponent = () =>{
    this.setState({
        isCompleted:true
        }
    )
}
    render(){
        var json = {
        
            showProgressBar: "bottom",
            
            firstPageIsStarted: true,
            startSurveyText: "Empezar",
            pages: [
                {
                    questions: [
                        {
                            type: "html",
                            html: "Bienvenido en este cuestionario, evaluaremos tu inteligencia emocional"
                        }
                    ]
                }, {
                    questions: [
                        {
                            type: "radiogroup",
                            name: "Conocer las propias emociones",
                            title: "¿Conozco que emociones afectan mi estado de ánimo? ",
                            choices: [
                                "Si, ya las he experimentado y se cómo afrontarlas", "Tal vez, no me fijo mucho en las causas de mis emociones", "No, no suelo analizar mi estado de ánimo o la emoción que lo ocasiona", 
                            ],
                          
                            correctAnswer: "1850-1900"
                        }
                    ]
                }, 
                
                
                {
                    questions: [
                        {
                            type: "radiogroup",
                            name: "Conocer las propias emociones",
                            title: "¿Como reacciono cuando debo esperar por mucho tiempo?",
                            choices: [
                                    "Tengo paciencia", "Intento tener paciencia, pero luego me impaciento","Soy impaciente"
                            ],
                            correctAnswer: "Patrick Henry"
                        }
                    ]
                }, {
                  
                    questions: [
                        {
                            type: "radiogroup",
                            name: "Conocer las propias emociones",
                            title: "¿Suelo pensar en mis emociones?",
                            choices: [
                                "Si, para conocer la razón de estas", "A veces, no pienso mucho en ello", "No me gusta pensar en mis emociones"
                            ],
                            correctAnswer: "The foundation of the British parliamentary system"
                        }
                    ]
                }, {
                    questions: [
                        {
                            type: "radiogroup",
                            name: "Manejar las emociones",
                            title: "Cuando estoy angustiado ¿Cómo manejo las cosas? ",
                            choices: [
                                "Intento calmarme y pensar en soluciones", "Siento que no puedo con todo", "No se sobrellevar la situación ", 
                            ],
                          
                            correctAnswer: "1850-1900"
                        }
                    ]
                }, {
                    questions: [
                        {
                            type: "radiogroup",
                            name: "Manejar las emociones",
                            title: "¿Qué hago cuándo estoy en situaciones nuevas e inesperadas? ",
                            choices: [
                                "Analizo la situación e intento adaptarme", "No sé cómo reaccionar ", "Me dan miedo, pero las intento enfrentar ", 
                            ],
                          
                            correctAnswer: "1850-1900"
                        }
                    ]
                }, {
                    questions: [
                        {
                            type: "radiogroup",
                            name: "Manejar las emociones",
                            title: "¿Dejo que mis emociones afecten mis pensamientos?",
                            choices: [
                                "No, suelo actuar racionalmente", "Algunas veces me dejo llevar por mis emociones", "Normalmente soy impulsivo y dejo que me afecten", 
                            ],
                          
                            correctAnswer: "1850-1900"
                        }
                    ]
                }, {
                    questions: [
                        {
                            type: "radiogroup",
                            name: "La propia motivación",
                            title: "¿Cuándo una situación no sale como quiero, que hago?",
                            choices: [
                                "Analizo lo sucedido y aprendo de la situación", "Me siento responsable independiente de las causas", "No hago nada", 
                            ],
                          
                            correctAnswer: "1850-1900"
                        }
                    ]
                },{
                    questions: [
                        {
                            type: "radiogroup",
                            name: "La propia motivación",
                            title: "¿Cuándo una actividad no me interesa…?",
                            choices: [
                                "Intento hacerla lo mejor posible, así necesite un mayor esfuerzo", "No la hago de la mejor manera", "No la realizo", 
                            ],
                          
                            correctAnswer: "1850-1900"
                        }
                    ]
                },{
                    questions: [
                        {
                            type: "radiogroup",
                            name: "La propia motivación",
                            title: "¿Cuándo pienso en mi futuro, creo que…?",
                            choices: [
                                "Voy a dar lo mejor de mí mismo", "Tengo dudas respecto a mi futuro", "Únicamente pienso en mi presente", 
                            ],
                          
                            correctAnswer: "1850-1900"
                        }
                    ]
                },{
                    questions: [
                        {
                            type: "radiogroup",
                            name: "Conocer las emociones de los demás",
                            title: "¿Me resulta difícil entender las emociones de los demás?",
                            choices: [
                                "No, soy muy empático con los demás", "No, pero no me involucro en los problemas de otros", "Si, se me dificulta comprender a los demás", 
                            ],
                          
                            correctAnswer: "1850-1900"
                        }
                    ]
                },{
                    questions: [
                        {
                            type: "radiogroup",
                            name: "Conocer las emociones de los demás",
                            title: "¿Cómo reacciono al discutir con los demás?",
                            choices: [
                                "Me pongo en los zapatos del otro", "Escucho la opinión del otro y doy mi opinión ", "Sigo insistiendo en mi posición y no busco llegar a un acuerdo", 
                            ],
                          
                            correctAnswer: "1850-1900"
                        }
                    ]
                },{
                    questions: [
                        {
                            type: "radiogroup",
                            name: "Conocer las emociones de los demás",
                            title: "¿Suelo involucrarme en los problemas de las personas?",
                            choices: [
                                "Si, quiero ayudarlos y entenderlos", "Si, pero no sé cómo entenderlos y ayudarlos", "No, no me interesan las demás personas", 
                            ],
                          
                            correctAnswer: "1850-1900"
                        }
                    ]
                },{
                        questions: [
                            {
                                type: "radiogroup",
                                name: "Manejar las relaciones",
                                title: "¿Cómo suelo relacionarme con los demás?",
                                choices: [
                                    "Me gusta crear nuevas amistades y soy buena relacionándome", "Quiero tener amigos confiables", "Se me dificulta relacionarme con las personas", 
                                ],
                              
                                correctAnswer: "1850-1900"
                            }
                        ]
                    },{
                            questions: [
                                {
                                    type: "radiogroup",
                                    name: "Manejar las relaciones",
                                    title: "Cuando hay una discusión ¿te importa más ganarla que evitar sentir al otro mal?",
                                    choices: [
                                        "Me interesa escuchar al otro y propongo una posible solución para ambos", "Soy indiferente ante la situación ", "No me importa el otro, quiero ganar la discusión", 
                                    ],
                                  
                                    correctAnswer: "1850-1900"
                                }
                            ]
                        },{
                                questions: [
                                    {
                                        type: "radiogroup",
                                        name: "Manejar las relaciones",
                                        title: "¿Cuándo hago un trabajo en equipo, prefiero tener la razón que ser cooperativo?",
                                        choices: [
                                            "Me gusta trabajar en equipo y colaborar ", "Prefiero tener la razón, pero hablar las opciones con mi equipo", "Prefiero no dar mis opiniones y hacer el trabajo por mi cuenta", 
                                        ],
                                      
                                        correctAnswer: "1850-1900"
                                    }
                                ]
                            },
                        ],
        };
            var surveyRender = !this.state.isCompleted ?(
                <Survey.Survey
                json={json}
                showCompletedPage={false}
                onComplete={this.onCompleteComponent}/>
            ) : null;
    
var onSurveyCompletion = this.state.isCompleted ? (
    <div><Espacio /><TituloPrincipal TituloPrincipal='Finalizaste la encuesta con éxito' />  
    <TituloSecundario Class="TituloSecundario" TituloSecundario="Tienes un buen manejo de tu inteligencia emocional, felicitaciones"/>
    <div className="row col-sm justify-content-center">
        <img src={Exito} className="Exitoencuesta img-fluid" />
    </div>
    <Espacio />
    <Link to="/bonhomia/inicio"><BotonUsuario Button="Finalizar" /></Link></div>
): null;
        return(
<div>
{surveyRender}
{onSurveyCompletion}
</div>
        );
    }
}

export default Cuestionario;