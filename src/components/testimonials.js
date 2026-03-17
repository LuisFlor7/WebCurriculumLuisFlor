import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import { useTranslation } from 'react-i18next';

const testimonialsKeys = [
  { id: 1, nameKey: 'testimonials.t1_name', textKey: 'testimonials.t1_text', roleKey: 'testimonials.t1_role' },
  { id: 2, nameKey: 'testimonials.t2_name', textKey: 'testimonials.t2_text', roleKey: 'testimonials.t2_role' },
]

function AppTestimonials() {
  const { t } = useTranslation();

  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>{t('testimonials.title')}</h2>
        </div>
        <Carousel controls={false} interval={8000} fade>
          {
            testimonialsKeys.map(testimonial => {
              return (
                <Carousel.Item key={testimonial.id}>
                  <blockquote>
                    <p>{t(testimonial.textKey)}</p>
                    <cite>
                      <span className='name'>{t(testimonial.nameKey)}</span>
                      <span className='designation'>{t(testimonial.roleKey)}</span>
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
