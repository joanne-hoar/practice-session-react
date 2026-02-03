import './ProductCard.css';

function ProductCard({product}) {

    function addToCart() {
    alert(`Add ${product.name} to cart.`);
  }

    return(
        <div class="product-card">
            <h3>{product.name}</h3>
            <img src={`products/${product.image}`} alt={product.name} />
            <button class="add-btn" onClick={addToCart}>Add to Cart</button>
        </div>
    );
}

export default ProductCard