import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';

const projectsData = [
  {
    id: 1,
    link: 'https://vinoteca-elegante.luisflorchacon7.workers.dev/',
    image: require('../assets/images/SJV.jpeg'),
    titleKey: 'projects.p1_title',
    techs: ['Generative IA', 'React', 'Supabase']
  },
  {
    id: 2,
    link: 'https://finence.app/',
    image: require('../assets/images/Finence.jpeg'),
    titleKey: 'projects.p5_title',
    techs: ['Generative IA', 'React', 'Supabase']
  },
  {
    id: 3,
    link: 'https://hiddendiamond.es/',
    image: require('../assets/images/hiddendiamond.jpg'),
    titleKey: 'projects.p2_title',
    techs: ['Javascript', 'React', 'SQL']
  },
  {
    id: 4,
    link: 'https://github.com/LuisFlor7/WebCurriculumLuisFlor',
    image: require('../assets/images/Web.jpeg'),
    titleKey: 'projects.p3_title',
    techs: ['Javascript', 'React', 'Bootstrap']
  },
  {
    id: 5,
    link: 'https://github.com/LuisFlor7/PokeApiTypes',
    image: require('../assets/images/pokeapi.jpg'),
    titleKey: 'projects.p4_title',
    techs: ['Next.js', 'React Native', 'Typescript']
  }
]

function AppProjects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="block works-block">
      <Container fluid>
        <div className="title-holder animate-on-scroll">
          <h2>{t('projects.title')}</h2>
          <div className="subtitle">{t('projects.subtitle')}</div>
        </div>
        <Row className='portfoliolist'>
          {
            projectsData.map((project, index) => {
              return (
                <Col sm={4} key={project.id} className={`animate-on-scroll delay-${index + 1}`}>
                  <div className='portfolio-wrapper'>
                    <a href={project.link}
                       target="_blank"
                       rel="noopener noreferrer">
                      <img className='imgs' src={project.image} alt={t(project.titleKey)} />
                      <div className='label text-center'>
                        <h3>{t(project.titleKey)}</h3>
                        <div>
                          {project.techs.map((tech, i) => (
                            <span key={i} className="tech-badge">{tech}</span>
                          ))}
                        </div>
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