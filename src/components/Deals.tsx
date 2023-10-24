import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { scrollTop } from '../utils/helpers';

import styled from 'styled-components';
import Error from './Error';
import Loading from './Loading';
import Deal from './Deal';

const Deals = () => {
  const { products_loading: loading, products_error: error, featured_products: featured } = useProductsContext();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  let topDiscounts = featured.filter((product) => product.discountPercentage > 15);

  return (
    <Wrapper className="section">
      <div className="title">
        <h2>Huge Sales</h2>
        <p>Our top deals of 15%+ off</p>
        <Link onClick={scrollTop} to="/top-deals" className="btn light">
          <span>Top</span> Deals
        </Link>
      </div>

      <div className="section-center featured deals">
        <FaChevronLeft className="slider-left" />
        <Slider {...settings}>
          {topDiscounts.map((product) => {
            return <Deal key={product.id} {...product} />;
          })}
        </Slider>
        <FaChevronRight className="slider-right" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .deals {
    .slick-prev:before,
    .slick-next:before {
      opacity: 0;
    }
    .slick-dots li.slick-active button:before {
      opacity: 1;
    }
    position: relative;
    .slider-left,
    .slider-right {
      position: absolute;
      z-index: 1;
      font-size: 40px;
      color: #fff;
      top: 50%;
      transform: translate(0, 50%);
      pointer-events: none;
    }

    .slider-left {
      left: -40px;
    }
    .slider-right {
      right: -40px;
    }
  }
  .title {
    min-width: 33%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    * {
      text-align: left;
    }
    .btn {
      margin: 0;
    }
    p {
      font-size: 20px;
      color: #fff;
    }
  }

  display: flex;
  max-width: 1220px;
  margin: auto;
  align-items: center;
  background: var(--clr-primary-0);
  border-radius: 25px;
  padding: 30px 60px;
  .slick-slide {
    background-color: #fff;
    border: 10px solid var(--clr-primary-0);
    border-radius: 25px;
    padding: 20px;
  }
  h2 {
    color: #fff;
    padding-right: 50px;
  }

  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    .slick-dots li button:before {
      font-size: 16px;
      color: #fff;
    }
    .container {
      padding: 10px;
      background: transparent;
    }
    .slick-dots {
      bottom: -40px;
    }

    .slick-prev:before,
    .slick-next:before {
      color: #fff;
      font-size: 80px;
    }
    .slick-next {
      right: -5px;
    }
    .slick-prev {
      left: -70px;
    }
    footer {
      padding: 0 10px;
      flex-direction: column;
      h5 {
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        height: 40px;
        -webkit-box-orient: vertical;
        display: flex;
      }
    }
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    margin: 0 auto;
    text-align: center;
  }
  @media (max-width: 1220px) {
    flex-direction: column;
    padding: 0;
    border-radius: 0;
    .slider-left,
    .slider-right {
      display: none;
    }
    .title {
      min-width: unset;
      padding-top: 2rem;
      align-items: center;
      justify-content: center;
      h2 {
        padding-right: 0;
      }
      * {
        text-align: center;
      }
    }
  }
  @media (max-width: 976px) {
    max-width: 100vw;
    overflow-x: hidden;
  }

  @media (max-width: 576px) {
    .slick-slider.slick-initialized {
      overflow-y: hidden;
    }
    .featured {
      margin: 2rem auto;
    }
    .btn.light {
      padding: 1.5rem;
      font-size: 1.5rem;
    }
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default Deals;
