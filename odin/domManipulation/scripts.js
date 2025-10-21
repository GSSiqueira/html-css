const container = document.getElementById("container");

const para1 =  document.createElement("p");
para1.textContent="Hey I'm Red!";
para1.style.color="red";

container.appendChild(para1);

const heading3 = document.createElement("h3");
heading3.style.color = "blue";
heading3.textContent = "I'm a blue h3"

container.appendChild(heading3);

const div1 = document.createElement("div");
div1.style.cssText="border: 1px solid black; background-color: pink";

const heading1 = document.createElement("h1");
heading1.textContent = "I'm in a Div!";
div1.appendChild(heading1);

const para2 = document.createElement("p");
para2.textContent = "Mee Too!";
div1.appendChild(para2);

container.appendChild(div1);