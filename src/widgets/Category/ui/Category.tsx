import { Slider } from "@/shared/ui/Slider";
import React from "react";

const Category = () => {
  const Slides = [
    {
      img: [{ src: "/images/MainPage/img.jpeg", alt: "Img" }],
      title: "Title",
      description: "Description",
      price: 10,
    },
    {
      img: [{ src: "/images/MainPage/img.jpeg", alt: "Img" }],
      title: "Title",
      description: "Description",
      price: 10,
    },
    {
      img: [{ src: "/images/MainPage/img.jpeg", alt: "Img" }],
      title: "Title",
      description: "Description",
      price: 10,
    },
    {
      img: [{ src: "/images/MainPage/img.jpeg", alt: "Img" }],
      title: "Title",
      description: "Description",
      price: 10,
    },
    {
      img: [{ src: "/images/MainPage/img.jpeg", alt: "Img" }],
      title: "Title",
      description: "Description",
      price: 10,
    },
    {
      img: [{ src: "/images/MainPage/img.jpeg", alt: "Img" }],
      title: "Title",
      description: "Description",
      price: 10,
    },
    {
      img: [{ src: "/images/MainPage/img.jpeg", alt: "Img" }],
      title: "Title",
      description: "Description",
      price: 10,
    },
    {
      img: [{ src: "/images/MainPage/img.jpeg", alt: "Img" }],
      title: "Title",
      description: "Description",
      price: 10,
    },
  ];
  return (
    <div>
      <h2 className="text-[40px]">Category</h2>
      <Slider slides={Slides} className="mt-[20px]" />
    </div>
  );
};

export default Category;
