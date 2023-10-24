import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useProductsContext } from '../context/products_context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Error from './Error';
import Loading from './Loading';
import Product from './Product';
import { scrollTop } from '../utils/helpers';

const FeaturedProducts = () => {
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
    slidesToShow: 5,
    slidesToScroll: 5,
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
        },
      },
    ],
  };

  return (
    <Wrapper className="section">
      <div className="title">
        <h2>Our featured products</h2>
        <div className="underline"></div>
      </div>

      <div className="section-center featured">
        <Slider {...settings}>
          {featured.slice(0, 20).map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </Slider>
      </div>
      <Link onClick={scrollTop} to="/products" className="btn">
        all products
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #fff;
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    .slick-dots li button:before {
      font-size: 16px;
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
      color: var(--clr-primary-5);
      font-size: 30px;
    }
    .slick-next {
      right: -18px;
    }
    .slick-prev {
      left: -30px;
    }
    footer {
      padding: 0 10px;
      flex-direction: column;
      h5 {
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (max-width: 766px) {
    .featured {
      margin: 1rem auto 5rem;
    }
  }
  @media (max-width: 575px) {
    .featured {
      margin: 1rem auto 1rem;
      .slick-dots {
        width: 90vw;
        position: relative;
        bottom: -20px;
        left: 50%;
        transform: translate(-50%);
        height: 80px;
      }
    }
    .section-center {
      width: 100vw;
    }
    .slick-slider {
      overflow: hidden;
    }
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
