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
displayBooks(library)