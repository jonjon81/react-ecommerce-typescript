import { useFilterContext } from '../context/filter_context';
import GridView from './GridView';
import ListView from './ListView';
const TopDealsList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  let topDiscounts = products.filter((product) => product.discountPercentage > 15);

  if (topDiscounts.length < 1) {
    return <h5 style={{ textTransform: 'none' }}>Sorry, no products matched your search.</h5>;
  }

  if (grid_view === false) {
    return <ListView products={topDiscounts} />;
  }
  return <GridView products={topDiscounts} />;
};

export default TopDealsList;
