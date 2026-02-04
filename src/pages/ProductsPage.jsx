import { useState, useEffect } from 'react';
import ProductCard from '../components/market/ProductCard';
import ProductDescription from '../components/market/ProductDescription';
import productService from '../services/productService';
import cartService from '../services/cartService';
import './ProductsPage.css';

function ProductsPage(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState(cartService.getCart());
    const [selectedId, setSelectedId] = useState(null);

    // useEffect to fetch products on first render
    useEffect(() => {
        productService.getAllProducts()
            .then(data => {
                setProducts(data);
                setLoading(false);
            });
    }, []); // Empty dependency array = run once on mount

    function addToCart(product) {
        const updatedCart = cartService.addItem(product);
        setCart(updatedCart);
    }

    function selectProduct(product) {
        setSelectedId(product.id);
    }

    function clearSelection() {
        setSelectedId(null);
    }

    const totalItems = cartService.getTotalItems();
    const selectedProduct = products.find(p => p.id === selectedId);

    if (loading) {
        return (
            <div className="page-container">
                <h2>Loading products...</h2>
            </div>
        );
    }

    return(
        <div className="page-container">
            <h2>Items in cart: {totalItems}</h2>
            {selectedProduct && (
                <ProductDescription 
                    product={selectedProduct} 
                    onClose={clearSelection} 
                />
            )}
            <div className="products-grid">
                {products.map(product => (
                    <ProductCard 
                        key={product.id}
                        product={product}
                        onAction={addToCart}
                        onSelect={selectProduct}
                        isSelected={product.id === selectedId}
                    />
                ))}
            </div>
        </div>
    );
}
export default ProductsPage