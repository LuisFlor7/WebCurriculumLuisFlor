import Carousel from 'react-bootstrap/Carousel';

var heroData = [
  {
    id: 1,
    image: require('../assets/images/vineyard (5).jpg'),
    title: 'Una forma de vida',
    description: 'Conoce la rica cultura de nuestra zona disfrutando de la viticultura',
    link: 'https://www.google.com'
  },
  {
    id: 2,
    image: require('../assets/images/vineyard (3).jpg'),
    title: 'Una gran familia',
    description: 'Los eventos vividos y el disfrute hacen que nuestros socios se sientan parte de una gran familia',
    link: 'https://www.facebook.com'
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