export function changeSection() {
  if (this.innerHTML === "List") {
    document.getElementById("list").style.display = "block";
    document.getElementById("add-new-book").style.display = "none";
    document.getElementById("contact").style.display = "none";
  } else if (this.innerHTML === "Add book") {
    document.getElementById("list").style.display = "none";
    document.getElementById("add-new-book").style.display = "block";
    document.getElementById("contact").style.display = "none";
  } else if (this.innerHTML === "Contact") {
    document.getElementById("list").style.display = "none";
    document.getElementById("add-new-book").style.display = "none";
    document.getElementById("contact").style.display = "block";
  }
}
