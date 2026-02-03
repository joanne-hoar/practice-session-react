# Front End Frameworks: Module 2: Practice Activity 2
## React Functional Components with Hooks

### Learning Objective
Master React hooks and component patterns needed for Assignment 2.

### Prerequisites
- Complete Practice Activity 1 (Vite + React setup)

### Step 1: Create ProductCard Component (Reusable Functional Component)
In your practice-session project, create `src/components/market.jsx`:

```jsx
function CategoryMenuItem({ image, name, description }) {
  return (
    <div className="category-menu-item" style={{ display: 'flex', alignItems: 'center', margin: '1rem 0' }}>
      <img src={image} alt={name} style={{ height: 60, marginRight: '1rem' }} />
      <div>
        <div><strong>{name}</strong></div>
        <div>{description}</div>
      </div>
    </div>
  );
}

export default CategoryMenuItem;
```

You will use this component inside your `Products` component to display each product as a reusable menu item.

### Step 2: Create Products (Class) and ProductsHome (Functional) Components

Create `src/components/market/Products.jsx` (Class Component):
```jsx
import React, { Component } from 'react';
import CategoryMenuItem from './CategoryMenuItem';

class Products extends Component {
  render() {
    const items = [
      { id: 1, name: 'Cookies', description: 'Delicious cookies', image: '/cookies.jpg' },
      { id: 2, name: 'Drinks', description: 'Refreshing drinks', image: '/drinks.jpg' }
    ];
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>Products</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {items.map(item => (
            <li key={item.id} style={{ margin: '1rem 0' }}>
              <CategoryMenuItem {...item} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Products;
```

Create `src/components/market/ProductsHome.jsx` (Functional Component):
```jsx
import Products from './Products';

function ProductsHome() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Products Home</h2>
      <Products />
      <footer style={{ marginTop: '2rem' }}>
        <p>© 2026 Practice Market</p>
      </footer>
    </div>
  );
}

export default ProductsHome;
```

### Step 3: Create Header Component
In your practice-session project, create `src/components/common/Header.jsx`:

```jsx
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src="/logo-placeholder.png" alt="Market Logo" className="logo" />
        <h1>Practice Market</h1>
        <p>Your Name's Market</p>
      </div>
    </header>
  );
}

export default Header;
```

Create `src/components/common/Header.css`:
```css
.header {
  background-color: #4CAF50;
  color: white;
  padding: 1rem;
  text-align: center;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  height: 50px;
  margin-bottom: 1rem;
}
```

### Step 4: (Bonus) Create Separate Header and Footer Components

You already have a `Header` component. For a footer, create `src/components/common/Footer.jsx`:
```jsx
function Footer() {
  return (
    <footer className="footer" style={{ textAlign: 'center', marginTop: '2rem' }}>
      <p>© 2026 Practice Market</p>
    </footer>
  );
}

export default Footer;
```

---

**Next Steps:** Practice Activity 3 will cover advanced state management, service integration, and routing in React applications.