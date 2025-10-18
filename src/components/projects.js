import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const worksData = [
  {
    id: 1,
    link: 'https://github.com/LuisFlor7/PokeApiTypes',
    image: require('../assets/images/pokeapi.png'),
    title: 'Mobile phone App - PokeAPI',
    subtitle: 'Next.js, React Native, Typescript'
  },
  {
    id: 2,
    link: 'https://github.com/LuisFlor7/WebCurriculumLuisFlor',
    image: require('../assets/images/web.jpg'),
    title: 'Luis Flor personal website',
    subtitle: 'Javascript, React, Bootstrap'
  },
  {
    id: 3,
    link: 'https://github.com/LuisFlor7/HiddenDiamondGameApp',
    image: require('../assets/images/hiddendiamond.jpg'),
    title: 'Hidden Diamond Game App',
    subtitle: 'Javascript, React, SQL'
  }
]

function AppProjects() {
  return (
    <section id="projects" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Developer Projects</h2>
          <div className="subtitle">Check out my latest developer projects</div>
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

export default AppProjects;