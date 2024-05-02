document.addEventListener("DOMContentLoaded", function() {
  const swiper = new Swiper(".swiper", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    direction: "horizontal",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

function abrirVista(url) {
  window.location.href = url;
}

function mostrarDetalle(detalle) {
  Swal.fire({
    title: detalle.nombre,
    text: detalle.descripcion,
    imageUrl: detalle.imagen,
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: detalle.nombre,
  });
}

const detalleElemento1 = {
  nombre: "Alerón Delantero",
  descripcion:
    "Parte crítica de la aerodinámica de un F1, crea alrededor del 25% del apoyo aerodinámico de un F1. Actualmente miden 1,8 metros de ancho y tienen una parte central de 50cm de formas obligatorias en base a una plantilla de la FIA. El alerón tiene forma de ala de avión invertida, y el flujo de aire pasando más rápido por debajo crea baja presión que lo empuja contra la pista.",
  imagen: "./assets/carruselc1.png",
};

const detalleElemento2 = {
  nombre: "Alerón Trasero",
  descripcion:
    "También crea alrededor del 25% del apoyo aerodinámico. Las normas han ido reduciendo su tamaño para intentar frenar las velocidades de paso por curva, y actualmente tienen 75cm de ancho y sólo pueden ser de dos elementos aerodinámicos, el plano principal y un flap. También genera mucha resistencia aerodinámica, frenando el coche a alta velocidad.",
  imagen: "./assets/carruselc2.png",
};

const detalleElemento3 = {
  nombre: "Difusor",
  descripcion:
    "Oculto en el final del fondo plano, en la parte trasera del coche, el difusor es el elemento aerodinámico más importante. Esta sección en rampa entre los neumáticos traseros crea baja presión bajo el coche, proporcionando alrededor del 50% del apoyo, y de forma mucho más eficiente, casi sin crear resistencia. ",
  imagen: "./assets/carruselc3.png",
};

const detalleElemento4 = {
  nombre: "Pontones",
  descripcion:
    "Los pontones generan resistencia aerodinámica y de ser posible, los diseñadores los eliminarían de un F1, pero son necesarios para refrigerar el motor. Contienen los radiadores de agua y aceite del motor, gran parte de la electrónica y el radiador de la caja de cambios. Los equipos intentan diseñarlos lo más pequeños posibles mientras cumplan con su misión de refrigerar, dándoles formas que reduzcan la resistencia aerodinámica.",
  imagen: "./assets/carruselc4.png",
};

const detalleElemento5 = {
  nombre: "Suspensión",
  descripcion:
    "Exteriormente la suspensión de un F1 es muy sencilla. Cada rueda está unida al chasis mediante dos brazos en forma de V, conocidos como triángulos de la suspensión. Otro brazo opera el muelle y el amortiguador, montados ambos dentro de la carrocería para una mejor aerodinámica. Lo complejo está en elegir los ángulos de los triángulos para el correcto trabajo de la suspensión.",
  imagen: "./assets/carruselc5.png",
};

const detalleElemento6 = {
  nombre: "Fondo Plano",
  descripcion:
    "Oculto bajo el coche, el fondo plano es probablemente el elemento aerodinámico más importante de un monoplaza de Fórmula 1. Moldeados en una única pieza de fibra de carbono, su principal función es la de hacer pasar el aire por debajo del coche a la mayor velocidad posible, para generar una zona de baja presión que pega el coche contra el suelo.",
  imagen: "./assets/carruselc6.png",
};

const detalleElemento7 = {
  nombre: "Neumáticos",
  descripcion:
    "Son el elemento crítico que transmiten la potencia del motor, y las fuerzas de frenado y giro del coche al asfalto. Las normas exigen que sus diámetro sea de 33cm y las llantas de 13 pulgadas, en contraste con los coches de calle, con llantas cada vez más grandes y neumáticos de perfil cada vez más bajo.",
  imagen: "./assets/carruselc7.png",
};

function abrirVideo(src) {
  Swal.fire({
    html: `<video controls autoplay style="max-width: 100%; max-height: 100%; width: auto; height: auto;"><source src="${src}" type="video/mp4"></video>`,
    width: "80%",
    showCloseButton: true,
    showConfirmButton: false,
    customClass: {
      container: "video-popup-container",
    },
  });
}