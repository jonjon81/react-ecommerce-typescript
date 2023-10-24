import React from 'react';
import styled from 'styled-components';
import { Filters, ProductList, Sort, PageHero } from '../components';
const ProductsPage = () => {
  return (
    <main>
      <PageHero title="products" />
      <Wrapper className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 10px;
    margin: 0 auto 4rem;
  }
  .search-input {
    width: 100%;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
      margin: 4rem auto;
      gap: 3rem 1.5rem;
    }

    .search-input {
      width: auto;
      border: 0;
      margin-top: 0;
    }
  }
`;

export default ProductsPage;
