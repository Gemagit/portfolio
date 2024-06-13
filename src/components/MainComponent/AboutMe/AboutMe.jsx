import React from 'react';
import MiFoto from '../../../assets/fotobnw.jpg';


const AboutMe = () => {
    return (
        <>
            <section className="about">
                <article>
                    <h2 className='titulo'>SOBRE MÍ</h2>
                </article>
                <article className='aboutme'>
                    <img src={MiFoto}></img>
                    <h3 className='encabezado-amarillo'>Soy GEMA MILLÁN</h3>
                    <p>Apasionada de las nuevas tecnologías, me embarco en este mundo de la programación con una formación bastante completa. Con una gran ambición y capacidad de continuo aprendizaje. Tengo una gran facilidad para trabajar y relacionarme con personas y en equipos jerárquicos, colaborativos, multidisciplinales, etc..siendo esencial en el campo de la programación, ya que la colaboración y la comunicación efectiva son clave para el éxito de cualquier proyecto. Soy muy detallista y perfeccionista por lo que me relaciono muy bien en el entorno técnico. Además, mi ética personal es muy sólida respecto al trabajo,  ya que a menudo se requiere esfuerzo, perseverancia y dedicaciónpara resolver problemas y alcanzar objetivos comprometidos.Me considero una persona muy creativa y creo que es una cualidad valiosa en el desarrollo de software. Además, mi habilidad para tratar con clientes me será útil para comprender y satisfacer las necesidades de los usuarios finales.</p>
                </article>
            </section>
        </>
    )
}

export default AboutMe;