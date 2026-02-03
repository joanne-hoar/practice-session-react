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
Create a folder structure for your project, for example:
- `mkdir src/components`
- `mkdir src/components/common`
- `mkdir src/components/market`
- `mkdir src/pages`
- `mkdir src/services`

### Step 4: Customize App
Update `src/App.jsx` with your own content.

### Step 5: Create a Header Component in `src/components/common`

Create the new files for Header.jsx and Header.css. 

``` jsx
import './Header.css';

function Header({(title)}) {
    return(
        <h1>{title}}</h1>
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

Images can be stored in the `/public` folder. You can re-use the same images and styles from Module 1 or create new styles.

### Step 6: Add Home Page and Products Page

Create components for HomePage and ProductsPage eg. `src/pages/HomePage.jsx`:


### Step 7: Routing

Install react-router-dom package:

```bash
npm install react-router-dom
```

In `src/main.jsx` use BrowserRouter.

```jsx
import { BrowserRouter } from 'react-router-dom'
// ... exisiting code ...
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```

Define routing in App.jsx:

```jsx
import Products from './pages/ProductsPage';
import Home from './pages/HomePage';
// ... existing code ...
function App() {
  return (
    <>
      <Header title={'Every Day Market'} />
      <div>        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
      </div>
    </>
  )
}
```

Add navigation links, eg. in `src/componenets/Header.jsx` with Link or useNavigation:

```jsx
import { Link} from 'react-router-dom';

//... exisiting code ... 

  // in header display  
        <nav>
            <Link class="button" to="/">Home</Link>
            <Link class="button" to="/products">Products</Link>
        </nav>

//... exisiting code ... 
```

---

**Next Steps:** Practice Activity 2 will cover component structure and useState/useEffect patterns.