import { FaEnvelope, FaLinkedin, FaPhone, FaLocationDot } from "react-icons/fa6";

const Intro = () => {
    return (
        <section>
            <h1 className="text-4xl md:text-6xl xl:text-8xl text-center tracking-tighter font-bold">Chamil Fonseka</h1>
            <h2 className="text-2xl md:text-3xl xl:text-4xl text-center tracking-tight font-semibold mb-4">Tech Lead</h2>
            <ul className="flex gap-4 justify-center mb-4">
                <li>
                    <a className="flex gap-2 items-center" href="tel:+94757870839" aria-label="Phone number">
                        <FaPhone className="contact-icon" />
                        <span className="hidden md:block">+94 75 787 0839</span>
                    </a>
                </li>
                <li>
                    <a className="flex gap-2 items-center" href="mailto:fonseka.chamil@gmail.com" aria-label="Email address">
                        <FaEnvelope className="contact-icon" />
                        <span className="hidden md:block">fonseka.chamil@gmail.com</span>
                    </a>
                </li>
                <li>
                    <a className="flex gap-2 items-center" href="https://www.linkedin.com/in/chamilf/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                        <FaLinkedin className="contact-icon" />
                        <span className="hidden md:block">linkedin.com/in/chamilf</span>
                    </a>
                </li>
                <li className="hidden md:block">
                    <span className="flex gap-2 items-center" aria-label="Location">
                        <FaLocationDot className="contact-icon" />
                        <span>Colombo, Sri Lanka</span>
                    </span>
                </li>
            </ul>            
            <p className="leading-relaxed tracking-wide text-center">
                Seasoned Software Engineer with over 14 years of experience building scalable enterprise software systems using the Java platform. Possesses strong hands-on experience in building cloud-native applications using technologies including Java, Spring Boot, Docker, Kubernetes, AWS, and SQL/NoSQL databases. Experienced in developing front-end applications using Angular and React. Proficient in agile methodologies, DevOps, and GitOps practices. A team player dedicated to personal and professional growth.
            </p>
            <hr className="my-4" />
        </section>
    );
};
export default Intro;