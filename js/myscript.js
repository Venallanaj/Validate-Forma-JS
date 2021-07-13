// singel element

// const form = document.getElementById("my-form");
// console.log(form);

// const h1 = document.querySelector("h1");
// console.log(h1);

// multiple element

// console.log(document.querySelectorAll(".item"));
// console.log(document.getElementsByClassName("item"));

// console.log(document.getElementsByTagName("li"));

// Loop from items

// const items = document.querySelectorAll(".item");

// items.forEach((item) => console.log(item));
// console.log(items);

// Manipulate Dom

// const ul = document.querySelector(".items");
// ul.firstElementChild.remove();

// for add text

// ul.firstElementChild.textContent = "hello";

// ul.children[1].textContent = "Brand";
// ul.lastElementChild.innerHTML = "<h4>Hello</4>";

// Change styles

// const btn = document.querySelector(".btn");

// btn.style.background = "red";

// Events

// const btn = document.querySelector(".btn");

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(e.target);
// });

// const btn = document.querySelector(".btn");

// btn.addEventListener("mouseout", (e) => {
//   e.preventDefault();
//   document.querySelector("#my-form").style.background = "#ccc";

//   document.querySelector("body").classList.add("bg-dark");

//   document.querySelector(".items").lastElementChild.innerHTML =
//     "<h1>HELLO </h1>";
// });

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);
function onSubmit(e) {
  e.preventDefault();
  //   console.log(nameInput.value);

  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";
    setTimeout(() => msg.remove(), 3000);
  } else {
    console.log("success");

    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value}:
     ${emailInput.value}`)
    );

    // Clear fields
    nameInput.value = "";
    emailInput.value = "";
  }
}
