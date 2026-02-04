import { useState, useEffect } from 'react';
import ProductList from '../components/market/ProductList';
import productService from '../services/productService';
import cartService from '../services/cartService';
import './ProductsPage.css';

function ProductsPage(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState(cartService.getCart());

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

    const totalItems = cartService.getTotalItems();

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
            <ProductList items={products} onAddToCart={addToCart} />
        </div>
    );
}
export default ProductsPage