let inputs = document.getElementById("inp");
let text = document.querySelector(".text")

function Add(){
    if (inputs.value == "") {
        alert("please enter a task")
        
    }
    else{
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value} <img src="trash-solid (1).svg" alt="del">`;
        text.appendChild(newEle);
        inputs.value =""  
        newEle.querySelector('img').addEventListener('click',remove);
        function remove() {
            newEle.remove();
        }
    }
}