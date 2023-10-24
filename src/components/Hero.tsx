import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { scrollTop } from '../utils/helpers';

import main from '../assets/categories/main.jpeg';
import sunglasses from '../assets/categories/sunglasses.jpg';
import furniture from '../assets/categories/furniture.jpg';
import watches from '../assets/categories/watches.jpg';
import motorcycle from '../assets/categories/motorcycle.jpg';

const Hero = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Wrapper className="mw-100">
      <FaChevronLeft className="slider-left" />
      <Slider className="hero-slider" {...settings}>
        <div className="section-center mw-100">
          <div className="image-wrapper" style={{ backgroundImage: `url(${main})` }}>
            <article className="content">
              <h1>
                Get your <br />
                products now
              </h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque
                possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi
                quis alias?
              </p>
              <Link onClick={scrollTop} to="/products" className="btn hero-btn">
                shop now
              </Link>
            </article>
          </div>
        </div>
        <div className="section-center mw-100">
          <div className="image-wrapper" style={{ backgroundImage: `url(${sunglasses})` }}>
            <article className="content">
              <h1>
                Huge selection <br />
                of sunglasses
              </h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque
                possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi
                quis alias?
              </p>
              <Link onClick={scrollTop} to="/products/sunglasses" className="btn hero-btn">
                shop sunglasses
              </Link>
            </article>
          </div>
        </div>
        <div className="section-center mw-100">
          <div className="image-wrapper" style={{ backgroundImage: `url(${furniture})` }}>
            <article className="content">
              <h1>
                All the latest <br />
                furniture
              </h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque
                possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi
                quis alias?
              </p>
              <Link onClick={scrollTop} to="/products/furniture" className="btn hero-btn">
                shop furniture
              </Link>
            </article>
          </div>
        </div>
        <div className="section-center mw-100">
          <div className="image-wrapper" style={{ backgroundImage: `url(${watches})` }}>
            <article className="content">
              <h1>
                All types
                <br />
                of watches
              </h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque
                possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi
                quis alias?
              </p>
              <Link onClick={scrollTop} to="/products/mens-watches" className="btn hero-btn mr-20">
                Shop Men's Watches
              </Link>
              <Link to="/products/womens-watches" className="btn hero-btn">
                Shop Women's Watches
              </Link>
            </article>
          </div>
        </div>
        <div className="section-center mw-100">
          <div className="image-wrapper" style={{ backgroundImage: `url(${motorcycle})` }}>
            <article className="content">
              <h1>
                Loads of
                <br />
                Motorcycles
              </h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque
                possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi
                quis alias?
              </p>
              <Link onClick={scrollTop} to="/products/motorcycle" className="btn hero-btn">
                Shop Motorcycles
              </Link>
            </article>
          </div>
        </div>
      </Slider>
      <FaChevronRight className="slider-right" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .slider-left,
  .slider-right {
    position: absolute;
    z-index: 1;
    color: #fff;
    font-size: 40px;
    top: 50%;
    transform: translate(0, 50%);
  }
  .slider-left {
    left: 10px;
  }
  .slider-right {
    right: 10px;
  }
  .slick-prev,
  .slick-next {
    z-index: 2;
    height: 100px;
    width: 70px;
    &:hover {
      border: 2px solid #fff;
    }
  }
  .slick-next {
    right: 0;
  }
  .slick-prev {
    left: 0;
  }
  .slick-prev:before,
  .slick-next:before {
    color: transparent;
  }
  .image-wrapper {
    width: 100%;
    height: 100%;
    background-size: cover;
    padding: 5rem;
    display: flex;
    background-position: center;
    .content {
      padding: 3rem;
      height: max-content;
      background: rgba(0, 0, 0, 0.8);
      h1 {
        color: #fff;
      }
    }
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: #fff;
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
  @media (max-width: 576px) {
    .slider-right,
    .slider-left {
      display: none;
    }
    .image-wrapper {
      display: flex;
      align-items: flex-start;
      padding: 0;
      height: 100%;
      .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 90vw;
        margin: 0 auto;
        .hero-btn {
          &.mr-20 {
            margin-right: 0;
            margin-bottom: 20px;
          }
        }
      }
    }
  }
`;

export default Hero;
