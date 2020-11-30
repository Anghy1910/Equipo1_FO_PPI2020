import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../../styles/Encuesta/formulario.css';
import '../../styles/Generales/tipografias.css';
import imgEncuesta from '../../images/imgencuesta.png';

export default function Encuesta() {

	const peticionPost = async () => {
		console.log('hola')
		console.log(score)
		await axios
			.post('http://localhost:4000/api/encuesta', {score})
			.then((response) => {
				console.log(response)
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	const questions = [
		{
			questionText: '¿Conozco que emociones afectan mi estado de ánimo?',
			answerOptions: [
				{ answerText: 'Si, ya las he experimentado y se cómo afrontarlas', isCorrect: 'Si, ya las he experimentado y se cómo afrontarlas' },
				{ answerText: 'Tal vez, no me fijo mucho en las causas de mis emociones', isCorrect: 'Tal vez, no me fijo mucho en las causas de mis emociones' },
				{ answerText: 'No, no suelo analizar mi estado de ánimo o la emoción que lo ocasiona', isCorrect: 'No, no suelo analizar mi estado de ánimo o la emoción que lo ocasiona' }
			],
		},
		{
			questionText: '¿Como reacciono cuando debo esperar por mucho tiempo?',
			answerOptions: [
				{ answerText: 'Tengo paciencia', isCorrect: 'Tengo paciencia' },
				{ answerText: 'Intento tener paciencia, pero luego me impaciento', isCorrect: 'Intento tener paciencia, pero luego me impaciento' },
				{ answerText: 'Soy impaciente ', isCorrect: 'Soy impaciente ' }
			],
		},
		{
			questionText: '¿Suelo pensar en mis emociones?',
			answerOptions: [
				{ answerText: 'Si, para conocer la razón de estas', isCorrect: 'Si, para conocer la razón de estas' },
				{ answerText: 'A veces, no pienso mucho en ello', isCorrect: 'A veces, no pienso mucho en ello' },
				{ answerText: 'No me gusta pensar en mis emociones', isCorrect: 'No me gusta pensar en mis emociones' }
			],
		},
		{
			questionText: 'Cuando estoy angustiado, ¿Cómo manejo las cosas?',
			answerOptions: [
				{ answerText: 'Intento calmarme y pensar en soluciones', isCorrect: 'Intento calmarme y pensar en soluciones' },
				{ answerText: 'Siento que no puedo con todo', isCorrect: 'Siento que no puedo con todo' },
				{ answerText: 'No se sobrellevar la situación ', isCorrect: 'No se sobrellevar la situación' }
			],
		},
		{
			questionText: '¿Qué hago cuándo estoy en situaciones nuevas e inesperadas?',
			answerOptions: [
				{ answerText: 'Analizo la situación e intento adaptarme', isCorrect: 'Analizo la situación e intento adaptarme' },
				{ answerText: 'No sé cómo reaccionar ', isCorrect: 'No sé cómo reaccionar ' },
				{ answerText: 'Me dan miedo, pero las intento enfrentar ', isCorrect: 'Me dan miedo, pero las intento enfrentar' }
			],
		},
		{
			questionText: '¿Dejo que mis emociones afecten mis pensamientos?',
			answerOptions: [
				{ answerText: 'No, suelo actuar racionalmente', isCorrect: 'No, suelo actuar racionalmente' },
				{ answerText: 'Algunas veces me dejo llevar por mis emociones', isCorrect: 'Algunas veces me dejo llevar por mis emociones' },
				{ answerText: 'Normalmente soy impulsivo y dejo que me afecten', isCorrect: 'Normalmente soy impulsivo y dejo que me afecten' }
			],
		},
		{
			questionText: '¿Cuándo una situación no sale como quiero, que hago?',
			answerOptions: [
				{ answerText: 'Analizo lo sucedido y aprendo de la situación', isCorrect: 'Analizo lo sucedido y aprendo de la situación' },
				{ answerText: 'Me siento responsable independiente de las causas', isCorrect: 'Me siento responsable independiente de las causas' },
				{ answerText: 'No hago nada', isCorrect: 'No hago nada' }
			],
		},
		{
			questionText: '¿Cuándo una actividad no me interesa…?',
			answerOptions: [
				{ answerText: 'Intento hacerla lo mejor posible, así necesite un mayor esfuerzo', isCorrect: 'Intento hacerla lo mejor posible, así necesite un mayor esfuerzo' },
				{ answerText: 'No la hago de la mejor manera', isCorrect: 'No la hago de la mejor manera' },
				{ answerText: 'No la realizo', isCorrect: 'No la realizo' }
			],
		},
		{
			questionText: '¿Cuándo pienso en mi futuro, creo que…?',
			answerOptions: [
				{ answerText: 'Voy a dar lo mejor de mí mismo', isCorrect: 'Voy a dar lo mejor de mí mismo' },
				{ answerText: 'Tengo dudas respecto a mi futuro', isCorrect: 'Tengo dudas respecto a mi futuro' },
				{ answerText: 'Únicamente pienso en mi presente', isCorrect: 'Únicamente pienso en mi presente' }
			],
		},
		{
			questionText: '¿Me resulta difícil entender las emociones de los demás?',
			answerOptions: [
				{ answerText: 'No, soy muy empático con los demás', isCorrect: 'No, soy muy empático con los demás' },
				{ answerText: 'No, pero no me involucro en los problemas de otros', isCorrect: 'No, pero no me involucro en los problemas de otros' },
				{ answerText: 'Si, se me dificulta comprender a los demás', isCorrect: 'Si, se me dificulta comprender a los demás' }
			],
		},
		{
			questionText: '¿Cómo reacciono al discutir con los demás?',
			answerOptions: [
				{ answerText: 'Me pongo en los zapatos del otro ', isCorrect: 'Me pongo en los zapatos del otro ' },
				{ answerText: 'Escucho la opinión del otro y doy mi opinión ', isCorrect: 'Escucho la opinión del otro y doy mi opinión ' },
				{ answerText: 'Sigo insistiendo en mi posición y no busco llegar a un acuerdo', isCorrect: 'Sigo insistiendo en mi posición y no busco llegar a un acuerdo' }
			],
		},
		{
			questionText: '¿Suelo involucrarme en los problemas de las personas?',
			answerOptions: [
				{ answerText: 'Si, quiero ayudarlos y entenderlos', isCorrect: 'Si, quiero ayudarlos y entenderlos' },
				{ answerText: 'Si, pero no sé cómo entenderlos y ayudarlos', isCorrect: 'Si, pero no sé cómo entenderlos y ayudarlos' },
				{ answerText: 'No, no me interesan las demás personas', isCorrect: 'No, no me interesan las demás personas' }
			],
		},
		{
			questionText: '¿Cómo suelo relacionarme con los demás?',
			answerOptions: [
				{ answerText: 'Me gusta crear nuevas amistades y soy buena relacionándome', isCorrect: 'Me gusta crear nuevas amistades y soy buena relacionándome' },
				{ answerText: 'Quiero tener amigos confiables', isCorrect: 'Quiero tener amigos confiables' },
				{ answerText: 'Se me dificulta relacionarme con las personas', isCorrect: 'Se me dificulta relacionarme con las personas' }
			],
		},
		{
			questionText: 'Cuando hay una discusión ¿te importa más ganarla que evitar sentir al otro mal?',
			answerOptions: [
				{ answerText: 'Me interesa escuchar al otro y propongo una posible solución para ambos', isCorrect: 'Me interesa escuchar al otro y propongo una posible solución para ambos' },
				{ answerText: 'Soy indiferente ante la situación ', isCorrect: 'Soy indiferente ante la situación ' },
				{ answerText: 'No me importa el otro, quiero ganar la discusión', isCorrect: 'No me importa el otro, quiero ganar la discusión' }
			],
		},
		{
			questionText: '¿Cuándo hago un trabajo en equipo, prefiero tener la razón que ser cooperativo?',
			answerOptions: [
				{ answerText: 'Me gusta trabajar en equipo y colaborar ', isCorrect: 'Me gusta trabajar en equipo y colaborar ' },
				{ answerText: 'Prefiero tener la razón, pero hablar las opciones con mi equipo', isCorrect: 'Prefiero tener la razón, pero hablar las opciones con mi equipo' },
				{ answerText: 'Prefiero no dar mis opiniones y hacer el trabajo por mi cuenta', isCorrect: 'Prefiero no dar mis opiniones y hacer el trabajo por mi cuenta' }
			],
		}

	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect === 'Si, ya las he experimentado y se cómo afrontarlas') {
			setScore(score + 9);
		}
		if (isCorrect === 'Tal vez, no me fijo mucho en las causas de mis emociones') {
			setScore(score + 6);
		}
		if (isCorrect === 'No, no suelo analizar mi estado de ánimo o la emoción que lo ocasiona') {
			setScore(score + 3);
		}
		/* --------------------------- */
		if (isCorrect === 'Tengo paciencia') {
			setScore(score + 9);
		}
		if (isCorrect === 'Intento tener paciencia, pero luego me impaciento') {
			setScore(score + 6);
		}
		if (isCorrect === 'Soy impaciente ') {
			setScore(score + 3);
		}
		/* --------------------------- */
		if (isCorrect === 'Si, para conocer la razón de estas') {
			setScore(score + 9);
		}
		if (isCorrect === 'A veces, no pienso mucho en ello') {
			setScore(score + 6);
		}
		if (isCorrect === 'No me gusta pensar en mis emociones') {
			setScore(score + 3);
		}
		/* --------------------------- */
		if (isCorrect === 'Intento calmarme y pensar en soluciones') {
			setScore(score + 9);
		}
		if (isCorrect === 'Siento que no puedo con todo') {
			setScore(score + 6);
		}
		if (isCorrect === 'No se sobrellevar la situación ') {
			setScore(score + 3);
		}
		/* --------------------------- */
		if (isCorrect === 'Analizo la situación e intento adaptarme') {
			setScore(score + 9);
		}
		if (isCorrect === 'No sé cómo reaccionar ') {
			setScore(score + 6);
		}
		if (isCorrect === 'Me dan miedo, pero las intento enfrentar') {
			setScore(score + 3);
		}
		/* --------------------------- */
		if (isCorrect === 'No, suelo actuar racionalmente') {
			setScore(score + 9);
		}
		if (isCorrect === 'Algunas veces me dejo llevar por mis emociones') {
			setScore(score + 6);
		}
		if (isCorrect === 'Normalmente soy impulsivo y dejo que me afecten') {
			setScore(score + 3);
		}
		/* --------------------------- */
		if (isCorrect === 'Analizo lo sucedido y aprendo de la situación') {
			setScore(score + 9);
		}
		if (isCorrect === 'Me siento responsable independiente de las causas') {
			setScore(score + 6);
		}
		if (isCorrect === 'No hago nada') {
			setScore(score + 3);
		}
		/* --------------------------- */
		if (isCorrect === 'Intento hacerla lo mejor posible, así necesite un mayor esfuerzo') {
			setScore(score + 9);
		}
		if (isCorrect === 'No la hago de la mejor manera') {
			setScore(score + 6);
		}
		if (isCorrect === 'No la realizo') {
			setScore(score + 3);
		}
		/* --------------------------- */
		if (isCorrect === 'Voy a dar lo mejor de mí mismo') {
			setScore(score + 9);
		}
		if (isCorrect === 'Tengo dudas respecto a mi futuro') {
			setScore(score + 6);
		}
		if (isCorrect === 'Únicamente pienso en mi presente') {
			setScore(score + 3);
		}
		/* --------------------------- */
		if (isCorrect === 'No, soy muy empático con los demás') {
			setScore(score + 9);
		}
		if (isCorrect === 'No, pero no me involucro en los problemas de otros') {
			setScore(score + 6);
		}
		if (isCorrect === 'Si, se me dificulta comprender a los demás') {
			setScore(score + 3);
		}
		/* --------------------------- */
		if (isCorrect === 'Me pongo en los zapatos del otro ') {
			setScore(score + 9);
		}
		if (isCorrect === 'Escucho la opinión del otro y doy mi opinión ') {
			setScore(score + 6);
		}
		if (isCorrect === 'Sigo insistiendo en mi posición y no busco llegar a un acuerdo') {
			setScore(score + 3);
		}
		/* --------------------------- */
		if (isCorrect === 'Si, quiero ayudarlos y entenderlos') {
			setScore(score + 9);
		}
		if (isCorrect === 'Si, pero no sé cómo entenderlos y ayudarlos') {
			setScore(score + 6);
		}
		if (isCorrect === 'No, no me interesan las demás personas') {
			setScore(score + 3);
		}
		/* --------------------------- */
		if (isCorrect === 'Me gusta crear nuevas amistades y soy buena relacionándome') {
			setScore(score + 9);
		}
		if (isCorrect === 'Quiero tener amigos confiables') {
			setScore(score + 6);
		}
		if (isCorrect === 'Se me dificulta relacionarme con las personas') {
			setScore(score + 3);
		}
		/* --------------------------- */
		if (isCorrect === 'Me interesa escuchar al otro y propongo una posible solución para ambos') {
			setScore(score + 9);
		}
		if (isCorrect === 'Soy indiferente ante la situación ') {
			setScore(score + 6);
		}
		if (isCorrect === 'No me importa el otro, quiero ganar la discusión') {
			setScore(score + 3);
		}
		/* --------------------------- */
		if (isCorrect === 'Me gusta trabajar en equipo y colaborar ') {
			setScore(score + 9);
		}
		if (isCorrect === 'Prefiero tener la razón, pero hablar las opciones con mi equipo') {
			setScore(score + 6);
		}
		if (isCorrect === 'Prefiero no dar mis opiniones y hacer el trabajo por mi cuenta') {
			setScore(score + 3);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app container-fluid'>
			{showScore ? (
				<>
					<div className='score-section row justify-content-center'>
						<h1 className="TituloSecundario2">Tu inteligencia emocional es de {score}</h1>
						
					</div>
					<div className="img_encuesta img-fluid row col-sm justify-content-center">
							<img src={imgEncuesta} width="200px"/>
						</div>
						<div className="parrafoEncuesta row col-sm justify-content-center">
							<p >¡Recuerda! Si sacas menos de 66 siguete esforzando en todos los componentes; si sacas mas de 67 pero menos de 111, continua asi para mejorar y si sacas mas de 111, recuerda no decaer.</p>
							</div>
					<div className='row justify-content-center h-100'>
					<Link to="/bonhomia/inicio"><button className='text-center buttonvarios' onClick={() => peticionPost()}>Finalizar</button></Link>
					</div>
				</>
			) : (
					<>
						<div className='question-section'>
							<div className='question-count'>
								<span className="TituloSecundario">Pregunta {currentQuestion + 1}</span>/{questions.length}
							</div>
							<div className='question-text'>{questions[currentQuestion].questionText}</div>
						</div>
						<div className='answer-section'>
							{questions[currentQuestion].answerOptions.map((answerOption) => (
								<button className="buttonencuesta" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
							))}
						</div>
					</>
				)}
		</div>
	);
}