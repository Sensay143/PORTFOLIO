const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkModeToggle.textContent =
    document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});


const aboutSection = document.querySelector("#about p");
const editButton = document.createElement("button");
editButton.textContent = "Edit";
editButton.style.marginTop = "10px";
aboutSection.insertAdjacentElement("afterend", editButton);

let editing = false;

editButton.addEventListener("click", () => {
  if (!editing) {
    aboutSection.setAttribute("contenteditable", "true");
    aboutSection.focus();
    editButton.textContent = "Save";
    editing = true;
  } else {
    aboutSection.setAttribute("contenteditable", "false");
    editButton.textContent = "Edit";
    editing = false;
  }
});
