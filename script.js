const library = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read){
    const book =new Book(title, author, pages, read);
    library.push(book);
    // console.log(library);
}

addBookToLibrary("test book", "test author", "223", "Not read");

function displayBooks(arr){
    arr.map(book=>console.table(book));
}
displayBooks(library);

const container = document.getElementById('.container');
const dialogBox = document.getElementById('bookDaig');
const title = document.getElementById('title').value;
const author = document.getElementById('author').value;
const pageCount = document.getElementById('pgs');
const pgCount = parseInt(pageCount.value);
const newBookBtn = document.getElementById('addNewBook');

newBookBtn.addEventListener('click', ()=>{
    dialogBox.showModal();
})
