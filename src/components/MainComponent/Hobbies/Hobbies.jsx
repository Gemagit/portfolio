import React from 'react';
import psicologia from '../../../assets/psicologia.jpg';
import fotografia from '../../../assets/fotografia.png';

const Hobbies = () => {
    return (
        <>
            <section className="hobbies">
                <article>
                    <h2 className='titulo'>AFICIONES</h2>
                </article>
                <article className='hobbie'>
                    <img src={psicologia}></img>
                    <h3 className='encabezado-amarillo'>Psicología</h3>
                    <p>Desde que tengo memoria, siempre me ha fascinado la psicología y las relaciones humanas. Me encanta comprender cómo piensan y sienten las personas, y cómo nuestras interacciones pueden influir en nuestras vidas. Esta pasión me ha llevado a buscar constantemente formas de relacionarme mejor con los demás y, al mismo tiempo, mejorar como persona. La psicología me proporciona herramientas para entender mejor a quienes me rodean, lo cual me permite establecer conexiones más profundas y significativas. Además, me motiva a seguir aprendiendo y creciendo, no solo para ayudar a otros, sino también para ser una mejor versión de mí mismo cada día. En resumen, la psicología y las relaciones humanas son pilares fundamentales en mi vida, ya que me permiten enriquecer mis vínculos personales y profesionales, y me inspiran a seguir evolucionando continuamente.</p>
                </article>
                <article className='hobbie'>
                    <img src={fotografia}></img>
                    <h3 className='encabezado-amarillo'>Fotografía</h3>
                    <p>La fotografía ha sido una parte fundamental de mi vida durante muchos años. Como una gran observadora, tengo la habilidad de captar detalles que a menudo pasan desapercibidos para otros. Esta capacidad me ha permitido no sólo desempeñarme profesionalmente en el campo de la fotografía, sino también convertirla en un hobbie y una forma de expresión personal.
                        A través del lente de mi cámara, encuentro una manera de comunicar mis emociones y perspectivas, capturando momentos únicos y creando historias visuales. La fotografía ha sido mi trabajo, mi pasión y mi voz artística, una herramienta que utilizo para conectar con el mundo y con las personas que me rodean.</p>
                </article>
            </section>
        </>
    )
}

export default Hobbies;