const toggle = document.getElementById("darkModeToggle");
    const body = document.body;

    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-mode");
      toggle.textContent = "☀️";
    }

    toggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      if (body.classList.contains("dark-mode")) {
        toggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
      } else {
        toggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
      }
    });

    const editBtn = document.getElementById("editBtn");
    const aboutText = document.getElementById("aboutText");

    if (localStorage.getItem("aboutMe")) {
      aboutText.textContent = localStorage.getItem("aboutMe");
    }

    editBtn.addEventListener("click", () => {
      if (aboutText.isContentEditable) {
        aboutText.contentEditable = "false";
        editBtn.textContent = "Edit";
        localStorage.setItem("aboutMe", aboutText.textContent);
      } else {
        aboutText.contentEditable = "true";
        aboutText.focus();
        editBtn.textContent = "Save";
      }
    });
