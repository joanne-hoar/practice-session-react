import './ProductCard.css';

function ProductCard({product, onAction, quantity}) {

    return(
        <div className="product-card">
            <h3>{product.name}</h3>
            <img src={`products/${product.image}`} alt={product.name} />
            {quantity ? (
                <p>Quantity: {quantity}</p>
            ) : (
                <button className="add-btn" onClick={() => onAction(product)}>Add to Cart</button>
            )}
        </div>
    );
}

export default ProductCard