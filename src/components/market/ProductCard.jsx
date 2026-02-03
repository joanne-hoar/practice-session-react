import './ProductCard.css';

function ProductCard({product}) {

    return(
        <div class="product-card">
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} />
        </div>
    );
}

export default ProductCard