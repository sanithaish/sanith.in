import { portfolioData } from '../data/portfolioData';

const Hero = () => {
    const { personal } = portfolioData;

    return (
        <section className="hero section" id="home">
            <div className="container">
                <div className="hero-content">
                    <p className="hero-greeting">{personal.greeting}</p>
                    <h1 className="hero-title">{personal.name}</h1>
                    <h2 className="hero-subtitle">
                        {personal.title} | <span className="text-gradient">{personal.subtitle}</span>
                    </h2>
                    <p className="hero-description">{personal.description}</p>
                    <div className="hero-cta">
                        <a href="#contact" className="btn btn-primary">Get In Touch</a>
                        <a href="#projects" className="btn btn-secondary">View Projects</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
