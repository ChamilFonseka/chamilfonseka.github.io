import { FaEnvelope, FaLinkedin, FaPhone, FaLocationDot } from "react-icons/fa6";

const Intro = () => {
    return (
        <header>
            <h1>Chamil Fonseka</h1>
            <h2>Tech Lead</h2>
            <ul>
                <li>
                    <a href="tel:+94757870839" aria-label="Phone number">
                        <FaPhone className="contact-icon" />
                        <span>+94 75 787 0839</span>
                    </a>
                </li>
                <li>
                    <a href="mailto:fonseka.chamil@gmail.com" aria-label="Email address">
                        <FaEnvelope className="contact-icon" />
                        <span>fonseka.chamil@gmail.com</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/chamilf/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                        <FaLinkedin className="contact-icon" />
                        <span>linkedin.com/in/chamilf</span>
                    </a>
                </li>
                <li>
                    <span aria-label="Location">
                        <FaLocationDot className="contact-icon" />
                        <span>Colombo, Sri Lanka</span>
                    </span>
                </li>
            </ul>
            <p>
                Seasoned Software Engineer with over 14 years of experience building scalable enterprise software systems using the Java platform. Possesses strong hands-on experience in building cloud-native applications using technologies including Java, Spring Boot, Docker, Kubernetes, AWS, and SQL/NoSQL databases. Experienced in developing front-end applications using Angular and React. Proficient in agile methodologies, DevOps, and GitOps practices. A team player dedicated to personal and professional growth.
            </p>
        </header>
    );
};
export default Intro;