import { useState } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import "./Shop.css";

function Shop() {
  const products = [
    {
      id: 1,
      title: "iPhone 16 Pro",
      price: 1200,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
    },
    {
      id: 2,
      title: "MacBook Pro",
      price: 2200,
      image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=400",
    },
    {
      id: 3,
      title: "AirPods Pro",
      price: 250,
      image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400",
    },
    {
      id: 4,
      title: "Apple Watch",
      price: 450,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400",
    },
    {
      id: 5,
      title: "iPad Air",
      price: 800,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
    },
    {
      id: 6,
      title: "PlayStation 5",
      price: 700,
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400",
    },
    {
      id: 7,
      title: "Sony WH-1000XM5",
      price: 350,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    },
    {
      id: 8,
      title: "Samsung S25 Ultra",
      price: 1300,
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400",
    },
  ];

  const [cart, setCart] = useState([]);

function addToCart(product) {
  console.log(product);
  setCart([...cart, product]);
}

  return (
    <>
      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      <Cart cart={cart} />
    </>
  );
}

export default Shop;