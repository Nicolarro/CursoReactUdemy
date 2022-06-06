const apikey = "2jFBT1oKbY6do1ioLawle78uyVbOyAcy"


  /* https://api.giphy.com/v1/gifs/random?apikey=2jFBT1oKbY6do1ioLawle78uyVbOyAcy */


const peticion = fetch("https://api.giphy.com/v1/gifs/random?apikey=2jFBT1oKbY6do1ioLawle78uyVbOyAcy");

peticion.then((response) => response.json())
        .then(({data}) => {const {url} = data.images.original
        const img = document.createElement('img')
        img.src = url
        img.sizes= "30rem"

        document.body.appendChild(img)
    
    
    } )

.catch((err) => {console.log(err,"error en la peticion")})


