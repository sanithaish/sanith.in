import { portfolioData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
    const { skills } = portfolioData;

    return (
        <section className="skills section" id="skills">
            <div className="container">
                <div className="section-title">
                    <h2>Technical <span className="text-gradient">Skills</span></h2>
                    <p>Technologies and tools I work with</p>
                </div>

                <div className="skills-grid">
                    {skills.map((skillCategory, index) => {
                        const [ref, isVisible] = useScrollAnimation();
                        return (
                            <div
                                key={index}
                                ref={ref}
                                className={`skill-category fade-in ${isVisible ? 'visible' : ''}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <h3>
                                    <span className="skill-icon">{skillCategory.icon}</span>
                                    {skillCategory.category}
                                </h3>
                                <ul className="skill-list">
                                    {skillCategory.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="skill-item">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
