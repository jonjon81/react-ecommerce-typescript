import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { single_product_url as url } from '../utils/constants';
import { formatPrice, discountedPrice, scrollTop } from '../utils/helpers';
import { Loading, Error, ProductImages, Rating, PageHero, AddToCart } from '../components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface SingleProductPageProps {}

const SingleProductPage: React.FC<SingleProductPageProps> = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}/${id}`);
    // eslint-disable-next-line
  }, [id]);
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {
    category,
    title,
    price,
    description,
    stock,
    rating,
    reviews,
    id: sku,
    brand,
    images,
    discountPercentage,
  } = product;
  return (
    <Wrapper>
      <PageHero title={title} category={category} product />
      <div className="section section-center page">
        <Link onClick={scrollTop} to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          <ProductImages images={images} />
          <section className="content">
            <h2>{title}</h2>
            <Rating rating={rating} reviews={reviews} />
            <p className="price crossed-out">{formatPrice(price)}</p>
            <p className="new-price">{discountedPrice(price, discountPercentage)}</p>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available : </span>
              {stock > 0 ? 'In stock' : 'out of stock'}
            </p>
            <p className="info">
              <span>SKU :</span>
              {sku}
            </p>
            <p className="info">
              <span>Brand :</span>
              {brand}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .new-price {
    color: var(--clr-primary-5);
    font-size: 1.25rem;
    font-weight: bold;
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  .crossed-out {
    font-size: 1.25rem;
    margin: 0;
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
};`

export default SingleProductPage;