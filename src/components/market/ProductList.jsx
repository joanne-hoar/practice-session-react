import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList() {
    const allProducts = [{
      id: 1,
      name: "Can of Beans",
      image: "can-of-beans.jpg"    
    },
    {
      id: 2,
      name: "Bag of Crisps",
      image: "bag-of-crisps.jpg"
    },
    {
      id: 3,
      name: "Gummy Bears",
      image: "gummy-bears.jpg"
    },
    {
      id: 4,
      name: "T-Shirt",
      image: "t-shirt.jpg"
    },
    {
      id: 5,
      name: "Hobo Bag",
      image: "hobo-bag.jpg"
    },
    {
      id: 6,
      name: "Shoes",
      image: "shoes.jpg",
    },
    {
      id: 7,
      name: "Shorts",
      image: "shorts.jpg"
    },
    {
      id: 8,
      name: "Postcard",
      image: "postcard.jpg"
    },
    {
      id: 9,
      name: "Pens",
      image: "pens.jpg"
    }];

    function addToCart(product) {
        alert(`Add ${product.name} to cart.`);
    }

    return(
      <div class="products-grid"> 
        {
            allProducts.map(product => (
                <ProductCard product={product} onAction={addToCart}/>
            ))
        }
      </div>
    );
}

export default ProductList