import ProductCard from '../components/market/ProductCard';
import './ProductsPage.css'

function ProductsPage(){

    return(
        <ProductCard product={{id:1,name:'Can of Beans', image:'products/can-of-beans.jpg'}}/>
    );
}
export default ProductsPage