import { useState } from 'react';
import cartService from '../services/cartService';
import ProductList from '../components/market/ProductList';
import './ProductsPage.css';

function CartPage() {
    const [cart, setCart] = useState(cartService.getCart());
    const cartItems = Object.values(cart);
    const totalItems = cartService.getTotalItems();

    return (
        <div className="page-container">
            <h1>Shopping Cart</h1>
            
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <h2>Total Items: {totalItems}</h2>
                    <ProductList items={cartItems} />
                </>
            )}
        </div>
    );
}

export default CartPage;
