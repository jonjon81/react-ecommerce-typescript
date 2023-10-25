import { FeaturedProducts, Deals, CategoryProducts, Hero, Services, Contact } from '../components';
const HomePage = () => {
  return (
    <main>
      {/* <Hero /> */}
      <FeaturedProducts />
      <Deals />
      <CategoryProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
