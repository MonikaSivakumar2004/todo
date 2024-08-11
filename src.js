const taskinput = document.getElementById("input");
const addbtn = document.getElementById("button");
const tasklist = document.getElementById("tlist");

//Event Listener
addbtn.addEventListener("click", () => {
  if (taskinput.value.trim() != "") {
    const tasktext = taskinput.value;
    const listitem = document.createElement("li");
    listitem.innerHTML = `${tasktext}
        <button class="delete">Delete</button>`;
    tasklist.appendChild(listitem);
    taskinput.value = " ";
  }
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
  }
});
