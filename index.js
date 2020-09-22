const urlProductosCategorias =
  "https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json";

let carrito = [];

let removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

let actualizarCantidad = () => {
  let numProd = document.getElementById("numeroProductos");
  numProd.innerHTML = carrito.length;
};

let btnBurgers = document.getElementById("burgers");

btnBurgers.onclick = () => {
  let filaProductos = document.getElementById("filaProductos");
  filaProductos.innerHTML = " ";
  fetch(urlProductosCategorias)
    .then((response) => response.json())
    .then((json) => {
      let nombreTitutlo = document.getElementById("nombreCategoria");
      removeAllChildNodes(nombreTitutlo);
      let nombreCategoria = document.createElement("h3");
      nombreCategoria.className = "centrado";
      nombreCategoria.innerHTML = "Burgers";
      nombreTitutlo.appendChild(nombreCategoria);

      json[0].products.forEach((element) => {
        let columna = document.createElement("div");
        columna.className = "col-3";

        let card = document.createElement("card");
        card.style = "width:18rem";
        let image = document.createElement("img");
        image.className = "card-img-top";
        image.setAttribute("src", element.image);
        card.appendChild(image);

        let body = document.createElement("div");
        body.className = "card-body";

        let tituloCard = document.createElement("h5");
        tituloCard.className = "card-title";
        tituloCard.innerHTML = element.name;
        body.appendChild(tituloCard);

        let descripcionCard = document.createElement("p");
        descripcionCard.className = "card-text";
        descripcionCard.innerHTML = element.description;
        body.appendChild(descripcionCard);

        let precioCard = document.createElement("p");
        precioCard.className = "card-text font-weight-bold";
        precioCard.innerHTML = "$" + element.price;
        body.appendChild(precioCard);

        let btnCarrito = document.createElement("a");
        btnCarrito.className = "fondoOscuro btn";
        btnCarrito.innerHTML = "Add to car";
        btnCarrito.onclick = () => {
          let producto = {
            name: element.name,
            price: element.price,
            description: element.description,
            image: element.image,
          };
          carrito.push(producto);
          actualizarCantidad();
        };

        body.appendChild(btnCarrito);

        card.appendChild(body);

        columna.appendChild(card);
        filaProductos.appendChild(columna);
      });
    });
};

let btnTacos = document.getElementById("tacos");
btnTacos.onclick = () => {
  let filaProductos = document.getElementById("filaProductos");
  filaProductos.innerHTML = " ";
  let nombreTitutlo = document.getElementById("nombreCategoria");
  removeAllChildNodes(nombreTitutlo);
  let nombreCategoria = document.createElement("h3");
  nombreCategoria.className = "centrado";
  nombreCategoria.innerHTML = "Tacos";
  nombreTitutlo.appendChild(nombreCategoria);

  fetch(urlProductosCategorias)
    .then((response) => response.json())
    .then((json) => {
      json[1].products.forEach((element) => {
        let columna = document.createElement("div");
        columna.className = "col-3";

        let card = document.createElement("card");
        card.style = "width:18rem";
        let image = document.createElement("img");
        image.className = "card-img-top";
        image.setAttribute("src", element.image);
        card.appendChild(image);

        let body = document.createElement("div");
        body.className = "card-body";

        let tituloCard = document.createElement("h5");
        tituloCard.className = "card-title";
        tituloCard.innerHTML = element.name;
        body.appendChild(tituloCard);

        let descripcionCard = document.createElement("p");
        descripcionCard.className = "card-text";
        descripcionCard.innerHTML = element.description;
        body.appendChild(descripcionCard);

        let precioCard = document.createElement("p");
        precioCard.className = "card-text font-weight-bold";
        precioCard.innerHTML = "$" + element.price;
        body.appendChild(precioCard);

        let btnCarrito = document.createElement("a");
        btnCarrito.className = "fondoOscuro btn";
        btnCarrito.innerHTML = "Add to car";
        btnCarrito.onclick = () => {
          let producto = {
            name: element.name,
            price: element.price,
            description: element.description,
            image: element.image,
          };
          carrito.push(producto);
          actualizarCantidad();
        };

        body.appendChild(btnCarrito);

        card.appendChild(body);

        columna.appendChild(card);
        filaProductos.appendChild(columna);
      });
    });
};

let btnSalads = document.getElementById("salads");
btnSalads.onclick = () => {
  let filaProductos = document.getElementById("filaProductos");
  filaProductos.innerHTML = " ";

  let nombreTitutlo = document.getElementById("nombreCategoria");
  removeAllChildNodes(nombreTitutlo);
  let nombreCategoria = document.createElement("h3");
  nombreCategoria.className = "centrado";
  nombreCategoria.innerHTML = "Salads";
  nombreTitutlo.appendChild(nombreCategoria);

  fetch(urlProductosCategorias)
    .then((response) => response.json())
    .then((json) => {
      json[2].products.forEach((element) => {
        let columna = document.createElement("div");
        columna.className = "col-3";

        let card = document.createElement("card");
        card.style = "width:18rem";
        let image = document.createElement("img");
        image.className = "card-img-top";
        image.setAttribute("src", element.image);
        card.appendChild(image);

        let body = document.createElement("div");
        body.className = "card-body";

        let tituloCard = document.createElement("h5");
        tituloCard.className = "card-title";
        tituloCard.innerHTML = element.name;
        body.appendChild(tituloCard);

        let descripcionCard = document.createElement("p");
        descripcionCard.className = "card-text";
        descripcionCard.innerHTML = element.description;
        body.appendChild(descripcionCard);

        let precioCard = document.createElement("p");
        precioCard.className = "card-text font-weight-bold";
        precioCard.innerHTML = "$" + element.price;
        body.appendChild(precioCard);

        let btnCarrito = document.createElement("a");
        btnCarrito.className = "fondoOscuro btn";
        btnCarrito.innerHTML = "Add to car";
        btnCarrito.onclick = () => {
          let producto = {
            name: element.name,
            price: element.price,
            description: element.description,
            image: element.image,
          };
          carrito.push(producto);
          actualizarCantidad();
        };
        body.appendChild(btnCarrito);

        card.appendChild(body);

        columna.appendChild(card);
        filaProductos.appendChild(columna);
      });
    });
};

let btnDesserts = document.getElementById("desserts");
btnDesserts.onclick = () => {
  let filaProductos = document.getElementById("filaProductos");
  filaProductos.innerHTML = " ";
  let nombreTitutlo = document.getElementById("nombreCategoria");
  removeAllChildNodes(nombreTitutlo);
  let nombreCategoria = document.createElement("h3");
  nombreCategoria.className = "centrado";
  nombreCategoria.innerHTML = "Desserts";
  nombreTitutlo.appendChild(nombreCategoria);

  fetch(urlProductosCategorias)
    .then((response) => response.json())
    .then((json) => {
      json[3].products.forEach((element) => {
        let columna = document.createElement("div");
        columna.className = "col-3";

        let card = document.createElement("card");
        card.style = "width:18rem";
        let image = document.createElement("img");
        image.className = "card-img-top";
        image.setAttribute("src", element.image);
        card.appendChild(image);

        let body = document.createElement("div");
        body.className = "card-body";

        let tituloCard = document.createElement("h5");
        tituloCard.className = "card-title";
        tituloCard.innerHTML = element.name;
        body.appendChild(tituloCard);

        let descripcionCard = document.createElement("p");
        descripcionCard.className = "card-text";
        descripcionCard.innerHTML = element.description;
        body.appendChild(descripcionCard);

        let precioCard = document.createElement("p");
        precioCard.className = "card-text font-weight-bold";
        precioCard.innerHTML = "$" + element.price;
        body.appendChild(precioCard);

        let btnCarrito = document.createElement("a");
        btnCarrito.className = "fondoOscuro btn";
        btnCarrito.innerHTML = "Add to car";
        btnCarrito.onclick = () => {
          let producto = {
            name: element.name,
            price: element.price,
            description: element.description,
            image: element.image,
          };
          carrito.push(producto);
          actualizarCantidad();
        };
        body.appendChild(btnCarrito);

        card.appendChild(body);

        columna.appendChild(card);
        filaProductos.appendChild(columna);
      });
    });
};

let btnDrinks = document.getElementById("drinks");
btnDrinks.onclick = () => {
  let filaProductos = document.getElementById("filaProductos");
  filaProductos.innerHTML = " ";
  let nombreTitutlo = document.getElementById("nombreCategoria");
  removeAllChildNodes(nombreTitutlo);
  let nombreCategoria = document.createElement("h3");
  nombreCategoria.className = "centrado";
  nombreCategoria.innerHTML = "Drinks";
  nombreTitutlo.appendChild(nombreCategoria);

  fetch(urlProductosCategorias)
    .then((response) => response.json())
    .then((json) => {
      json[4].products.forEach((element) => {
        let columna = document.createElement("div");
        columna.className = "col-3";

        let card = document.createElement("card");
        card.style = "width:18rem";
        let image = document.createElement("img");
        image.className = "card-img-top";
        image.setAttribute("src", element.image);
        card.appendChild(image);

        let body = document.createElement("div");
        body.className = "card-body";

        let tituloCard = document.createElement("h5");
        tituloCard.className = "card-title";
        tituloCard.innerHTML = element.name;
        body.appendChild(tituloCard);

        let descripcionCard = document.createElement("p");
        descripcionCard.className = "card-text";
        descripcionCard.innerHTML = element.description;
        body.appendChild(descripcionCard);

        let precioCard = document.createElement("p");
        precioCard.className = "card-text font-weight-bold";
        precioCard.innerHTML = "$" + element.price;
        body.appendChild(precioCard);

        let btnCarrito = document.createElement("a");
        btnCarrito.className = "fondoOscuro btn";
        btnCarrito.innerHTML = "Add to car";
        btnCarrito.onclick = () => {
          let producto = {
            name: element.name,
            price: element.price,
            description: element.description,
            image: element.image,
          };
          carrito.push(producto);
          actualizarCantidad();
        };
        body.appendChild(btnCarrito);

        card.appendChild(body);

        columna.appendChild(card);
        filaProductos.appendChild(columna);
      });
    });
};

let cart = document.getElementById("carrito");
function cargarCarroPedido() {
  let carritoProcesado = [];
  carrito.forEach((element) => {
    let elemEncontrados = carrito.filter((em) => em.name == element.name);
    let elemProces = {
      producto: element,
      cantidad: elemEncontrados.length,
    };
    carritoProcesado = carritoProcesado.filter(
      (elems) => elems.producto.name != elemProces.producto.name
    );
    carritoProcesado.push(elemProces);
  });

  let fila = document.getElementById("filaProductos");
  fila.innerHTML = " ";
  let nombreTit = document.getElementById("nombreCategoria");
  removeAllChildNodes(nombreTit);
  let titulo = document.createElement("h3");
  titulo.className = "centrado";
  titulo.innerHTML = "Order Detail";
  nombreTit.appendChild(titulo);

  let tabla = document.createElement("table");
  tabla.className = "table table-striped";
  let tHeader = document.createElement("thead");
  let trHead = document.createElement("tr");

  let thItem = document.createElement("th");
  let thQt = document.createElement("th");
  let thDesc = document.createElement("th");
  let thUnit = document.createElement("th");
  let thAm = document.createElement("th");
  thItem.setAttribute("scope", "col");
  thItem.innerHTML = "Item";
  thQt.setAttribute("scope", "col");
  thQt.innerHTML = "Qty.";
  thDesc.setAttribute("scope", "col");
  thDesc.innerHTML = "Description";
  thUnit.setAttribute("scope", "col");
  thUnit.innerHTML = "Unit Price";
  thAm.setAttribute("scope", "col");
  thAm.innerHTML = "Amount";
  trHead.appendChild(thItem);
  trHead.appendChild(thQt);
  trHead.appendChild(thDesc);
  trHead.appendChild(thUnit);
  trHead.appendChild(thAm);
  tHeader.append(trHead);
  tabla.appendChild(tHeader);
  let tBody = document.createElement("tbody");
  let total = 0;
  carritoProcesado.forEach((em, index) => {
    let trBod = document.createElement("tr");

    let thIt = document.createElement("th");
    thIt.setAttribute("scope", "row");
    let thQ = document.createElement("td");
    let thDe = document.createElement("td");
    let thUn = document.createElement("td");
    let thA = document.createElement("td");
    thIt.innerHTML = index;
    thQ.innerHTML = em.cantidad;
    thDe.innerHTML = em.producto.name;
    thUn.innerHTML = em.producto.price;
    let amountProd = em.producto.price * em.cantidad;
    thA.innerHTML = amountProd;
    total = total + amountProd;

    trBod.appendChild(thIt);
    trBod.appendChild(thQ);
    trBod.appendChild(thDe);
    trBod.appendChild(thUn);
    trBod.appendChild(thA);

    tBody.appendChild(trBod);
  });
  tabla.appendChild(tBody);
  fila.appendChild(tabla);
  let divFinal = document.createElement("div");
  divFinal.className = "row";
  let totalText = document.createElement("p");
  totalText.className = "font-weight-bold";
  totalText.innerHTML = "Total: $" + total;

  let botonCancel = document.createElement("a");
  let botonConfirm = document.createElement("a");

  botonCancel.className = "btn";
  botonCancel.style.backgroundColor = "crimson";
  botonCancel.style.float = "right";
  botonConfirm.className = "btn";
  botonConfirm.style.backgroundColor = "cornsilk";
  botonConfirm.style.float = "right";
  botonCancel.innerHTML = "Cancel";
  botonCancel.setAttribute("id", "botonCancel");
  botonCancel.setAttribute("type", "button");
  botonCancel.setAttribute("data-toggle", "modal");
  botonCancel.setAttribute("data-target", "#exampleModal");

  botonConfirm.innerHTML = "Confirm order";
  botonConfirm.onclick = () => {
    carritoProcesado.forEach((ele, index) => {
      console.log({
        item: index,
        quantity: ele.cantidad,
        description: ele.producto.name,
        unitPrice: ele.producto.price,
      });
      carrito = [];
      let fila = document.getElementById("filaProductos");
      fila.innerHTML = " ";
      actualizarCantidad();
    });
  };

  divFinal.appendChild(totalText);
  divFinal.appendChild(botonCancel);
  divFinal.appendChild(botonConfirm);
  fila.appendChild(divFinal);
}
cart.onclick = () => {
  actualizarCantidad();
  cargarCarroPedido();
};

let btnModalConfirm = document.getElementById("modalConfirm");
btnModalConfirm.onclick = () => {
  carrito = [];
  cargarCarroPedido();
  actualizarCantidad();
};

actualizarCantidad();
