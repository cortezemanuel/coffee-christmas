import React from "react";

export default function ChristmasVideo() {
  return (
    <div
      className="position-relative overflow-hidden"
      style={{ height: "500px" }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-100 h-100 object-fit-cover"
      >
        <source src="/videos/navidad.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      ></div>

      <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
        <h1 className="display-4 fw-bold animate__animated animate__fadeInDown">
          ¡Feliz Navidad!
        </h1>
        <p className="lead animate__animated animate__fadeInUp">
          Disfruta de nuestras ofertas de café y regalos.
        </p>
      </div>
    </div>
  );
}
