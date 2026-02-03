let names = ["John", "Anna", "Mark", "Sara", "David"];

function generateList() {
  let list = document.getElementById("nameList");
  list.innerHTML = ""; 

  for (let name of names) {
    const li = document.createElement("li");
    li.textContent = name;
    list.appendChild(li);
  }
}