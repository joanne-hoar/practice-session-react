import { useState } from 'react';
import ProductList from '../components/market/ProductList';
import productService from '../services/productService';
import cartService from '../services/cartService';
import './ProductsPage.css';

function ProductsPage(){
    const allProducts = productService.getAllProducts();
    const [cart, setCart] = useState(cartService.getCart());

    function addToCart(product) {
        const updatedCart = cartService.addItem(product);
        setCart(updatedCart);
    }

    const totalItems = cartService.getTotalItems();

    return(
        <div className="page-container">
            <h2>Items in cart: {totalItems}</h2>
            <ProductList items={allProducts} onAddToCart={addToCart} />
        </div>
    );
}
export default ProductsPage