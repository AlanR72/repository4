const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2");
console.log(view2);


const views = document.getElementsByClassName("view");
console.log(views);

const sameViews = document.querySelectorAll(".view");
console.log(sameViews);

const divs = view1.querySelectorAll("div");
console.log(divs);

const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

//Loop required for styling even divs
for (let i = 0; i < evenDivs.length; i++){
    evenDivs[i].style.backgroundColor = "#f1f1f1";
    /*evenDivs[i].style.width = "300px";
    evenDivs[i].style.height = "300px";*/

}

const navText = document.querySelector("nav h1");
navText.textContent = "Hello!";
const navBar = document.querySelector("nav");
navBar.innerHTML = "<h1>Hello World!</h1> <p>This should be on the right.</p>";
console.log(navBar);
navBar.style.justifyContent = "space-between";

console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling.nextElementSibling);
console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);

//view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexWrap = "wrap";

//Loop to remove all content
while (view2.lastChild) {
    view2.lastChild.remove();
}

const createDivs = (parent, iter) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.backgroundColor = "#000000";
    newDiv.style.color = "white";
    newDiv.style.width = "250px";
    newDiv.style.height = "250px";
    newDiv.style.margin = "30px auto";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    parent.append(newDiv);
};
    
    for(i = 1; i <= 9; i++){
        createDivs(view2, i);
    }
    






