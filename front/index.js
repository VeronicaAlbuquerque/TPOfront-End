//Funcion mostrar tortas
const listaTortas=[
    {imagen : "/img/imgTortas/brownieOreo.jpg",nombre: "Brownie Charlie",precio: 3500},
    {imagen: "/img/imgTortas/cheeseCake.jpeg",nombre: "Cheesecake",precio: 2800},
    {imagen: "/img/imgTortas/chocolateAlmendras.jpeg",nombre: "ChocoBlack",precio: 3600},
    {imagen: "/img/imgTortas/chocotortaEExtreme.jpeg",nombre: "Chocotorta Extreme",precio: 3500},
    {imagen: "/img/imgTortas/lenon2.jpeg",nombre: "Lemon Pie",precio: 2700},
    {imagen: "/img/imgTortas/oreo.jpeg",nombre: "Triple Oreo",precio: 3700},
    {imagen: "/img/imgTortas/SweetOrange.jpeg",nombre: "Sweet Orange",precio: 3100    },
    {imagen: "/img/imgTortas/tiramisu.jpeg",nombre: "Tiramisu",precio: 2900},
    {imagen: "/img/imgTortas/brownieDelBos.jpeg",nombre: "Brownie Del Bosque",precio: 3500},
    
];
const tortasBtn= document.getElementById("variedad-torta");//llamo al div que tendra el evento

tortasBtn.addEventListener("click", mostrarTortas);



function mostrarTortas () {

    let divContenedor= document.getElementById("fila");

    listaTortas.forEach((tortas)=>{
        
        const crearDiv= document.createElement("div")
        crearDiv.setAttribute("class","visible")
        crearDiv.innerHTML=
        `<img class= "img-grid" src=${tortas.imagen} alt="variedad">
        <h2 class="titulo-grid">${tortas.nombre}</h2>
        <h3 class="precio-grid">${tortas.precio}</h3>
        `

        divContenedor.appendChild(crearDiv)
    })

    tortasBtn.removeEventListener("click", mostrarTortas)
}



