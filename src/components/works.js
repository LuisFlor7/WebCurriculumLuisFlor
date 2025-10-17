import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const worksData = [
  {
    id: 1,
    link: 'https://academic.oup.com/jxb/article-abstract/76/11/3141/7998390',
    image: require('../assets/images/Impact.jpg'),
    title: 'Impact of severe water stress on drought..',
    subtitle: 'Journal of Experimental Botany'
  },
  {
    id: 2,
    link: 'https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2025.1541523',
    image: require('../assets/images/Frontiers.jpg'),
    title: 'Implications of root morphology..',
    subtitle: 'Frontiers in Plant Science'
  },
]

function AppWorks() {
  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Scientific articles</h2>
          <div className="subtitle">Check out my latest scientific articles</div>
        </div>
        <Row className='portfoliolist'>
          {
            worksData.map(works => {
              return (
                <Col sm={4} key={works.id}>
                  <div className='portfolio-wrapper'>
                    <a href={works.link}>
                      <Image className='imgs' src={works.image} />
                      <div className='label text-center'>
                        <h3>{works.title}</h3>
                        <p>{works.subtitle}</p>
                      </div>
                    </a>
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

export default AppWorks;