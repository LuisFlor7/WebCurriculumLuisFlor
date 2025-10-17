import Container from 'react-bootstrap/Container';

function AppContact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact me</h2>
          <div className="subtitle">I will be more than glad to receive your message</div>
        </div>
      </Container>
      <Container fluid>
        <div className='contact-info'>
          <ul>
            <li>
              <i className="fab fa-linkedin-in"></i>
              Check out my LinkedIn
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              Send me an e-mail
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default AppContact;