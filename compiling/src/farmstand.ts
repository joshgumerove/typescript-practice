interface Product {
  price: number;
  name: string;
  quantity: number;
}

const printProduct = (product: Product): void => {
  console.log`${product.name} - $${product.price}`;
};

// note how we can just compile all using tsc

const testProduct: Product = {
  price: 50,
  name: "Test product",
  quantity: 10,
};
