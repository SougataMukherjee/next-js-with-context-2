"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { faker } from "@faker-js/faker";

interface Product {
  id: string;
  name: string;
  price: string;
  avatar: string;
}

interface CartContextType {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  products: Product[];
}

const CartContext = createContext<CartContextType | null>(null);

faker.seed(100);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const productsArray = Array.from({ length: 20 }).map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    avatar: faker.image.avatar(),
  }));

  const [products] = useState<Product[]>(productsArray);

  return (
    <CartContext.Provider value={{ cart, setCart, products }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context; // No need for type assertion since the initial context is defined correctly
};

export { CartProvider };
