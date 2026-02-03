import './ProductCard.css';

function ProductCard({product, onAction}) {

    return(
        <div class="product-card">
            <h3>{product.name}</h3>
            <img src={`products/${product.image}`} alt={product.name} />
            <button class="add-btn" onClick={() => onAction(product)}>Add to Cart</button>
        </div>
    );
}

export default ProductCard