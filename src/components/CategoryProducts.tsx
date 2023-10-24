import { useProductsContext } from '../context/products_context';
import styled from 'styled-components';
import Error from './Error';
import Loading from './Loading';
import Category from './Category';

const CategoryProducts = () => {
  const { products_loading: loading, products_error: error, featured_products: category } = useProductsContext();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
  const alphaCategories = every_nth(category, 5).sort((a, b) => {
    return a.category.localeCompare(b.category);
  });

  return (
    <Wrapper className="section">
      <div className="title">
        <h2>Shop by category</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center category">
        {alphaCategories.map((item) => {
          return <Category key={item.id} {...item} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #fff;
  .category {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 150px;
    }
  }

  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (max-width: 992px) {
    padding-bottom: 0;
  }
  @media (min-width: 320px) {
    .category {
      grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    }
  }
`;

export default CategoryProducts;
