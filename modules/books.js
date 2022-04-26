import {titleInput, authorInput, bookList} from './values.js'

let booksArray = [];

export class BookEntry {
  constructor(title, author, idNum) {
    this.title = title;
    this.author = author;
    this.idNum = idNum;
  }

  add() {
    const creaateAndSet = (title, author, idNum) => {
      const bookBlock = document.createElement("div");
      const bookInfo = document.createElement("div");
      const bookTitle = document.createElement("h4");
      const bookAuthor = document.createElement("h4");
      const bookIdNumber = document.createElement("h4");
      const removeButton = document.createElement("button");

      bookTitle.innerHTML = `'${title}'`;
      bookAuthor.innerHTML = `by ${author}`;
      bookIdNumber.innerHTML = idNum;
      removeButton.innerHTML = "Remove";
      bookInfo.classList.add("bookinfo");
      bookIdNumber.classList.add("counter");
      removeButton.classList.add("btn", "rmbtn");
      removeButton.setAttribute('id', idNum)
      removeButton.addEventListener('click', (event) => {this.remove(event.target)})

      bookBlock.classList.add('bookBlock')

      bookInfo.append(bookTitle, bookAuthor, bookIdNumber);
      bookBlock.append(bookInfo, removeButton);
      bookList.append(bookBlock);


    };
    creaateAndSet(this.title, this.author, this.idNum);
  }

  remove(element) {
    let removeBook = () => {
      booksArray = booksArray.filter((book) => {
      return book.idNum !== +element.id
      });
      element.parentNode.remove();

      localStorage.setItem("bookdata", JSON.stringify(booksArray));
      console.log(booksArray)
    }
    removeBook();
  }

  static addBooks() {
    if (titleInput.value !== "" && authorInput.value !== "") {
      const newBook = new BookEntry(
        titleInput.value,
        authorInput.value,
        booksArray.length
      );
      newBook.add();
      booksArray.push(newBook);

      localStorage.setItem("bookdata", JSON.stringify(booksArray));

      titleInput.value = "";
      authorInput.value = "";
    }
  }

  static loadBooks() {
    const library = JSON.parse(localStorage.getItem("bookdata"));
    if (library != null) {
      library.forEach((book, i) => {
    const newBook = new BookEntry(book.title, book.author, i);
    newBook.add();
    booksArray.push(newBook);
      });
   }
  }
}
