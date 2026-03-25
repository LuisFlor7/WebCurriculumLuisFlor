import Carousel from 'react-bootstrap/Carousel';
import { useTranslation } from 'react-i18next';

import img1 from '../assets/images/vineyard (5).jpg';
import img2 from '../assets/images/vineyard (3).jpg';
import img3 from '../assets/images/coding.jpg';

function AppCarrousel() {
  const { t } = useTranslation();

  const heroData = [
    { id: 1, image: img1, titleKey: 'hero.slide1_title', descKey: 'hero.slide1_desc' },
    { id: 2, image: img2, titleKey: 'hero.slide2_title', descKey: 'hero.slide2_desc' },
    { id: 3, image: img3, titleKey: 'hero.slide3_title', descKey: 'hero.slide3_desc' },
  ];

  return (
    <section id="home" className="hero-block">
       <h1 className="visually-hidden">Luis Flor - Biologist, Grapevine Researcher & Full-Stack Developer</h1>
       <Carousel fade interval={5000}>
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-100"
                    src={hero.image}
                    alt={"slide " + hero.id}
                  />
                  <Carousel.Caption>
                    <h2>{t(hero.titleKey)}</h2>
                    <p>{t(hero.descKey)}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
  );
}

export default AppCarrousel;