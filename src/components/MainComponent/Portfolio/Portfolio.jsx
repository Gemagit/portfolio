import React from 'react';
import quizone from '../../../assets/quiz.png';
import recipapi from '../../../assets/recipapi.png';
import zara from '../../../assets/zara.png';
import personal from '../../../assets/personal.png';
import quizmanga from '../../../assets/quizmanga.png';
import pokeapp from '../../../assets/desktop.png'

const Portfolio = () => {
    const handleRedirect = (url) => {
        window.location.href = url;
    }

    return (
        <main className="portfolio">
            <h2 className='portfolio-titulo' >PORTFOLIO</h2>
            <section className="container">
                <article className="card">
                    <img src={personal} alt="Project 4" />
                    <p className='descripcion'>Este fue mi primer proyecto web. Está realizado sólo con HTML y CSS. Una aplicación muy sencilla pero super funcional. En ella recojo todo mi trabajo personal fotográfico. Es una app Mobile First y puedes navegar a través del menú para visualizar todas la categorías fotográficas. También introduje mi primer formulario de contacto.</p>
                    <div className="buttons">
                        <button
                            className="neon-button"
                            onClick={() => handleRedirect('https://gemagit.github.io/miPaginaPersonal_2024/')}>
                            Visualizar app
                        </button>
                        <button
                            className="neon-button"
                            onClick={() => handleRedirect('https://github.com/Gemagit/miPaginaPersonal_2024')}>
                            Visualizar código
                        </button>
                    </div>
                </article>
                <article className="card">
                    <img src={pokeapp} alt="Project 3" />
                    <p className='descripcion'>Poke-app fue mi primer proyecto de React. Usé tecnologías como HTML, CSS, JS, REACT y Netlify para desplegar la aplicación. Puse en práctica el manejo de componentes, hooks y sobretodo el uso de contextos entre componentes. Contiene un buscador que hace una llamada a la API de Pokemon y renderiza los datos del Pokemon correspondiente.</p>
                    <div className="buttons">
                        <button
                            className="neon-button"
                            onClick={() => handleRedirect('https://dynamic-fairy-a02c01.netlify.app')}>
                            Visualizar app
                        </button>
                        <button
                            className="neon-button"
                            onClick={() => handleRedirect('https://github.com/Gemagit/pokeApp_react')}>
                            Visualizar código
                        </button>
                    </div>
                </article>
                <article className="card">
                    <img src={zara} alt="Project 3" />
                    <p className='descripcion'>Este es mi proyecto final, aquí pongo a prueba mis conocimientos como Full Stack developer y manejo tanto Bcakend como Frontend. Las tecnologías usadas son HTML, CSS, JAVASCRIPT, NODE, EXPRESS, MONGODB, REACT...La aplicación es una tienda de ropa. Contiene productos (provenientes de una base de datos creada por mí) con una info básica y al pinchar te redirige a otro enlace en el que te da información más detallada de ese producto. También dispone de un buscador, paginación y filtrado de productos en orden ascendente y descendente.</p>
                    <div className="buttons">
                        <button
                            className="neon-button"
                            onClick={() => handleRedirect('')}>
                            Visualizar app
                        </button>
                        <button
                            className="neon-button"
                            onClick={() => handleRedirect('https://github.com/Gemagit/miTienda_fullstack')}>
                            Visualizar código
                        </button>
                    </div>
                </article>
                <article className="card">
                    <img src={recipapi} alt="Project 2" />
                    <p className='descripcion'>RecipAPI es la web de FrontEnd por excelencia. Es una app SPA, tiene además un diseño muy cuidado, es mobile first, trabajo la manipulación del DOM, hago fetch a una API de recetas, filtrado de recetas...He usado HTML, CSS y JAVASCRIPT.</p>
                    <div className="buttons">
                        <button
                            className="neon-button"
                            onClick={() => handleRedirect('https://singular-platypus-5af356.netlify.app')}>
                            Visualizar app
                        </button>
                        <button
                            className="neon-button"
                            onClick={() => handleRedirect('https://github.com/Gemagit/recipApi')}>
                            Visualizar código
                        </button>
                    </div>
                </article>
                <article className="card">
                    <img src={quizone} alt="Project 1" />
                    <p className='descripcion'>Creo que este ha sido el ejercicio en el que más he aprendido de JavaScript y el más divertido. Consiste en un formulario que contiene preguntas sobre rock. El diseño es propio de la temática rockera y las funcionalidades son geniales porque los botones cambian de color al pulsarse y añadí carteles de avisos para comprobar resultados.</p>
                    <div className="buttons">
                        <button
                            className="neon-button"
                            onClick={() => handleRedirect('https://gemagit.github.io/quizRock/index.html')}>
                           Visualizar app
                        </button>
                        <button
                            className="neon-button"
                            onClick={() => handleRedirect('https://github.com/Gemagit/quizRock')}>
                            Visualizar código
                        </button>
                    </div>
                </article>
                <article className="card">
                    <img src={quizmanga} alt="Project 1" />
                    <p className='descripcion'>Animanga Quiz es un cuestionario de temática Manga. Es un proyecto realizado con un compañero de clase. Hicimos una llamada a una API que nos proporcionaba unas preguntas y respuestas aleatorias. Añadimos contenedores con mensajes de alerta si el usuario no respondía todas las preguntas. Hicimos también un conteo de respuestas acertadas junto con una gráfica para las puntuaciones de diferentes usuarios. Las tecnologías usadas son HTML, CSS y JAVASCRIPT.</p>
                    <div className="buttons">
                        <button
                            className="neon-button"
                            onClick={() => handleRedirect('https://gemagit.github.io/quiz2.0/')}>
                           Visualizar app
                        </button>
                        <button
                            className="neon-button"
                            onClick={() => handleRedirect('https://github.com/Gemagit/quiz2.0')}>
                            Visualizar código
                        </button>
                    </div>
                </article>
            </section>
        </main>
    );
}

export default Portfolio;

