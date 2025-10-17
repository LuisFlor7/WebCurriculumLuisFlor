import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const teamsData = [
  {
    id: 1,
    image: require('../assets/images/team1.jpg'),
    googleLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    articleTitle: 'Gabriel Hart',
    journal: 'CEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 2,
    image: require('../assets/images/team2.jpg'),
    googleLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    articleTitle: 'David Antony',
    journal: 'Manager',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 3,
    image: require('../assets/images/team3.jpg'),
    googleLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    articleTitle: 'Nicholas Perry',
    journal: 'UX Designer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 4,
    image: require('../assets/images/team4.jpg'),
    googleLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    articleTitle: 'Sarah Wills',
    journal: 'Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 5,
    image: require('../assets/images/team5.jpg'),
    googleLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    articleTitle: 'Sophia Pitt',
    journal: 'Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 6,
    image: require('../assets/images/team6.jpg'),
    googleLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    articleTitle: 'Taylor Lopez',
    journal: 'Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 7,
    image: require('../assets/images/team7.jpg'),
    googleLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    articleTitle: 'Ryan Giggs',
    journal: 'Content Writer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 8,
    image: require('../assets/images/team8.jpg'),
    googleLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    articleTitle: 'David Smith',
    journal: 'SEO Expert',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  }
]

function AppTeams() {
  return (
    <section id="teams" name="block teams-block">
      <Container fluid>
        <div name="title-holder">
          <h2>Our scientific articles</h2>
          <div name="subtitle">Published in high-impact journals</div>
        </div>
        <Row>
          {
            teamsData.map(teams => {
              return (
                <Col sm={3} key={teams.id}>
                  <div name='image'>
                    <Image src={teams.image} />
                    <div name='overlay'>
                      <div name='socials'>
                        <ul>
                          <li><a href={teams.googleLink}><i name="fab fa-facebook-f"></i></a></li>
                          <li><a href={teams.twitterLink}><i name="fab fa-twitter"></i></a></li>
                          <li><a href={teams.linkedinLink}><i name="fab fa-linkedin-in"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div classarticleTitle='content'>
                    <h3>{teams.articleTitle}</h3>
                    <span classarticleTitle='journal'>{teams.journal}</span>
                    <p>{teams.description}</p>
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

export default AppTeams;