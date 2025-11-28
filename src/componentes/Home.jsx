import React from "react";
import ChristmasVideo from "./ChristmasVideo";
import ItemListContainer from "./ItemListContainer";

export default function Home() {
  return (
    <>
      <ChristmasVideo />
      <ItemListContainer saludo="Bienvenido a Coffee Christmas" />
    </>
  );
}
