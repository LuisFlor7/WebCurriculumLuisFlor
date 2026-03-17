import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';

const servicesIcons = [
  "fas fa-wine-glass",
  "fas fa-star",
  "fas fa-seedling",
  "fas fa-arrow-trend-up",
  "fas fa-laptop",
  "fas fa-microphone",
];

function AppServices() {
  const { t } = useTranslation();

  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder animate-on-scroll">
          <h2>{t('services.title')}</h2>
          <div className="subtitle">{t('services.subtitle')}</div>
        </div>
        <Row>
          {
            servicesIcons.map((icon, index) => {
              const num = index + 1;
              return (
                <Col sm={4} key={num}>
                  <div className={`holder animate-on-scroll delay-${num}`}>
                    <div className="icon">
                      <i className={icon}></i>
                    </div>
                    <h3>{t(`services.s${num}_title`)}</h3>
                    <p>{t(`services.s${num}_desc`)}</p>
                  </div>
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