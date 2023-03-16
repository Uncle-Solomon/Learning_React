const Product = () => {
  const products = ["Laptop", "Phone", "Mifi", "Computer Stand"];
  const productList = products.map((product) => <h3>{product}</h3>);
  return <div>{productList}</div>;
};

export default Product;
