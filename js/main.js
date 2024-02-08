
let player1;

let player2;
console.log(player1)
const avatares = document.getElementsByClassName("magician")
const pantalla = document.getElementsByClassName("cambioPantalla")
const arrayAvatares = Array.from(avatares)

const arrayPantalla = Array.from(pantalla)

let contUno = document.getElementById("containerUno")
let flag = 0;

let paginaDos = document.getElementById("containerDos")
paginaDos.style.visibility = "hidden";
paginaDos.style.display = "none";
let paginaTres = document.getElementById("containerTres")
paginaTres.style.visibility = "hidden";
paginaTres.style.display = "none";

let player11 = document.getElementById("player11")
player11.style.visibility = "hidden";
let player21 = document.getElementById("player21")
player21.style.visibility = "hidden";

let player12 = document.getElementById("player12")
player12.style.visibility = "hidden";
let player22 = document.getElementById("player22")
player22.style.visibility = "hidden";

let player13 = document.getElementById("player13")
player13.style.visibility = "hidden";
let player23 = document.getElementById("player23")
player23.style.visibility = "hidden";

let player14 = document.getElementById("player14")
player14.style.visibility = "hidden";
let player24 = document.getElementById("player24")
player24.style.visibility = "hidden";


arrayAvatares.map(
    elemento => {
        elemento.addEventListener("click", (e) => {
            if (player1 === undefined || player2 === undefined) {
                do {
                    if (!player1) {
                        player1 = magos[e.target.id]
                        e.currentTarget.style.filter = "grayscale(100%)";
                        console.log(e.target.id)
                        if (e.target.id === "m1") {
                            player11.style.visibility = "visible";
                        }
                        if (e.target.id === "m2") {
                            player12.style.visibility = "visible";
                        }
                        if (e.target.id === "m3") {
                            player13.style.visibility = "visible";
                        }
                        if (e.target.id === "m4") {
                            player14.style.visibility = "visible";
                        }
                    } else {
                        player2 = magos[e.target.id]
                        e.currentTarget.style.filter = "grayscale(100%)";
                        if (e.target.id === "m1") {
                            player21.style.visibility = "visible";
                        }
                        if (e.target.id === "m2") {
                            player22.style.visibility = "visible";
                        }
                        if (e.target.id === "m3") {
                            player23.style.visibility = "visible";
                        }
                        if (e.target.id === "m4") {
                            player24.style.visibility = "visible";
                        }
                    }
                    if (player1 === player2) {

                        console.log("No se puede elegil el mismo player. Vuelve a elegir uno")
                        player1 = NaN;
                        player2 = NaN;
                    }
                }

                while (player1 === player2)


            }
        })
    }
)

arrayPantalla.map(
    elemento => {
        elemento.addEventListener("click", (e) => {
            if (flag === 0) {
                contUno.style.visibility = "hidden"
                contUno.style.display = "none";
                paginaTres.style.visibility = "hidden"
                paginaTres.style.display = "none";
                paginaDos.style.visibility = "visible"
                paginaDos.style.display = "block";
            }
            if (flag === 1) {
                contUno.style.visibility = "hidden"
                contUno.style.display = "none";
                paginaTres.style.visibility = "visible"
                paginaTres.style.display = "block";
                paginaDos.style.visibility = "hidden";
                paginaDos.style.display = "none";
                player11.style.visibility = "hidden";
                player12.style.visibility = "hidden";
                player13.style.visibility = "hidden";
                player14.style.visibility = "hidden";
                player21.style.visibility = "hidden";
                player22.style.visibility = "hidden";
                player23.style.visibility = "hidden";
                player24.style.visibility = "hidden";
            }
            if (flag === 2) {
                location.reload();
                contUno.style.visibility = "visible"
                contUno.style.display = "flex";
                paginaTres.style.visibility = "hidden"
                paginaTres.style.display = "none";
                paginaDos.style.visibility = "hidden"
                paginaDos.style.display = "none";
                flag = -1;
            }
            flag++;
        })
    }
)