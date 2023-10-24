import styled from 'styled-components';
const Logo = () => {
  return (
    <Wrapper>
      <span>Atlas</span>Ecommerce
    </Wrapper>
  );
};

const Wrapper = styled.h3`
  margin-bottom: 0;
  color: #fff;
  span {
    color: var(--clr-yellow-dark);
  }
`;

export default Logo;
