/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const  baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app');

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD",
    }).format(price);


    return newPrice;
};
//web api
//Conectarnos al server
window.
    fetch(`${baseUrl}/api/avo`)
    //procesar la respuesta y convertirla en JSON
    .then((respuesta) => respuesta.json())
    //JSON-> DATA -> Renderizar info browser
    .then((responseJson) => {
        const todoLosItems = [];
         responseJson.data.forEach((item) => {
             //crear imagen
             const imagen = document.createElement("img");
             //URL de la imagen
             imagen.src = `${baseUrl}${item.image}`;   
             //crear imagen
             const title = document.createElement("h2");
             title.textContent = item.name;
             title.className = "text-2xl text-red-600";

             //crear precio
             const price = document.createElement("div");
             price.textContent = formatPrice(item.price);

             const container = document.createElement("div");
             container.append(imagen, title, price);

             todoLosItems.push(container);

        });    

        appNode.append(...todoLosItems);
    }); 