const urlProductosCategorias =
  "https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json";

let burgers = [];
let tacos = [];
let salads = [];
let desserts = [];
let drinks = [];

let leerJson = () => {
  fetch(urlProductosCategorias)
    .then((response) => response.json())
    .then((json) => {
      json[0].products.forEach((element) => {
        burgers.push({
          name: element.name,
          price: element.price,
          description: element.description,
          image: element.image,
        });
      });
      json[1].products.forEach((element) => {
        tacos.push(element);
      });
      json[2].products.forEach((element) => {
        salads.push(element);
      });
      json[3].products.forEach((element) => {
        desserts.push(element);
      });
      json[4].products.forEach((element) => {
        drinks.push(element);
      });
    });
};

let mostrarBurgers = () => {
  console.log(burgers[0]);
  for (let i = 0; i < burgers.length; i++) {
    console.log(burgers[i]);
    let card = document.createElement("card");
    card.style = "width:18rem";
    let image = document.createElement("img");
    image.className = "card-img-top";
    image.setAttribute("src", burgers[i].image);
    card.appendChild(image);

    let body = document.createElement("div");
    body.className = "card-body";

    let tituloCard = document.createElement("h5");
    tituloCard.className = "card-title";
    tituloCard.innerHTML = burgers[i].name;
    body.appendChild(tituloCard);

    let descripcionCard = document.createElement("p");
    descripcionCard.className = "card-text";
    descripcionCard.innerHTML = burgers[i].description;
    body.appendChild(descripcionCard);

    let precioCard = document.createElement("p");
    precioCard.className = "card-text font-weight-bold";
    precioCard.innerHTML = burgers[i].price;
    body.appendChild(precioCard);

    let btnCarrito = document.createElement("a");
    btnCarrito.className = "btn btn-primary";
    btnCarrito.innerHTML = "Add to car";

    body.appendChild(btnCarrito);

    card.appendChild(body);

    let filaProductos = document.getElementById("filaProductos");
    filaProductos.appendChild(card);
  }
};

leerJson();
mostrarBurgers();
