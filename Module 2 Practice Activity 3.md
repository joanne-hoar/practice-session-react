# Front End Frameworks: Module 2: Practice Activity 3

## Advanced React Patterns and Service Integration

### Learning Objective
Master advanced React patterns needed for Assignment 2's marketService integration: service abstraction, Promise handling, and advanced state management.

### Prerequisites
- Complete Practice Activities 1-2 (Vite setup and component hooks)

### Step 1: Create marketService
Create `src/services/marketService.js`:

```javascript
// marketService pattern
class MarketService {
  loadCategories() {
    // Return Promise<{ name: string }[]>
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const categories = [
            { name: 'Gaming' },
            { name: 'Music' },
            { name: 'Travel' },
            { name: 'Fitness' },
            { name: 'Cooking' }
          ];
          resolve(categories);
        } catch (error) {
          reject(error);
        }
      }, 2000); // 2-second delay
    });
  }

  // Additional method for expansion
  loadProductsByCategory(categoryName) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const products = {
          'Gaming': [
            { id: 1, name: 'Gaming Laptop', description: 'High-performance laptop', image: '/game-laptop.jpg' },
            { id: 2, name: 'Gaming Mouse', description: 'Precision gaming mouse', image: '/game-mouse.jpg' }
          ],
          'Music': [
            { id: 3, name: 'Headphones', description: 'Premium audio headphones', image: '/headphones.jpg' },
            { id: 4, name: 'Guitar', description: 'Acoustic guitar', image: '/guitar.jpg' }
          ]
          // Add more categories as needed
        };
        resolve(products[categoryName] || []);
      }, 2000);
    });
  }
}

export default new MarketService();
```

### Step 2: Create Home Component with Category Navigation

Create `src/components/Home.jsx`:
```jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import marketService from '../services/marketService';

function Home() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    marketService.loadCategories().then(setCategories);
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Welcome to the Practice Market App</h2>
      <p>Select a category to view products:</p>
      {categories.map((cat) => (
        <button key={cat.name} style={{ margin: '0.5rem' }} onClick={() => navigate(`/products?category=${cat.name}`)}>
          {cat.name}
        </button>
      ))}
    </div>
  );
}

export default Home;
```

### Step 3: Create Products Component with Add to Cart and Cart Display

Create `src/components/market/Products.jsx`:
```jsx
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import marketService from '../../services/marketService';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [showCart, setShowCart] = useState(false);
  const query = useQuery();
  const category = query.get('category') || 'Gaming';

  useEffect(() => {
    marketService.loadProductsByCategory(category).then(setProducts);
  }, [category]);

  const handleQuantityChange = (id, value) => {
    setQuantities((q) => ({ ...q, [id]: value }));
  };

  const handleAddToCart = (product) => {
    const qty = parseInt(quantities[product.id] || 1, 10);
    setCart((c) => {
      const existing = c.find((item) => item.id === product.id);
      if (existing) {
        return c.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [...c, { ...product, quantity: qty }];
    });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Products in {category}</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((product) => (
          <li key={product.id} style={{ margin: '1rem 0' }}>
            <img src={product.image} alt={product.name} style={{ height: 60 }} />
            <div><strong>{product.name}</strong></div>
            <div>{product.description}</div>
            <input
              type="number"
              min="1"
              value={quantities[product.id] || 1}
              onChange={(e) => handleQuantityChange(product.id, e.target.value)}
              style={{ width: 50, margin: '0.5rem' }}
            />
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setShowCart((s) => !s)} style={{ margin: '1rem' }}>
        {showCart ? 'Hide Cart' : 'Submit & Show Cart'}
      </button>
      {showCart && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Cart</h3>
          {cart.length === 0 ? (
            <p>No products in cart.</p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.name} x {item.quantity}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default Products;
```

### Step 4: Integrate Routing for Home and Products

Update your `src/App.jsx` to include routing for Home and Products:

```jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Products from './components/market/Products';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <h1>Practice Market App</h1>
          <nav>
            <Link to="/">Home</Link> | <Link to="/products">Products</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
```

---

**Next Steps:** Save all files for this activity. You now have a basic React app with routing, component interaction, and modern state management.