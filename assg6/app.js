// '<i class="fas fa-trash"></i>'+" "+'<i class="fas fa-arrow-circle-up"></i>'+" "+'<i class="fas fa-arrow-circle-down"></i>';

const todoInp = document.querySelector('.input-todo');
const todoButton = document.querySelector('.add-todo');
const todoList = document.querySelector('.todo-list');
const listElement = document.querySelector('li');
let val = false;


todoInp.addEventListener("keypress",pressEnter);
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteLi);



function pressEnter(e){
    
    if(e.which==13)
    {
        todoButton.click();
    }
}
function addTodo(e)
{
    e.preventDefault();
    
    
    const makeDiv  = document.createElement("div");
    makeDiv.classList.add("dynDiv");
    
    const makeSpan = document.createElement("span");
    makeSpan.classList.add("mySpn");
    
    const newTodo = document.createElement("li");
    newTodo.innerHTML = todoInp.value;
    newTodo.classList.add('todo-li');
    // newTodo.setAttribute("contentEditable",true);
    newTodo.addEventListener("dblclick",editIt);
    makeSpan.appendChild(newTodo);

    
    const okButton = document.createElement("button");
    okButton.innerHTML = "<i class='fas fa-check'></i>";
    okButton.classList.add("ok-button");
    makeSpan.appendChild(okButton);
    
    const delButton = document.createElement("button");
    delButton.innerHTML = "<i class='fas fa-trash'></i>";
    delButton.classList.add("del-button");
    makeSpan.appendChild(delButton);
    // const hrElement = document.createElement("hr");
    // hrElement.classList.add("hrelm");
    
    // makeSpan.appendChild(hrElement);
    // makeDiv.appendChild(makeSpan);
    todoList.appendChild(makeSpan);
    // todoList.appendChild(hrElement);

    todoInp.value="";
}

function deleteLi(e)
{
    const Li = e.target;
    const erg = Li.parentElement;
    if(Li.classList[0]==="del-button")
    {
        const elem = Li.parentElement;
        elem.remove();
    }
    if(Li.classList[0]==="ok-button")
    {
        const el = Li.parentElement;
        el.classList.toggle("line");
    }
}
function editIt(e)
{
    const temp = e.target;
    // if(temp.contentEditable==true)
    // {
    //     temp.contentEditable=false;
    // }
    // else if(temp.contentEditable==false){
    //     temp.contentEditable=true;
    // }
    
        if (temp.hasAttribute("contentEditable") == "true") {
            temp.setAttribute("contentEditable", "false");
        } else {
            temp.setAttribute("contentEditable", "true");
        }

}