import Carousel from 'react-bootstrap/Carousel';

var heroData = [
  {
    id: 1,
    image: require('../assets/images/vineyard (5).jpg'),
    title: 'Aiming to a sustainable viticulture',
    description: 'Exploring eco-friendly practices in vineyard management',
  },
  {
    id: 2,
    image: require('../assets/images/vineyard (3).jpg'),
    title: 'Grapevine Physiology',
    description: 'Understanding grapevine physiology under climate change scenarios for a better vineyard management',
  },
  {
    id: 3,
    image: require('../assets/images/coding.jpg'),
    title: 'Full-Stack Developer',
    description: 'App and Web development services. Expert in React, Javascript, and more',
  },
]

function AppCarrousel() {
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

export default AppCarrousel;