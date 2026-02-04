# Front End Frameworks: Module 2: Practice Activity 2
## React Functional Components with Hooks

### Learning Objective
Master React hooks and component patterns needed for Assignment 2.

### Prerequisites
- Complete Practice Activity 1 (Vite + React setup)

### Step 1: Create Reusable Functional Components
In your practice-session project, create ProductCard and ProductList components (`src/components/ProductCard.jsx` and `src/components/ProductList.jsx`). Initialize an array of products.

```jsx
import './ProductCard.css';

function ProductCard({product}) {

    return(
        <div>
            <h3>{product.name}</h3>
        </div>
    );
}

export default ProductCard
```

Iterate to display all components.
```jsx
  function ProductList() {
    const allProducts = [
    {
      id: 1,
      name: "Laptop"   
    },
    {
      id: 2,
      name: "Tablet"
    }
    // ... more products ...
    ];

    return(
      <div class="products-grid"> 
        {
            allProducts.map(product => (
                <ProductCard product={product}/>
            ))
        }
      </div>
    );
```

### Step 2: Custom Event

```jsx
```

### Step 3: Use State

```jsx
```

### Step 4: (Bonus) Create Separate Header and Footer Components

You already have a `Header` component. For a footer, create `src/components/common/Footer.jsx`:

---

**Next Steps:** Practice Activity 3 will cover advanced state management, service integration, and routing in React applications.