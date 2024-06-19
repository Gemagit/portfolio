import React from 'react';
import html from '../../../assets/html.png';
import css from '../../../assets/css.png';
import js from '../../../assets/JavaScript-Logo-1.png';
import node from '../../../assets/nodexpress.png';
import postgres from '../../../assets/postgres.png';
import sqlite from '../../../assets/sqlite.png';
import mongo from '../../../assets/mongo2.png';
import react from '../../../assets/react.png';
import github from '../../../assets/github.png';
import docker from '../../../assets/docker.png';




const Technologies = () => {
    return (
        <>
            <main className="technologies">
            <h2>TECNOLOGÍAS</h2>
                <section className='tecnologias'>
                    <article className="contenedor-logo">
                        <img className="html" src={html} alt="html" />
                    </article>
                    <article className="contenedor-logo">
                        <img className="css" src={css} alt="css"/>
                    </article>
                    <article className="contenedor-logo">
                        <img className="js" src={js} alt="js"/>
                    </article>
                    <article className="contenedor-logo">
                        <img className="node" src={node} alt="node" />
                    </article>
                    <article className="contenedor-logo">
                        <img className="postgre" src={postgres} alt="postgre"/>
                    </article>
                    <article className="contenedor-logo">
                        <img className="sqlite" src={sqlite} alt="sqlite"/>
                    </article>
                    <article className="contenedor-logo">
                        <img className="mongo" src={mongo} alt="mongo"/>
                    </article>
                    <article className="contenedor-logo">
                        <img className="react" src={react} alt="react" />
                    </article>
                    <article className="contenedor-logo">
                        <img className="github" src={github} alt="github"/>
                    </article>
                    <article className="contenedor-logo">
                        <img className="docker" src={docker} alt="docker"/>
                    </article>
                </section>
            </main>
        </>
    )
}

export default Technologies;