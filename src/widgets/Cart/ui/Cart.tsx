"use client";
import React, { useRef, useEffect, useState } from "react";
import { ICart } from "../types/types";

const Cart = ({ click, setClick }: ICart) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setAnimate(false);
      setTimeout(() => setClick(false), 300); // Задержка для завершения анимации
    }
  };

  useEffect(() => {
    if (click) {
      setAnimate(true); // Запуск анимации при открытии
    }
  }, [click]);

  return (
    <>
      {click && (
        <div
          className="fixed w-screen h-screen bg-black bg-opacity-80 top-0 left-0 z-50 flex justify-end"
          onClick={handleOutsideClick}
        >
          <div
            ref={modalRef}
            className={`bg-white p-4 rounded-lg shadow-lg transform max-w-[800px] w-full flex flex-col gap-5 ${
              animate ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300`}
            onClick={e => e.stopPropagation()} // Предотвращает всплытие события клика
          >
            <h2 className="text-black text-[30px]">Корзина</h2>
            <p className="uppercase">0 Товаров на 0 руб.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
