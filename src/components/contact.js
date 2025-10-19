import Container from 'react-bootstrap/Container';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMicroscope } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AppContact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact</h2>
          <div className="subtitle">Glad to receive your message</div>
        </div>
      </Container>
      <Container fluid>
          <div className="socials">
        <ul>
          <li><a href="https://www.linkedin.com/in/luis-flor-chacon/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
          <li><a href="mailto:luisflorchacon7@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
          <li><a href="https://github.com/LuisFlor7"><FontAwesomeIcon icon={faGithub} /></a></li>
          <li><a href="https://scholar.google.es/citations?user=qbD7KTQAAAAJ&hl=es&oi=ao"><FontAwesomeIcon icon={faMicroscope} /></a></li>
        </ul>
      </div>
      </Container>
    </section>
  );
}

export default AppContact;