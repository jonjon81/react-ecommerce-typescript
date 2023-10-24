import styled from 'styled-components';
import ScrollButton from './ScrollButton';
const Footer = () => {
  return (
    <Container>
      <div className="footer-container">
        <ul>
          <h5 className="footer-header">Order & Purchases</h5>
          <li>
            <a href="/">Check Order Status</a>
          </li>
          <li>
            <a href="/">Shipping, Delivery & Pickup</a>
          </li>
          <li>
            <a href="/">Returns & Exchanges</a>
          </li>
          <li>
            <a href="/">Price Match Guarantee</a>
          </li>
          <li>
            <a href="/">Product Recalls</a>
          </li>
        </ul>
        <ul>
          <h5 className="footer-header">About AE</h5>
          <li>
            <a href="/">Corporate Information</a>
          </li>
          <li>
            <a href="/">Careers</a>
          </li>
          <li>
            <a href="/">Corporate Responsibility</a>
          </li>
          <li>
            <a href="/">Sustainability</a>
          </li>
          <li>
            <a href="/">Customer Service</a>
          </li>
        </ul>
        <ul>
          <h5 className="footer-header">Partnerships</h5>
          <li>
            <a href="/">Affiliate Program</a>
          </li>
          <li>
            <a href="/">Advertise with Us</a>
          </li>
          <li>
            <a href="/">Developers</a>
          </li>
          <li>
            <a href="/">Atlas Ecommerce Health</a>
          </li>
          <li>
            <a href="/">Gift Cards</a>
          </li>
        </ul>
        <ul>
          <h5 className="footer-header">Support & Services</h5>
          <li>
            <a href="/">Visit our Support Center</a>
          </li>
          <li>
            <a href="/">Shop with an Expert</a>
          </li>
          <li>
            <a href="/">Manage an Appointment</a>
          </li>
          <li>
            <a href="/">Protection & Support Plans</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="rights-reserved">
        <h5>
          &copy; {new Date().getFullYear()}
          <span>&nbsp;Atlas Ecommerce</span>
        </h5>
        <h5>&nbsp;All rights reserved</h5>
      </div>
      <ScrollButton />
    </Container>
  );
};

const Container = styled.footer`
  height: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-primary-0);
  text-align: center;
  span {
    color: var(--clr-primary-8);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }

  .footer-header {
    padding: 0;
    margin: 0 0 10px;
    font-weight: bold;
  }

  .footer-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    max-width: 1170px;
    padding-bottom: 3rem;
    ul {
      text-align: left;
      padding: 10px;
    }
}
    a {
      color: #fff;
      
      &:hover {
        text-decoration:underline;
      }
    }
  }
  @media (min-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 767px) {
    padding: 2rem 1rem;
    .footer-container {
      flex-wrap: wrap;
      ul {
        width: 50%;
      }
    }
  }
`;

export default Footer;
