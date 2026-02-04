const products = [
  {
    id: 1,
    name: "Can of Beans",
    image: "can-of-beans.jpg",
    description: "Full of magical moments, this can of beans could be yours!",
    category: "grocery"
  },
  {
    id: 2,
    name: "Bag of Crisps",
    image: "bag-of-crisps.jpg",
    description: "That should say chips. Any flavour you want.",
    category: "grocery"
  },
  {
    id: 3,
    name: "Gummy Bears",
    image: "gummy-bears.jpg",
    description: "Be sure to specify quantity as we have too many and will send you a lot.",
    category: "grocery"
  },
  {
    id: 4,
    name: "T-Shirt",
    image: "t-shirt.jpg",
    description: "Wear this t-shirt and you will have good luck.",
    category: "clothing"
  },
  {
    id: 5,
    name: "Hobo Bag",
    image: "hobo-bag.jpg",
    description: "Fits everything you need.",
    category: "clothing"
  },
  {
    id: 6,
    name: "Shoes",
    image: "shoes.jpg",
    description: "Shown one, comes in pairs.",
    category: "clothing"
  },
  {
    id: 7,
    name: "Shorts",
    image: "shorts.jpg",
    description: "Complete the look.",
    category: "clothing"
  },
  {
    id: 8,
    name: "Postcard",
    image: "postcard.jpg",
    description: "Let them know that you're thinking of them.",
    category: "stationary"
  },
  {
    id: 9,
    name: "Pens",
    image: "pens.jpg",
    description: "Contains ink.",
    category: "stationary"
  }
];

class ProductService {
  getAllProducts() {
    // Return Promise with 2-second delay (simulates API call)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  }

  getProductById(id) {
    return products.find(product => product.id === id);
  }
}

export default new ProductService();
