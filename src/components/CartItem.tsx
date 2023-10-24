import styled from 'styled-components';
import { formatPrice } from '../utils/helpers';
import { discountedPrice } from '../utils/helpers';
import AmountButtons from './AmountButtons';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
const CartItem = ({ id, image, name, price, amount, category, discountPercentage }) => {
  let discountNumber = price * ((100 - Math.round(discountPercentage)) / 100);
  const { removeItem, toggleAmount } = useCartContext();
  const increase = () => {
    toggleAmount(id, 'inc');
  };
  const decrease = () => {
    toggleAmount(id, 'dec');
  };
  return (
    <Wrapper>
      <div className="title">
        <Link to={`/products/${category}/${id}`}>
          <img className="image" src={image} alt={name} />
        </Link>
        <div>
          <Link to={`/products/${category}/${id}`}>
            <h5 className="name">{name}</h5>
          </Link>
          <h5 className="price-small">
            <span className="crossed-out">{formatPrice(price)}</span>
            <span>/{discountedPrice(price, discountPercentage)} </span>
          </h5>
        </div>
      </div>
      <h5 className="price">
        <span className="crossed-out">{formatPrice(price)}</span>{' '}
        <span>/{discountedPrice(price, discountPercentage)}</span>
      </h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className="subtotal">{formatPrice(discountNumber * amount)}</h5>
      <button className="remove-btn" onClick={() => removeItem(id)}>
        <FaTrash />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .subtotal {
    display: none;
  }
  .price {
    display: none;
  }
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;
  .title {
    grid-template-rows: 75px;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }
  img {
    width: 75px;
    height: 75px;
    display: block;
    border-radius: var(--radius);
    object-fit: contain;
  }
  .image {
    border: 2px solid transparent;
    &:hover {
      border: 2px solid var(--clr-primary-5);
    }
  }
  h5 {
    font-size: 0.75rem;
    margin-bottom: 0;
  }

  .color {
    color: var(--clr-grey-5);
    font-size: 0.75rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      background: red;
      margin-left: 0.5rem;
      border-radius: var(--radius);
    }
  }
  .price-small {
    color: var(--clr-primary-5);
    display: flex;
  }
  .amount-btns {
    width: 75px;
    button {
      width: 1rem;
      height: 0.5rem;
      font-size: 0.75rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
  .remove-btn {
    color: var(--clr-white);
    background: transparent;
    border: transparent;
    letter-spacing: var(--spacing);
    background: var(--clr-red-dark);
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    font-size: 0.75rem;
    cursor: pointer;
  }
  @media (min-width: 776px) {
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--clr-grey-5);
      font-weight: 400;
      font-size: 1rem;
    }
    .price-small {
      display: none;
    }
    .price {
      display: flex;
      font-size: 1rem;
      color: var(--clr-primary-5);
      font-weight: 400;
    }
    .name {
      font-size: 0.85rem;
      color: #000;
      &:hover {
        color: var(--clr-primary-5);
      }
    }
    .color {
      font-size: 0.85rem;
      span {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;
    img {
      height: 75px;
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
    img {
      width: 100%;
    }
    .amount-btns {
      width: 100px;
      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`;

export default CartItem;
