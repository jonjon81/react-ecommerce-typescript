import styled from 'styled-components';
import { formatPrice, discountedPrice } from '../utils/helpers';
import AmountButtons from './AmountButtons';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';

interface CartItemProps {
  id: number;
  image: string;
  name: string;
  price: number;
  amount: number;
  category: string;
  discountPercentage: number;
}

const CartItem: React.FC<CartItemProps> = ({ id, image, name, price, amount, category, discountPercentage }) => {
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
    </Wrapper>
  );
};

export default CartItem;