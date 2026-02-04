import { useState } from 'react';
import cartService from '../services/cartService';
import ProductCard from '../components/market/ProductCard';
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
                    <div className="products-grid">
                        {cartItems.map(item => (
                            <ProductCard 
                                key={item.product.id}
                                product={item.product}
                                quantity={item.quantity}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default CartPage;
