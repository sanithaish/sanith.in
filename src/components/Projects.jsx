import { portfolioData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
    const { projects } = portfolioData;

    return (
        <section className="projects section" id="projects">
            <div className="container">
                <div className="section-title">
                    <h2>Featured <span className="text-gradient">Projects</span></h2>
                    <p>Showcasing my best work across different domains</p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => {
                        const [ref, isVisible] = useScrollAnimation();
                        return (
                            <div
                                key={project.id}
                                ref={ref}
                                className={`project-card fade-in ${isVisible ? 'visible' : ''}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="project-image">{project.shortName}</div>
                                <div className="project-content">
                                    <h3 className="project-title">{project.name}</h3>
                                    <p className="project-description">{project.description}</p>
                                    <div className="project-tech">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                    <p className="project-role">Role: {project.role}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
