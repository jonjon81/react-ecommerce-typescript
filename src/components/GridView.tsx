import styled from 'styled-components';
import Product from './Product';

const GridView = ({ products }) => {
  return (
    <Wrapper className="grid-view-wrapper">
      <div className="products-container">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }
  @media (max-width: 768px) {
    width: 100vw;
    margin-left: -5vw;
    padding: 0 10px;
  }

  @media (min-width: 320px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default GridView;
