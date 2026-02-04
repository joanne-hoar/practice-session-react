import './ProductDescription.css';

function ProductDescription({ product, onClose }) {
    return (
        <div className="selected-product-details">
            <div className="details-header">
                <img 
                    src="/mushroom-icon.png" 
                    alt="mushroom" 
                    className="mushroom-icon"
                    key={product.id}
                />
                <h3>{product.name}</h3>
                <span 
                    className="close-icon" 
                    onClick={onClose}
                >
                    ✕
                </span>
            </div>
            <p>{product.description}</p>
        </div>
    );
}

export default ProductDescription;
