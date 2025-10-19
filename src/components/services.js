import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
  {
    id: 1,
    icon: "fas fa-wine-glass",
    title: "Comprehensive Vineyard Consulting",
    description:
      "We offer consulting services covering every stage of vineyard management, from the selection of varieties and rootstocks to irrigation strategies and canopy management. Esuring optimal plant performance and long-term sustainability.",
  },
  {
    id: 2,
    icon: "fas fa-star",
    title: "Yield Optimization",
    description:
      "Through the integration of physiological monitoring, precision agriculture techniques, and tailored management practices. We help maximize grape yield and quality while maintaining the balance between productivity and sustainability.",
  },
  {
    id: 3,
    icon: "fas fa-seedling",
    title: "Selection of Optimal Plant Material",
    description:
      "Expert guidance in choosing the most suitable variety and rootstock combinations based on soil properties, climate conditions, and production goals. Ensuring vineyard resilience and consistency in grape quality.",
  },

  {
    id: 4,
    icon: "fas fa-arrow-trend-up",
    title: "Enhancing Operational Efficiency Through Technological Solutions",
    description:
      "We design and implement tailored digital tools that streamline workflows, reduce manual processes, and optimize decision-making across agricultural and industrial enterprises.",
  },
  {
    id: 5,
    icon: "fas fa-laptop",
    title: "Web and App Development",
    description:
      "Development of responsive, user-focused web platforms and mobile applications that integrate seamlessly with your business needs, ensuring scalability, performance, and modern design.",
  },
  {
    id: 6,
    icon: "fas fa-microphone",
    title: "Training and Capacity Building",
    description:
      "Combining expertise in agriculture and technology, we provide customized training programs that empower professionals to adopt digital tools and data-driven strategies effectively.",
  },
];

function AppServices() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Services</h2>
          <div className="subtitle">Discover my services</div>
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