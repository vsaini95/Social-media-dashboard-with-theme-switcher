const checkbox = document.getElementById("checkbox");
const body = document.body;

checkbox.addEventListener("input", (e) => {
  const isChecked = e.target.checked;

  if (isChecked) {
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
  }
});
