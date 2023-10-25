import { FC } from 'react';
import styled from 'styled-components';
import { PageHero, StripeCheckout } from '../components';
import { scrollTop } from '../utils/helpers';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';

const CheckoutPage: FC = () => {
  const { cart } = useCartContext();

  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        {cart.length < 1 ? (
          <div className="empty">
            <h2>Your cart is empty</h2>
            <Link onClick={scrollTop} to="/products" className="btn">
              fill it
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`;

export default CheckoutPage;