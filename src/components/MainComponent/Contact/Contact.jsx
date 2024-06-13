import React from 'react';
import emailIcon from '../../../assets/email.png'; 
import phoneIcon from '../../../assets/telefono.png';
import discordIcon from '../../../assets/discord.png';
import githubIcon from '../../../assets/github.png';
import linkedinIcon from '../../../assets/linkedin.jpg';

const Contact = () => {
    const handleRedirect = (url) => {
        window.location.href = url;
    }

    return (
        <main className="contact">
            <h2>CONTACTO</h2>
            <section className="contact-container">
                <button 
                    className="contact-button" 
                    onClick={() => handleRedirect('mailto:gemitaphotographer@gmail.com')}>
                    <img src={emailIcon} alt="Email" /> Email
                </button>
                <button 
                    className="contact-button" 
                    onClick={() => handleRedirect('tel:+34605397796')}>
                    <img src={phoneIcon} alt="Phone" /> Phone
                </button>
                <button 
                    className="contact-button" 
                    onClick={() => handleRedirect('https://www.linkedin.com/in/gema-mill%C3%A1n-casado-102615231/')}>
                    <img src={linkedinIcon} alt="LinkedIn" /> LinkedIn
                </button>
                <button 
                    className="contact-button" 
                    onClick={() => handleRedirect('https://discord.com/channels/gemita_71179')}>
                    <img src={discordIcon} alt="Discord" /> Discord
                </button>
                <button 
                    className="contact-button" 
                    onClick={() => handleRedirect('https://github.com/Gemagit')}>
                    <img src={githubIcon} alt="GitHub" /> GitHub
                </button>
            </section>
        </main>
    );
}

export default Contact;
