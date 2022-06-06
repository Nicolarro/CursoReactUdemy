/* const apikey = "2jFBT1oKbY6do1ioLawle78uyVbOyAcy" */


  /* https://api.giphy.com/v1/gifs/random?apikey=2jFBT1oKbY6do1ioLawle78uyVbOyAcy */


/* const peticion = fetch("https://api.giphy.com/v1/gifs/rand */  /* om?apikey=2jFBT1oKbY6do1ioLawle78uyVbOyAcy"); */
/*  */
/* peticion.then((response) => response.json()) */
/*         .then(({data}) => {const {url} = data.images.origi *//* nal */
/*         const img = document.createElement('img') */
/*         img.src = url */
/*         img.sizes= "30rem" */
/*  */
/*         document.body.appendChild(img) */
/*      */
/*      */
/*     } ) */
/*  */
/* .catch((err) => {console.log(err,"error en la peticion")}) */



/* ASYNC AWAIT */

/* ---------------------------------------------------------- */

const getImagen= async() => {

    const apiKey ="2jFBT1oKbY6do1ioLawle78uyVbOyAcy";
    const resp = await fetch("https://api.giphy.com/v1/gifs/random?apikey=2jFBT1oKbY6do1ioLawle78uyVbOyAcy");
    const {data}= await resp.json();

    const img = document.createElement("img")
    img.src = url
    document.body.appendChild(img)
    console.log (data)

}
getImagen();



/* -------------------------------------------------------------------------------------- */


  