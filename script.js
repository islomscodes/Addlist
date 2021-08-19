let ul = document.getElementsByClassName("list")[0];
let inp = document.getElementById("inp");
let ListGroup = document.getElementsByClassName("list-group");
let input = document.getElementById("showInp");

let num = 1;
let checkInp = [];

input.value = ListGroup[0].innerHTML;

function addBef() {
  checkInp.forEach(i => {
    ListGroup[i].classList.add("bef");
  });
}
addBef();

function addList(e) {
  let li = document.createElement("li");
  let context = document.createTextNode(inp.value);
  li.classList.add("list-group");
  li.appendChild(context);
  ul.appendChild(li);
  inp.value = "";
}

function filteredNum(N) {
  checkInp.forEach(i => {
    if (i === N) {
      num++;
      filteredNum(num);
    }
  });
}

setInterval(() => {
  filteredNum(num);
  if (num <= ListGroup.length - 1) {
    input.value = ListGroup[num].innerHTML;
    num++;
  } else {
    num = 0;
    filteredNum(num);
    input.value = ListGroup[num].innerHTML;
    num++;
  }
}, 2000);

function delList() {
  checkInp.push(num === 0 ? 0 : num - 1);
  console.log(num - 1);
  console.log(checkInp);
  addBef();
}
