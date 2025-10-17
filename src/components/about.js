import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import img1 from '../assets/images/vino (1).jpg';
import img2 from '../assets/images/foto (6).jpg';

function AppAbout() {

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About</h2>
          <div className="subtitle">A continuous learning</div>
        </div>
        <Row>
          <Col sm={3}>
            <Image style={{height:'360px'}} 
              src={img1} />
          </Col>
          <Col sm={3}>
            <Image style={{height:'360px'}} 
              src={img2} />
          </Col>
          <Col sm={6}>
            <p><strong>Luis Flor</strong> is a biologist from Jerez de la Frontera, Spain, specialized in <strong> grapevine physiology under drought conditions</strong>. </p>
            <p>Since graduating from the University of the Balearic Islands, he has spent several years conducting research in the field of grapevine physiology under water-limited conditions. His work has focused on comparing the physiological responses of different genotypes, including emblematic Spanish varieties such as Tempranillo, and Garnacha, grafted onto well-known commercial rootstocks such as 110R and 140Ru, as well as newly developed hybrids. He has published scientific articles in high-impact journals, several of which have been recognized as Highly Cited Articles.</p>
            <p>His studies have contributed to a deeper understanding of the vulnerability of the grapevine vascular system to drought, particularly through the assessment of hydraulic conductivity loss associated with embolism events. Luis has presented his research at numerous national and international conferences, including GIESCO 2025, ICGWS 2023, SECH 2023 and 2025, among others.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;