import { Link } from 'react-router-dom'

function About() {
    return (
        <section className="about" id="apropos">
            <div className="container">
                <div className="about-wrapper">
                    <div className="about-content-refined" data-aos="fade-up">
                        <div className="about-subtitle-row">
                            <span className="about-dash"></span>
                            <span className="about-subtitle-text">À propos de nous</span>
                        </div>
                        <h2 className="about-title-refined">
                            Dédiés à votre santé <br />
                            <span>dentaire</span>
                        </h2>
                        <p className="about-description-refined">
                            <strong>Au Cabinet Dentaire Smile</strong> nous conjuguons
                            expertise moderne et accueil chaleureux. Entièrement dédié
                            au bien-être de toute votre famille, nous allions sécurité,
                            confort et professionnalisme pour des traitements sur
                            mesure d'une qualité irréprochable.
                        </p>
                        <Link to="/apropos" className="btn-about">Voir plus</Link>
                    </div>
                    <div className="about-image-refined" data-aos="fade-up" data-aos-delay="200">
                        <img
                            src="/images/about/about-cabinet.jpg"
                            alt="Cabinet Dentaire Smile"
                            className="img-rounded"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
