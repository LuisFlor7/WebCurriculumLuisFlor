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
          <h2>Sobre mi</h2>
          <div className="subtitle">Una forma de ver la vida</div>
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
            <p><strong>Luis Flor</strong> es una organización sin ánimo de lucro con sede en Jerez de la Frontera, cuyo objetivo es promover la cultura del vino, especialmente la de las denominaciones de origen Jerez-Xerez-Sherry, Manzanilla de Sanlúcar, Brandy de Jerez y la IGP Vinos de la Tierra de Cádiz. Su labor incluye la divulgación de la cultura vitivinícola a través de actividades formativas y eventos, enfocándose en el consumo responsable y el maridaje con la gastronomía local.</p>
            <p>Desde su creación, ha organizado más de cien catas, tres Desafíos Cata a Ciegas, y eventos como el I Encuentro de Vinos Andaluces y el Salón del Magnum. También colabora con importantes eventos como la Fiesta de la Vendimia de Jerez, la Semana del Brandy, la Feria del Caballo de Jerez y el Salón Vinoble.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;