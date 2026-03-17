import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';

const worksData = [
  {
    id: 1,
    link: 'https://academic.oup.com/jxb/article-abstract/76/11/3141/7998390',
    image: require('../assets/images/Impact.jpg'),
    titleKey: 'works.w1_title',
    subtitleKey: 'works.w1_subtitle'
  },
  {
    id: 2,
    link: 'https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2025.1541523',
    image: require('../assets/images/Frontiers.jpg'),
    titleKey: 'works.w2_title',
    subtitleKey: 'works.w2_subtitle'
  },
]

function AppWorks() {
  const { t } = useTranslation();

  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder animate-on-scroll">
          <h2>{t('works.title')}</h2>
          <div className="subtitle">{t('works.subtitle')}</div>
        </div>
        <Row className='portfoliolist'>
          {
            worksData.map((works, index) => {
              return (
                <Col sm={4} key={works.id} className={`animate-on-scroll delay-${index + 1}`}>
                  <div className='portfolio-wrapper'>
                    <a href={works.link}
                       target="_blank"
                       rel="noopener noreferrer">
                      <img className='imgs' src={works.image} alt={t(works.titleKey)} />
                      <div className='label text-center'>
                        <h3>{t(works.titleKey)}</h3>
                        <p>{t(works.subtitleKey)}</p>
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