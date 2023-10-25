import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import CartColumns from './CartColumns';
import CartItem from './CartItem';
import CartTotals from './CartTotals';
const CartItems = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <Wrapper className="section section-center">
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <p className="free-shipping">Free shipping on orders over $50!</p>
      <div className="link-container">
        <Link to="/products" className="link-btn">
          continue shopping
        </Link>
        <button type="button" className="link-btn clear-btn" onClick={clearCart}>
          clear shopping cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .free-shipping {
    padding: 10px;
    font-weight: bold;
    background: #fff;
    border: 2px solid var(--clr-red-dark);
    text-align: center;
    color: var(--clr-red-dark);
  }
  .clear-btn {
    background: var(--clr-black);
    font-size: 1rem;
    @media (max-width: 776px) {
      font-size: 0.875rem;
    }
  }
`;
export default CartItems;