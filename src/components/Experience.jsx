import { portfolioData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience = () => {
    const { experience } = portfolioData;

    return (
        <section className="experience section" id="experience">
            <div className="container">
                <div className="section-title">
                    <h2>Professional <span className="text-gradient">Experience</span></h2>
                    <p>My journey through the tech industry</p>
                </div>

                <div className="timeline">
                    {experience.map((job, index) => {
                        const [ref, isVisible] = useScrollAnimation();
                        return (
                            <div
                                key={index}
                                ref={ref}
                                className={`timeline-item fade-in ${isVisible ? 'visible' : ''}`}
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <div className="timeline-date">{job.date}</div>
                                    <h3 className="timeline-title">{job.title}</h3>
                                    <div className="timeline-company">{job.company}</div>
                                    <p className="timeline-description">{job.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;
