import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cart_context';
import AmountButtons from './AmountButtons';

interface Product {
  id: number;
  stock: number;
  discountPercentage: number;
}

const AddToCart = ({ product }: { product: Product }) => {
  // add to cart
  const { addToCart } = useCartContext();
  const { id, stock } = product;
  const [amount, setAmount] = useState<number>(1);
  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };
  return (
    <Wrapper>
      <div className="btn-container">
        <AmountButtons increase={increase} decrease={decrease} amount={amount} />
        <Link to="/cart" className="btn" onClick={() => addToCart(id, amount, product, product.discountPercentage)}>
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }
  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;

export default AddToCart;