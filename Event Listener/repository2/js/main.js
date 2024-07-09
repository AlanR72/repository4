const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h4 = div.querySelector("h4");


const doSomething = () => {
    alert("doing something");
};

h4.addEventListener("click", doSomething, false);
