import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const blogData = [
  {
    id: 1,
    image: require('../assets/images/cata1.jpg'),
    time: '15 Nov 2016',
    title: 'Viva Cádiz',
    description: 'La Sociedad Jerezana del Vino reivindica la variedad palomino con dos catas en abril',
    link: 'https://vivacadiz.es/provincia-de-cadiz/1622167/la-sociedad-jerezana-del-vino-reivindica-la-variedad-palomino-con-dos-catas-en-abril/'
  },
  {
    id: 2,
    image: require('../assets/images/cata2.jpg'),
    time: '10 Nov 2016',
    title: 'Diario de Jerez',
    description: 'La Sociedad Jerezana del Vino dedica su tercera cata a la grandeza de la palomino con vinos de Cantabria y Castilla-León.',
    link: 'https://www.diariodejerez.es/jerez/sociedad-jerezana-vino-tercera-cata-grandeza-palomino-cantabria-castilla-leon_0_1897010711.html'
  },
  {
    id: 3,
    image: require('../assets/images/cata3.jpg'),
    time: '07 Nov 2016',
    title: 'Diario de Jerez',
    description: 'Sexta cata maridada con una selección de 8 mostos y galeras.',
    link: 'https://www.diariodejerez.es/jerez/sociedad-jerezana-vino-sexta-cata-mostos-galeras_0_1870313881.html'
  }
]

function AppBlog() {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Prensa reciente</h2>
          <div className="subtitle">No te pierdas nuestras noticias</div>
        </div>
        <Row>
          {
            blogData.map(blog => {
              return (
                <Col sm={4} key={blog.id}>
                  <div className='holder'>
                    <Card>
                      <Card.Img variant="top" src={blog.image} />
                      <Card.Body>
                        <time>{blog.time}</time>
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text>
                          {blog.description}
                        </Card.Text>
                        <a href={blog.link} className="btn btn-primary">Leer más<i className="fas fa-chevron-right"></i></a>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default AppBlog;