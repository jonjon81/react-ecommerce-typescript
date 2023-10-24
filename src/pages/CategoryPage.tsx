import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { PageHero } from '../components';
import { useFilterContext } from '../context/filter_context';
import Product from '../components/Product';
import Hidden from '../components/Hidden';

const CategoryPage = () => {
  const { all_products: products } = useFilterContext();
  const { category } = useParams();
  return (
    <main>
      <PageHero title={category} product />
      <Wrapper className="page">
        <div className="section-center products">
          <div className="column-filter-row"></div>
          <div className="category-container">
            {products.map((product) => {
              if (product.category === category) {
                return <Product key={product.id} {...product} />;
              } else {
                return <Hidden key={product.id} />;
              }
            })}
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .btn-container,
  .products-found {
    display: none;
  }
  .column-filter-row {
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .sort-section {
    margin: 0;
    display: inline-block;
    * {
      border: none;
    }
  }
  .category-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem 1.5rem;
    padding-bottom: 80px;
    .container {
      background: none;
    }
    img {
      height: 250px;
      object-fit: contain;
    }
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }

  @media (max-width: 567px) {
    .category-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default CategoryPage;
