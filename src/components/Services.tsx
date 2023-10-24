import styled from 'styled-components';
import { services } from '../utils/constants';
import { useInView } from 'framer-motion';
import {useRef} from 'react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <h3>
            The best products <br /> ready for you
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non
            aliquam voluptates dolore aut vero consequuntur.
          </p>
        </article>
        <div ref={ref} className="services-center">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article
                style={{
                  transform: isInView ? 'none' : 'translateX(-300px)',
                  opacity: isInView ? 1 : 0,
                  transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                }}
                className="service"
                key={id}
              >
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3 {
    color: var(--clr-primary-1);
  }
  h4 {
    color: #fff;
  }
  padding: 5rem 0;

  background: var(--clr-primary-10);

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-primary-1);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    opacity: 0;
    p {
      color: #fff;
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;
export default Services;
