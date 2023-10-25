import { FC, useState, MouseEvent } from 'react';
import styled from 'styled-components';
import { FaWindowClose } from 'react-icons/fa';

interface ProductImagesProps {
  images: string[][];
}

const ProductImages: FC<ProductImagesProps> = ({ images = [[]] }) => {
  const [main, setMain] = useState<string>(images[0]);
  const [isActive, setIsActive] = useState<boolean>(false);
  let vpWidth: number = window.innerWidth;
  let modalBg: HTMLElement | null = document.querySelector('.modal-background');

  const imageModalActive = (): void => {
    vpWidth = window.innerWidth;
    if (vpWidth > 992) {
      setIsActive(true);
      modalBg?.classList.add('active');
    }
  };

  const closeActiveModal = (): void => {
    setIsActive(false);
    modalBg?.classList.remove('active');
  };

  modalBg?.addEventListener(
    'click',
    function (event: MouseEvent) {
      event.preventDefault();
      closeActiveModal();
    },
    false
  );

  return (
    <Wrapper className={isActive ? 'image-modal' : ''}>
      <div className="modal-background"></div>
      <FaWindowClose className="close-image-modal" onClick={closeActiveModal} />
      <img src={main} alt="" className="main" onClick={imageModalActive} />
      <div className="gallery">
        {/* {images.map((imageRow, rowIndex) => {
          return imageRow.map((image, index) => {
            return (
              <img
                src={image}
                alt=""
                key={index}
                className={`${image === main ? 'active' : ''}`}
                onClick={() => setMain(images[rowIndex][index])}
              />
            );
          });
        })} */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  &.image-modal {
    max-width: 1220px;
    position: fixed;
    height: 90vh;
    width: 90vw;
    background: rgb(255, 255, 255);
    top: 50%;
    padding: 4rem;
    border-radius: 12px;
    transform: translate(0, -50%);
    .close-image-modal {
      display: flex;
      position: absolute;
      right: 100px;
      font-size: 40px;
      cursor: pointer;
      &:hover {
        color: var(--clr-yellow-dark);
      }
    }
    .main {
      height: 60vh;
      cursor: auto;
    }
    .gallery {
      margin-top: 40px;
    }
  }
  .main {
    height: 600px;
  }
  .close-image-modal {
    display: none;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: contain;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
      border-radius: 5%;
      border: 4px solid transparent;
      &.active {
        border: 4px solid var(--clr-primary-5);
      }
    }
  }

  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
      cursor: pointer;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
};`

export default ProductImages;