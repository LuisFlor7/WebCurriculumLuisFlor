import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
  {
    id: 1,
    icon: 'fas fa-wine-glass',
    title: 'Catas de vinos de la tierra',
    description: 'Vinos de las denominaciones de origen Jerez-Xerez-Sherry, Manzanilla de Sanlúcar, Brandy de Jerez y la IGP Vinos de la Tierra de Cádiz.'
  },
  {
    id: 2,
    icon: 'fas fa-wine-glass-empty',
    title: 'Catas de vinos de España',
    description: 'Vinos de denominaciones de origen Cava, Jumilla, Ribera, Rioja, Rueda, etc.'
  },
  {
    id: 3,
    icon: 'fas fa-wine-bottle',
    title: 'Catas de vinos internacionales',
    description: 'Vinos de denominaciones de origen internacionales como Porto, Champagne, etc.'
  },
  {
    id: 4,
    icon: 'fas fa-utensils',
    title: 'Catas maridadas',
    description: 'Acompañamos las catas de vino con lo mejor de nuestra gastronomía local.'
  },
  {
    id: 5,
    icon: 'fas fa-people-group',
    title: 'Club social',
    description: 'La Sociedad Jerezana del Vino actúa como club social al reservarse el derecho de admisión de sus socios, asegurando una experiencia más cercana y enriquecedora.'
  },
  {
    id: 6,
    icon: 'fas fa-microphone',
    title: 'Divulgación vitivinícola',
    description: 'Las catas van acompañadas de divulgación científica e histórica impartida por expertos vitivinícolas.'
  }
]

function AppServices() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Servicios</h2>
          <div className="subtitle">Conoce nuestros servicios</div>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={4} className='holder' key={services.id}>
                  <div className="icon">
                    <i className={services.icon}></i>
                  </div>
                  <h3>{services.title}</h3>
                  <p>{services.description}</p>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;