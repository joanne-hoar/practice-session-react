import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList({ items, onAddToCart }) {
    return(
        <div className="products-grid"> 
            {items.map(item => {
                // Handle both products and cart items {product, quantity}
                const product = item.product || item;
                const quantity = item.quantity;
                
                return (
                    <ProductCard product={product} onAction={onAddToCart} quantity={quantity}
                    />
                );
            })}
        </div>
    );
}

export default ProductList