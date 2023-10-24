import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';
import { getUniqueValues, formatPrice } from '../utils/helpers';
import { FaCog, FaTimes } from 'react-icons/fa';

const Filters = () => {
  const {
    filters: { text, category, brand, min_price, price, max_price },
    updateFilters,
    all_products,
    clearFilters,
  } = useFilterContext();

  const [isActive, setActive] = useState('false');

  const handleFilterToggle = () => {
    setActive(!isActive);
  };

  let searchValue = document.querySelector('.-search-bar input');
  let clearButton = document.querySelector('.clearButton');
  if (searchValue) {
    if (searchValue.defaultValue.length > 0) {
      clearButton.classList.add('active');
    } else {
      clearButton.classList.remove('active');
    }
  }

  const categories = getUniqueValues(all_products, 'category');
  const companies = getUniqueValues(all_products, 'brand');

  return (
    <Wrapper className="filter-wrapper">
      <div className="content">
        <form className="filter-form" onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className="search-cog">
            {' '}
            <div className="form-control -search-bar">
              <input
                type="text"
                name="text"
                value={text}
                placeholder="search"
                onChange={updateFilters}
                className="search-input"
              />
              <button className="clearButton" onClick={clearFilters}>
                <FaTimes />
              </button>
            </div>
            <button onClick={handleFilterToggle} className="-cog">
              <FaCog />
            </button>
          </div>
          {/* end of search input */}
          {/* category */}
          <div className={`control-container ${isActive ? null : 'active'}`}>
            <div className="form-control -category">
              <h5>
                category <span className="category-message">(Scroll down for more)</span>
              </h5>
              <div className="category-list-holder">
                {categories.map((c, index) => {
                  return (
                    <button
                      key={index}
                      onClick={updateFilters}
                      type="button"
                      name="category"
                      className={`${category === c.toLowerCase() ? 'active' : null}`}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            </div>
            {/* end of category */}
            {/* brand */}
            <div className="form-control -brand">
              <h5>brand</h5>
              <select name="brand" value={brand} onChange={updateFilters} className="brand">
                {companies.map((c, index) => {
                  return (
                    <option key={index} value={c}>
                      {c}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* end of brand */}
            {/* price */}
            <div className="form-control -price">
              <h5>price</h5>
              <p className="price">{formatPrice(price)}</p>
              <input type="range" name="price" onChange={updateFilters} min={min_price} max={max_price} value={price} />
            </div>
            {/* end of price */}
            <button type="button" className="clear-btn" onClick={clearFilters}>
              clear filters
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
    &.-category {
      max-height: 300px;
      overflow-y: scroll;
    }

    &.-brand * {
      max-width: 100%;
    }
  }
  span.category-message {
    display: none;
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-8);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  input[type='range'] {
    width: 100%;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .brand {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.5rem;
    border-radius: var(--radius);
  }
  .search-cog {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    .-cog {
      display: none;
      color: #fff;
      font-size: 1.5rem;
    }
    .-search-bar {
      width: 200px;
      display: flex;
      input {
        width: 100%;
      }
      .clearButton {
        padding: 5px;
        margin-left: -30px;
        font-weight: bold;
        display: none;
        border: none;
        svg {
          position: absolute;
          font-size: 1.25rem;
        }
        &.active {
          display: flex;
          align-items: center;
          color: var(--clr-red-dark);

          &:hover {
            color: #000;
          }
        }
      }
    }
    .control-container {
      width: 100%;
      height: 0;
      overflow: hidden;
      transition: 0.3s;
      height: 100%;
      position: relative;
      top: 0;
      display: none;
    }
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
  @media (max-width: 767px) {
    width: 100vw;
    margin-left: -5vw;
    .search-input {
      border-radius: 0;
    }
    .clear-btn {
      width: 100%;
      border-radius: 0;
      margin: 0;
    }
    .category-list-holder {
      padding: 0 5px;
      grid-template-columns: repeat(3, 1fr);
      display: grid;
      border: 2px solid;
      overflow-y: scroll;
      background: var(--clr-primary-2);
      &::-webkit-scrollbar {
        background-color: var(--clr-primary-2);
      }
      &::-webkit-scrollbar-thumb {
        background-color: #fff;
      }
      * {
        color: #fff;
      }
      .active {
        color: var(--clr-primary-2);
        background: #fff;
      }
    }

    .search-cog {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      padding-bottom: 10px;
      .-cog {
        display: flex;
        padding: 1rem;
      }
      .-search-bar {
        margin: 0;
        width: 100%;
      }
    }

    .filter-form {
      display: flex;
      flex-wrap: wrap;
      background: var(--clr-primary-2);
      padding: 0 1rem;
      .-brand,
      .-price {
        width: 50%;
        margin-bottom: 20px;
        color: #fff;
      }
      .-category {
        color: rgb(255, 255, 255);
        overflow: hidden;
        width: 100%;
        .category-message {
          font-size: 0.75rem;
          display: inline;
          text-transform: lowercase;
          font-family: auto;
        }
      }
      .price {
        color: #fff;
      }
    }
    .control-container {
      display: none;
      flex-direction: column;
      width: 100%;
      padding: 20px 0;
      &.active {
        display: flex;
      }
      .form-control {
        width: 100%;
        * {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 576px) {
    .category-list-holder {
      grid-template-columns: repeat(2, 1fr);
      display: grid;
      max-height: 115px;
    }
    .search-input {
      width: 100%;
    }
  }
`;

export default Filters;
