import { BookEntry } from "./modules/books.js";
import { changeSection } from "./modules/sections.js";
import "./modules/datetime.js";

const addButton = document.getElementById("add-btn");

/* eslint-disable no-unused-vars */

addButton.addEventListener("click", BookEntry.addBooks);

BookEntry.loadBooks();

document.getElementById("slist").addEventListener("click", changeSection);
document.getElementById("sadd").addEventListener("click", changeSection);
document.getElementById("scontact").addEventListener("click", changeSection);

