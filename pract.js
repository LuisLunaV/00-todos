const form = document.querySelector('form');
const ulEvent = document.querySelector('#ul-list');
let tareas = JSON.parse(localStorage.getItem('tarea'))||[];

window.onload=()=>{
//**El forEach nos permite barrer los elementos del arreglo guardados y volverlos a imprimir en elementos html */
tareas.forEach(element => {
    crearHtml(element);
});

}

form.onsubmit=( err )=>{
    err.preventDefault();
    const texto = document.querySelector('#textCont');
    
    if( texto.value ){

    crearHtml(texto.value);    
    tareas.push(texto.value);
    guardarLocalStorage();
    texto.value='';

    }else{ alert('El campo debe tener un valor'); }

};


//***Creamos la tarea en la lista de html***
const crearHtml =( lista )=>{
    const ulList = document.querySelector('ul');
    const ulItem = document.createElement('li');    
    ulItem.innerHTML = lista;
    ulList.append(ulItem);  
    

}

//***Evento que nos elimina la tarea html del listado***
ulEvent.addEventListener('click',( event )=>{
const opcionLista = event.target;
const evenText = event.target.innerText;

ulEvent.removeChild(opcionLista);

tareas = tareas.filter(elemen => elemen != evenText);
guardarLocalStorage();

});

//***Esta funcion nos ayuda a guaradar las tareas en el localStorage */
const guardarLocalStorage =()=>{

localStorage.setItem('tarea', JSON.stringify(tareas));

};
 