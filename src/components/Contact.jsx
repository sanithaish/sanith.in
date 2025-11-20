import { portfolioData } from '../data/portfolioData';

const Contact = () => {
    const { personal } = portfolioData;

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <div className="section-title">
                    <h2>Get In <span className="text-gradient">Touch</span></h2>
                    <p>Let's discuss your next project</p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <a href={`tel:${personal.phone}`} className="contact-item">
                            <div className="contact-icon">📞</div>
                            <div className="contact-details">
                                <div className="contact-label">Phone</div>
                                <div className="contact-value">{personal.phone}</div>
                            </div>
                        </a>

                        <a href={`mailto:${personal.email}`} className="contact-item">
                            <div className="contact-icon">✉️</div>
                            <div className="contact-details">
                                <div className="contact-label">Email</div>
                                <div className="contact-value">{personal.email}</div>
                            </div>
                        </a>

                        <div className="contact-item">
                            <div className="contact-icon">📍</div>
                            <div className="contact-details">
                                <div className="contact-label">Location</div>
                                <div className="contact-value">{personal.location}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
