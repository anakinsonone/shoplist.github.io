var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("list-items");
//var del = document.getElementsByClassName("done");

function inputLength() {
  return input.value.length;
}

const createListElement = () => {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  li.id = input.value;
  li.onclick = () => test(li.id);
  ul.appendChild(li);
  input.value = "";
};

function addOnClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addOnEnter(event) {
  if (inputLength() > 0 && event.which === 13) {
    createListElement();
  }
}

function test(id) {
  const liItem = document.getElementById(id);
  liItem.style.textDecoration = "line-through";
}
// button.addEventListener("click", addOnClick);

input.addEventListener("keypress", addOnEnter);
