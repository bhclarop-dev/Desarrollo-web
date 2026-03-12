

fetch("components/header.html")
  .then(respuesta => respuesta.text())
  .then(html => {
    document.getElementById("header-container").innerHTML = html;
  });

fetch("components/footer.html")
  .then(respuesta => respuesta.text())
  .then(html => {
    document.getElementById("footer-container").innerHTML = html;
  });




const productos = [
  {
    nombre: "Habitación Individual",
    precio: "$1.800.000/mes",
    descripcion: "Habitación privada con baño, televisor y vista al jardín."
  },
  {
    nombre: "Habitación Compartida",
    precio: "$1.200.000/mes",
    descripcion: "Habitación para dos personas con atención personalizada."
  },
  {
    nombre: "Cuidado Médico",
    precio: "$350.000/mes",
    descripcion: "Visita médica semanal, control de medicamentos y seguimiento."
  },
  {
    nombre: "Terapia Física",
    precio: "$280.000/mes",
    descripcion: "Sesiones de fisioterapia para movilidad y bienestar diario."
  },
  {
    nombre: "Talleres Recreativos",
    precio: "$120.000/mes",
    descripcion: "Actividades de pintura, manualidades y juegos de mesa."
  },
  {
    nombre: "Plan Alimenticio",
    precio: "$400.000/mes",
    descripcion: "Tres comidas diarias balanceadas preparadas por nutricionista."
  }
];




class ProductCard extends HTMLElement {

  connectedCallback() {
    const nombre      = this.getAttribute("nombre");
    const precio      = this.getAttribute("precio");
    const descripcion = this.getAttribute("descripcion");

    this.innerHTML = `
      <h3>${nombre}</h3>
      <p>${descripcion}</p>
      <p class="precio">${precio}</p>
    `;
  }
}

customElements.define("product-card", ProductCard);




const catalogo = document.getElementById("catalogo");

for (let i = 0; i < productos.length; i++) {
  const tarjeta = document.createElement("product-card");

  tarjeta.setAttribute("nombre",      productos[i].nombre);
  tarjeta.setAttribute("precio",      productos[i].precio);
  tarjeta.setAttribute("descripcion", productos[i].descripcion);

  catalogo.appendChild(tarjeta);
}
