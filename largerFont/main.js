let size = 10;
let orderElement = 1;

const init = () => {
  //    creating elements
  const btn = document.createElement("button");
  const btnReset = document.createElement("button");
  const ul = document.createElement("ul");
  //   text in buttons
  btn.textContent = "Dodaj 10 elementów listy";
  btnReset.textContent = "Resetuj całość";

  //appendChild elements
  document.body.appendChild(btn);
  document.body.appendChild(btnReset);
  document.body.appendChild(ul);
  //   Elements styling in css
  btn.style.fontSize = "28px";
  btnReset.style.fontSize = "28px";
  btnReset.style.marginLeft = "20px";
  ul.style.listStyle = "none";
  //   Event listeners
  btn.addEventListener("click", createLiElements);
  btnReset.addEventListener("click", cleanList);
};

const createLiElements = () => {
  // for loop to add li elements to ul
  for (var i = 0; i < 10; i++) {
    const li = document.createElement("li");
    li.textContent = "Element nr " + orderElement;
    document.querySelector("ul").appendChild(li);
    li.style.fontSize = size++ + "px";
    orderElement++;
  }
};

const cleanList = () => {
  document.querySelector("ul").textContent = "";
  size = 10;
  orderElement = 1;
};
init();
