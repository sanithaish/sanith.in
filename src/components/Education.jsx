import { portfolioData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Education = () => {
    const { education } = portfolioData;
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section className="education section" id="education">
            <div className="container">
                <div className="section-title">
                    <h2>Education <span className="text-gradient">&</span> Qualifications</h2>
                    <p>Academic background and certifications</p>
                </div>

                <div className="education-content">
                    <div ref={ref} className={`education-card fade-in ${isVisible ? 'visible' : ''}`}>
                        <div className="education-icon">🎓</div>
                        <div className="education-details">
                            <h3 className="education-degree">{education.degree}</h3>
                            <div className="education-institution">{education.institution}</div>
                            <div className="education-year">{education.year}</div>
                            <p className="education-description">{education.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
