'use client';

import { useEffect, useState } from 'react';

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) setCart(JSON.parse(stored));
  }, []);

  return (
    <div>
      <h1>🛒 سبد خرید</h1>
      {cart.length === 0 ? (
        <p>سبد خرید خالی است.</p>
      ) : (
        <ul>
          {cart.map((item, i) => (
            <li key={i}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}