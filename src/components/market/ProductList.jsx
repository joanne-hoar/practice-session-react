import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList({ items, onAddToCart, onSelectProduct, selectedId }) {
    return(
        <div className="products-grid"> 
            {items.map(item => {
                // Handle both products and cart items {product, quantity}
                const product = item.product || item;
                const quantity = item.quantity;
                
                return (
                    <ProductCard 
                        key={product.id}
                        product={product} 
                        onAction={onAddToCart}
                        onSelect={onSelectProduct}
                        quantity={quantity}
                        isSelected={product.id === selectedId}
                    />
                );
            })}
        </div>
    );
}

export default ProductList