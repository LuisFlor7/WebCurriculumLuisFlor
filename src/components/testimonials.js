import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';


var testimonialsData = [
  {
    id: 1,
    name:'Francisco Mayol',
    description:'"He consistently carried out his work with punctuality, dedication, professionalism, and a strong sense of responsibility. His cheerful and helpful attitude made him a valued member of the team. Moreover, he demonstrated a proactive approach to improving his skills and taking on additional responsibilities within the company. Upon his departure, he left a significant gap among his colleagues"',
    designation:'Founder & CEO of Cidesal S.L.'
  },
  {
    id: 2,
    name:'José Mariano Escalona',
    description:'"I hereby state that Mr. Luis Flor Chacón has very satisfactorily fulfilled the objectives and tasks assigned since his incorporation in 2023 into INAGEA as a predoctoral researcher up to the present date. During this period, he has acquired solid expertise in techniques and methodologies applied to plant physiology and has actively participated in research projects, demonstrating a strong ability to work effectively as part of a team. Furthermore, he has been actively involved in knowledge transfer activities, where he has shown excellent communication skills."',
    designation:'President at INAGEA-UIB, University professor'
  }
]

function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>References</h2>
        </div>
        <Carousel controls={false}>
          {
            testimonialsData.map(testimonials => {
              return (
                <Carousel.Item key={testimonials.id}>
                  <blockquote>
                    <p>{testimonials.description}</p>
                    <cite>
                      <span className='name'>{testimonials.name}</span>
                      <span className='designation'>{testimonials.designation}</span>
                    </cite>
                  </blockquote>             
                </Carousel.Item>
              );
            })
          }
        </Carousel>
      </Container>
    </section>
  );
}

export default AppTestimonials;