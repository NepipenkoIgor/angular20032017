type Product = {
  _id: string;
  title: string;
  price: string;
  picture: string;
};

type CartItem = {
  product: Product;
  action: 'add' | 'remove'
}