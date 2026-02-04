import './ProductCard.css';

function ProductCard({product, onAction, onSelect, quantity, isSelected}) {

    return(
        <div 
            className={`product-card ${isSelected ? 'selected' : ''}`}
            onClick={() => onSelect && onSelect(product)}
        >
            <h3>{product.name}</h3>
            <img src={`products/${product.image}`} alt={product.name} />
            {quantity ? (
                <p>Quantity: {quantity}</p>
            ) : (
                <button 
                    className="add-btn" 
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent card selection when clicking button
                        onAction(product);
                    }}
                >
                    Add to Cart
                </button>
            )}
        </div>
    );
}

export default ProductCard