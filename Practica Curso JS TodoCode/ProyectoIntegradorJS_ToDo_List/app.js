window.addEventListener('DOMContentLoaded', () => {
//Elementos ya creados
const inpText = document.getElementById("txtList");
const btnAgregar = document.getElementById("btnAgregar");
const uList = document.getElementById("uList");
const container = document.querySelector(".container");

// Funcion agregar
function agregarLista () {
    
    //Capturo el valor del input
    var respuesta = inpText.value;
    console.log(respuesta);
   
    //Elementos nuevos
    const li = document.createElement("li");
    li.classList.add("lista")
    const btnEliminar = document.createElement("button");
    btnEliminar.classList.add("btnEliminar")
  
    //Agrego al UL una nueva LI
    uList.appendChild(li);
    li.textContent = inpText.value;
    li.appendChild(btnEliminar);
    btnEliminar.textContent = "X"
   
    //Limpio el input
    inpText.value = ""
   
    //Elimino LI
    btnEliminar.addEventListener("click", () => {
        li.remove();
        alert("Item eliminado correctamente.")
    });
};

btnAgregar.addEventListener("click", agregarLista);
    
});