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
                    <div className="buttons">
                        <button
                            className="neon-button"
                            onClick={() => handleRedirect('https://gemagit.github.io/miPaginaPersonal_2024/')}>
                            View app
                        </button>
                        <button
                            className="neon-button"
                            onClick={() => handleRedirect('https://github.com/Gemagit/miPaginaPersonal_2024')}>
                            View code
                        </button>
                    </div>
                </article>
                <article className="card">
                    <img src={pokeapp} alt="Project 3" />
                    <div className="buttons">
                        <button
                            className="neon-button"
                            onClick={() => handleRedirect('https://dynamic-fairy-a02c01.netlify.app')}>
                            View app
                        </button>
                        <button
                            className="neon-button"
                            onClick={() => handleRedirect('https://github.com/Gemagit/pokeApp_react')}>
                            View code
                        </button>
                    </div>
                </article>
                <article className="card">
                    <img src={zara} alt="Project 3" />
                    <div className="buttons">
                        <button
                            className="neon-button"
                            onClick={() => handleRedirect('https://www.example5.com')}>
                            View app
                        </button>
                        <button
                            className="neon-button"
                            onClick={() => handleRedirect('https://github.com/Gemagit/miTienda_fullstack')}>
                            View code
                        </button>
                    </div>
                </article>
                <article className="card">
                    <img src={recipapi} alt="Project 2" />
                    <div className="buttons">
                        <button
                            className="neon-button"
                            onClick={() => handleRedirect('https://singular-platypus-5af356.netlify.app')}>
                            View app
                        </button>
                        <button
                            className="neon-button"
                            onClick={() => handleRedirect('https://github.com/Gemagit/recipApi')}>
                            View code
                        </button>
                    </div>
                </article>
                <article className="card">
                    <img src={quizone} alt="Project 1" />
                    <div className="buttons">
                        <button
                            className="neon-button"
                            onClick={() => handleRedirect('https://gemagit.github.io/quizRock/index.html')}>
                            View app
                        </button>
                        <button
                            className="neon-button"
                            onClick={() => handleRedirect('https://github.com/Gemagit/quizRock')}>
                            View Code
                        </button>
                    </div>
                </article>
                <article className="card">
                    <img src={quizmanga} alt="Project 1" />
                    <div className="buttons">
                        <button
                            className="neon-button"
                            onClick={() => handleRedirect('https://gemagit.github.io/quiz2.0/')}>
                            View app
                        </button>
                        <button
                            className="neon-button"
                            onClick={() => handleRedirect('https://github.com/Gemagit/quiz2.0')}>
                            View Code
                        </button>
                    </div>
                </article>
            </section>
        </main>
    );
}

export default Portfolio;

