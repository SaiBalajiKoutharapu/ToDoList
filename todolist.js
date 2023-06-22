const input = document.getElementById("inputField");
const addElement = document.getElementById("addtodo");
const todos = document.getElementById("todocontainer");

addElement.addEventListener("click" , function(){

    var paragraph = document.createElement('p')
    paragraph.innerText = input.value;
    todos.appendChild(paragraph);
    input.value='';
    paragraph.classList.add("paragraph-styling");
    paragraph.addEventListener('click' ,function(){
        paragraph.style.textDecoration = "line-through";
    })[0];

    paragraph.addEventListener("click" ,function(){
        paragraph.style.textDecoration = "none";
    })[1];

    paragraph.addEventListener("dblclick" ,function(){
        paragraph.removeChild(paragraph);
    })
});