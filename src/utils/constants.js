import React from "react";
import { FaPrint, FaBoxOpen, FaPaintRoller } from "react-icons/fa";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <FaPrint />,
    title: "Print",
    text: "Our company offers a wide range of print services, including business cards, flyers, brochures, posters, and banners.",
  },
  {
    id: 2,
    icon: <FaPaintRoller />,
    title: "Design",
    text: "Our team of experienced designers will work with you to create custom designs that accurately reflect your brand and effectively communicate your message.",
  },
  {
    id: 3,
    icon: <FaBoxOpen />,
    title: "Retail",
    text: "In our retail section, we offer a variety of products, including office supplies, and amenities to ensure that your workplace is fully equipped and functional.",
  },
];
export const products_url = "https://fanghua-paper.netlify.app/api/products";

export const single_product_url = `https://fanghua-paper.netlify.app/api/products?id=`;

