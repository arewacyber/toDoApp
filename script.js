var enterbutton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");
function inputLenght(){
    return input.nodeValue.length;
}
function listLenght(){
    return item.length;
}
function createListElement(){
    //Create an element "li"
    var li = document.createElement("li");
    
    // Makes text from input field the li text
    li.appendChild(document.createTextNode(input.value));

    // Add li to ul
    ul.appendChild(li);

    // Reset text input field
    input.value = "";
}
function addAfterClick(){
    // Make sure that an empty input fields doesn''t create a li
    if(inputLenght() > 0){
        createListElement();
    }
}

function addListAfterKeypress(){
    if(inputLenght()> 0 && event.which === 13){
         //This now looks to see if you hit "enter key from your keyboard"
         createListElement();
    }
}

enterbutton.addEventListener("click",addAfterClick);
input.addEventListener("keypress", addListAfterkeypress);