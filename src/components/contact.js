import Container from 'react-bootstrap/Container';

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
          <li><a href="https://www.linkedin.com/in/luis-flor-chacon/"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="mailto:luisflorchacon7@gmail.com"><i className="fas fa-envelope"></i></a></li>
        </ul>
      </div>
      </Container>
    </section>
  );
}

export default AppContact;