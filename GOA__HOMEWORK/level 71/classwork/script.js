const div = document.getElementById("parent");
const form = document.getElementById("form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const p = document.createElement("p");

    const first = document.createTextNode(form.elements.name.value);
    const second = document.createTextNode(form.elements.surname.value);

    p.appendChild(first);
    p.appendChild(second);

    div.appendChild(p);
});



const addchild = function(text){
    toDoitems.push(p)
}



const signForm = document.getElementById("sign-form");
const loginForm =  document.getElementById("log-form");
const singUpArr = []

const loginInArr = []

const additems = function(input1,input1){
    input1 = input1.trim().toLowerCase;
    input2 = input2.trim().toLowerCase;



    singUpArr.push(input1)
    singUpArr.push(input2)
} 

signForm.addEventListener("submit", function(e){
    e.preventDefault();

    const input1 = form.elemts.name;

    const input2 = form.elemts.surname;

    addchild(input1.value, input2.value)

    input1.value = "";

    input2.value = "";
})



const addItemsSeccond = function(input1,input1){
    input1 = input1.trim();
    input2 = input2.trim();



    loginInArr.push(input1)
    loginInArr.push(input2)
} 


if (signForm[0] == loginForm[0] && singUpArr[1] == loginInArr[1]){
    alert(singUpArr[0],singUpArr[1])
} else{
    alert("accaunt does not ")
}