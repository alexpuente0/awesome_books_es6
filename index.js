import { BookEntry } from "./modules/books.js";
import { changeSection } from "./modules/sections.js";
import { DateTime } from "./modules/luxon.js";
import { timeanday } from "./modules/values.js";

const addButton = document.getElementById("add-btn");

/* eslint-disable no-unused-vars */

addButton.addEventListener("click", BookEntry.addBooks);

BookEntry.loadBooks();

document.getElementById("slist").addEventListener("click", changeSection);
document.getElementById("sadd").addEventListener("click", changeSection);
document.getElementById("scontact").addEventListener("click", changeSection);

setInterval(() => {
  const aTime = DateTime.now();
  timeanday.innerHTML = aTime.toLocaleString(
    DateTime.DATETIME_MED_WITH_SECONDS
  );}, 1000);