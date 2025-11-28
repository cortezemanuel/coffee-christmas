export const mockProductos = [
  {
    nombre: "Latte Navideño",
    descripcion:
      "Café espresso con leche vaporizada, esencia de vainilla y un toque de canela.",
    precio: 2500,
    categoria: "bebidas-calientes",
    imagen: "/img/latte-navideno.png",
    stock: 10,
  },
  {
    nombre: "Toffee Nut",
    descripcion:
      "Café frío con crema batida y jarabe de nuez, especial para las fiestas.",
    precio: 2800,
    categoria: "bebidas-frias",
    imagen: "/img/toffee-nut.png",
    stock: 8,
  },
  {
    nombre: "Pan Dulce con Chips de Café",
    descripcion:
      "Pan dulce artesanal con trozos de café tostado y frutas confitadas.",
    precio: 3200,
    categoria: "comidas-calientes",
    imagen: "/img/pan-dulce-cafe.jpg",
    stock: 5,
  },
  {
    nombre: "Tiramisú",
    descripcion: "Postre italiano con crema de mascarpone, café y cacao.",
    precio: 3500,
    categoria: "comidas-frias",
    imagen: "/img/tiramisu.jpg",
    stock: 6,
  },
  {
    nombre: "Taza Navideña Coffee Christmas",
    descripcion: "Taza de cerámica con diseño navideño, ideal para regalar.",
    precio: 4500,
    categoria: "regalos",
    imagen: "/img/taza-navidad.jpg",
    stock: 12,
  },
  {
    nombre: "Box Regalo Café Premium",
    descripcion:
      "Set de regalo con granos de café gourmet, chocolates y una taza festiva.",
    precio: 8900,
    categoria: "regalos",
    imagen: "/img/box-regalo.png",
    stock: 4,
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProductos);
    }, 800);
  });
};
