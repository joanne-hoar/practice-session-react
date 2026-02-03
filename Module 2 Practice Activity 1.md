# Front End Frameworks: Module 2: Practice Activity 1

## React with Vite Project Setup

### Learning Objective
Master Vite + React setup needed for Assignment 2.

### Prerequisites
- Node.js installed on your system

### Step 1: Create Vite + React Project
Create a project:
- `npm create vite@latest practice-session -- --template react`
- `cd practice-session`
- `npm install`
- `npm run dev`


### Step 2: Understand Vite Project Structure
Explore the project structure:
- `src/main.jsx` - Application entry point
- `src/App.jsx` - Main App component
- `src/App.css` - Global styles
- `vite.config.js` - Vite configuration
- `package.json` - Dependencies and scripts

#### The scripts section in package.json (Vite)
In a modern Vite-based React project, the `scripts` section in `package.json` typically looks like this:

```json
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
```

- `dev`: Starts the development server with hot reloading (use `npm run dev`)
- `build`: Builds the app for production (use `npm run build`)
- `preview`: Serves the production build locally for previewing (use `npm run preview`)

> Note: Unlike create-react-app, Vite does not include a `test` or `eject` script by default. You can add testing tools separately if needed.

### Step 3: Set Up Folder Structure
Create the folder structure:
- `mkdir src/components`
- `mkdir src/components/common`
- `mkdir src/components/market`
- `mkdir src/services`

### Step 4: Customize App
Update `src/App.jsx` with your own content.

### Step 5: Create a Header Component in `src/components/common`

Create the new files for Header.jsx and Header.css. 

``` jsx
import './Header.css';

function Header({(title)}) {
    return(
        <h1>Every Day Market</h1>
    );
}

export default Header;
```

Import into App.jsx.

```jsx
import storeImage from '/cute-storefront.jpg'
import Header from  './components/common/Header'
import './App.css'

function App() {
  return (
    <>
      <Header title={'Every Day Market'} />
      <div>        
         <img src={storeImage} alt="Cute Storefront Logo" />        
      </div>
    </>
  )
}

export default App
```
### Step 6: Routing

```jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductsHome from './components/market/ProductsHome';
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
            <Route path="/products" element={<ProductsHome />} />
            <Route path="/products/list" element={<Products />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
```
### Step 5: Add Home, ProductsHome, and Products Components

Create `src/components/Home.jsx`:
```jsx
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Welcome to the Practice Market App</h2>
      <button onClick={() => navigate('/products')}>Go to Products</button>
    </div>
  );
}

export default Home;
```

Create `src/components/market/ProductsHome.jsx`:
```jsx
import { useNavigate } from 'react-router-dom';

function ProductsHome() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Products Home</h2>
      <button onClick={() => navigate('/products/list')}>View All Products</button>
    </div>
  );
}

export default ProductsHome;
```

Create `src/components/market/Products.jsx`:
```jsx
function Products() {
  // Example static product list
  const products = [
    { id: 1, name: 'Cookies', description: 'Delicious cookies', image: '/cookies.jpg' },
    { id: 2, name: 'Drinks', description: 'Refreshing drinks', image: '/drinks.jpg' }
  ];
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Products List</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map(product => (
          <li key={product.id} style={{ margin: '1rem 0' }}>
            <img src={product.image} alt={product.name} style={{ height: 60 }} />
            <div><strong>{product.name}</strong></div>
            <div>{product.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
```

---

**Next Steps:** Practice Activity 2 will cover component structure and useState/useEffect patterns.