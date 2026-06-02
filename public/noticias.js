const objetos = document.querySelectorAll(".objeto");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let atual = 0;

function mostrarObjeto(index){
    objetos.forEach(objeto => {
        objeto.classList.remove("active");
    });

    objetos[index].classList.add("active");
}

next.addEventListener("click", () => {
    atual++;

    if(atual >= objetos.length){
        atual = 0;
    }

    mostrarObjeto(atual);
});

prev.addEventListener("click", () => {
    atual--;

    if(atual < 0){
        atual = objetos.length - 1;
    }

    mostrarObjeto(atual);
});