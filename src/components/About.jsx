import { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
    const { about, stats } = portfolioData;
    const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));
    const [hasAnimated, setHasAnimated] = useState(false);
    const [ref, isVisible] = useScrollAnimation();

    useEffect(() => {
        if (isVisible && !hasAnimated) {
            setHasAnimated(true);
            stats.forEach((stat, index) => {
                const targetNumber = parseInt(stat.number.replace(/\D/g, ''));
                const hasPlus = stat.number.includes('+');
                const hasPercent = stat.number.includes('%');
                const increment = targetNumber / 50;
                let current = 0;

                const interval = setInterval(() => {
                    current += increment;
                    if (current >= targetNumber) {
                        current = targetNumber;
                        clearInterval(interval);
                    }

                    setAnimatedStats(prev => {
                        const newStats = [...prev];
                        let displayValue = Math.floor(current);
                        if (hasPlus) displayValue = displayValue + '+';
                        if (hasPercent) displayValue = displayValue + '%';
                        newStats[index] = displayValue;
                        return newStats;
                    });
                }, 30);
            });
        }
    }, [isVisible, hasAnimated, stats]);

    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="section-title">
                    <h2>About <span className="text-gradient">Me</span></h2>
                    <p>Passionate about building exceptional digital experiences</p>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <h3>Professional Summary</h3>
                        {about.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    <div className="stats-grid" ref={ref}>
                        {stats.map((stat, index) => {
                            const [statRef, statVisible] = useScrollAnimation();
                            return (
                                <div
                                    key={index}
                                    ref={statRef}
                                    className={`stat-card fade-in ${statVisible ? 'visible' : ''}`}
                                >
                                    <div className="stat-number">{animatedStats[index] || stat.number}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
