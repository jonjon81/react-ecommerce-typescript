import Logo from './Logo';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { FaTimes, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { links } from '../utils/constants';
import { ProductSublinksAz } from '../utils/constants';
import styled from 'styled-components';
import CartButtons from './CartButtons';
import { useUserContext } from '../context/user_context';
import { useFilterContext } from '../context/filter_context';
import { scrollTop } from '../utils/helpers';

const Sidebar = () => {
  const [isActive, setActive] = useState('false');

  const handleSubmenuToggle = () => {
    setActive(!isActive);
  };

  const { isSidebarOpen, closeSidebar } = useProductsContext();
  const { myUser } = useUserContext();
  const { clearFilters } = useFilterContext();

  function mainMenuFunction() {
    clearFilters();
    closeSidebar();
    scrollTop();
  }

  function subMenuFunction() {
    mainMenuFunction();
    handleSubmenuToggle();
  }

  function closeBothMenus() {
    closeSidebar();
    let openSub = document.querySelector('.sublinks.active');
    if (openSub) {
      handleSubmenuToggle();
    }
  }

  return (
    <SidebarContainer>
      <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
        <div className="sidebar-header">
          <Logo />
          <button className="close-btn" onClick={closeBothMenus}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map(({ id, text, url }) => {
            if (text === 'products') {
              return (
                <li key={id}>
                  <Link onClick={handleSubmenuToggle}>
                    {text} <FaChevronRight className="chevron-right" />
                  </Link>
                  <ul className={`sublinks ${isActive ? null : 'active'}`}>
                    <button onClick={handleSubmenuToggle} className="btn back-to-main">
                      <FaChevronLeft /> <span>back to main menu</span>
                    </button>
                    <li key="all-products">
                      <Link onClick={subMenuFunction} to="/products">
                        All
                      </Link>
                    </li>
                    {ProductSublinksAz.map((sublink) => {
                      return (
                        <li key={sublink.id}>
                          <Link onClick={subMenuFunction} to={sublink.url}>
                            {sublink.text}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            }
            return (
              <li key={id}>
                <Link to={url} onClick={mainMenuFunction}>
                  {text}
                </Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link to="/checkout" onClick={closeSidebar}>
                checkout
              </Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    color: #fff;
  }
  .back-to-main {
    padding: 1rem;
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    cursor: pointer;
    background: #fff;
    color: #000;
    svg {
      margin-right: 5px;
    }
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: #fff;
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: #fff;
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-primary-0);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  ul.sublinks {
    background: var(--clr-primary-0);
    width: 100%;
    z-index: 1;
    position: absolute;
    top: 5rem;
    padding-top: 60px;
    flex-wrap: wrap;
    right: 100%;
    transition: 0.3s;
    &.active {
      right: 0;
      display: flex;
    }
    li {
      width: 50%;
    }
  }

  svg.chevron-right {
    position: absolute;
    margin-top: 5px;
    margin-left: 5px;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
