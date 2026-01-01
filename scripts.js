let name = "";
let pages = "";
let status = "";

const myLibrary = [];

function Book(name, author, pages, status) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

document.getElementById('button').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const status = document.getElementById('status').value;

    const newBook = new Book(name, author, pages, status);
    myLibrary.push(newBook);

    console.log(myLibrary);
});
