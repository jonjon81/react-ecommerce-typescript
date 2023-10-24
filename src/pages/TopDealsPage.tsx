import styled from 'styled-components';
import { Filters, TopDealsList, SortDeals, PageHero } from '../components';
const TopDealsPage = () => {
  return (
    <main>
      <PageHero title="top deals" product={''} category={''} />
      <Wrapper className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <SortDeals />
            <TopDealsList />
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
  .discount-percent.show {
    display: inline-block;
    background: var(--clr-red-dark);
    padding: 5px;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 10px 0;
    color: rgb(255, 255, 255);
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
      margin: 4rem auto;
      gap: 3rem 1.5rem;
    }

    .products {
      margin: 4rem auto;
    }
    .search-input {
      width: auto;
      border: 0;
      margin-top: 0;
    }
  }
`;

export default TopDealsPage;
