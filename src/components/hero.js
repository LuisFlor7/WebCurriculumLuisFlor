import Carousel from 'react-bootstrap/Carousel';

var heroData = [
  {
    id: 1,
    image: require('../assets/images/vineyard (5).jpg'),
    title: 'Viticultura sostenible',
    description: 'Una visión sostenible del cultivo de la vid y el vino',
  },
  {
    id: 2,
    image: require('../assets/images/vineyard (3).jpg'),
    title: 'Fsiología de la vid',
    description: 'Especializado en el funcionamiento de la vid',
  },
]

function AppHero() {
  return (
    <section id="home" className="hero-block">
       <Carousel>
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
                    <h2>{hero.title}</h2>
                    <p>{hero.description}</p>
                  </Carousel.Caption>             
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
  );
}

export default AppHero;