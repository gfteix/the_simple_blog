const form = document.getElementById("create-form");
const btnCreate = document.getElementById("btn-create");
const inputTitle = document.getElementById("input-title");
const inputContent = document.getElementById("input-author");
const inputCategory = document.getElementById("input-category");
const inputAuthor = document.getElementById("input-author");


let cont=0;

btnCreate.onclick = () => {
    validation(inputTitle),
    validation(inputContent),
    validation(inputCategory),
    validation(inputAuthor)
    console.log(cont)
    if(cont===4){
       
        
        form.setAttribute('action', '/create');
        form.setAttribute('method', 'post');
    }else{
        alert("Empty Field");
       
    }
    cont=0;
}

function validation(input){
    const valueTrimmed = input.value.trim()
    if(valueTrimmed){
        cont++;
        input.dataset.state = "valid"
    }else{
        input.dataset.state = "invalid";
    }

}