class CartService {
  constructor() {
    this.cart = {};
  }

  addItem(product) {
    if (this.cart[product.id]) {
      this.cart[product.id].quantity += 1;
    } else {
      this.cart[product.id] = { product, quantity: 1 };
    }
    return this.getCart();
  }

  getCart() {
     // spread operator returns a shallow copy of the object
    return { ...this.cart };
  }

  getTotalItems() {
    return Object.values(this.cart).reduce((sum, item) => sum + item.quantity, 0);
  }
}

export default new CartService();
