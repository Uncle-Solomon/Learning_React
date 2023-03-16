const Product = () => {
  //   const products = ["Laptop", "Phone", "Mifi", "Computer Stand"];
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 500,
    },
    {
      id: 2,
      name: "Phone",
      price: 1000,
    },
    {
      id: 3,
      name: "Mifi",
      price: 15000,
    },
    {
      id: 4,
      name: "Computer Stand",
      price: 7000,
    },
    {
      id: 5,
      name: "Laptop",
      price: 200000,
    },
  ];
  const productList = products.map((product) => (
    <h3 key={product.id}>
      {product.name}: ${product.price}
    </h3>
  ));
  return <div>{productList}</div>;
};

export default Product;
