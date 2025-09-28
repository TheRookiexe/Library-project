const library = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read){
    const book = new Book(title, author, pages, read);
    library.push(book);
}

function displayBooks(arr){
    arr.forEach(book=>console.table(book));
}

const container = document.querySelector('.container');
const dialogBox = document.getElementById('bookDaig');
const submitBtn = document.getElementById('submit-btn');
const newBookBtn = document.getElementById('addNewBook');

newBookBtn.addEventListener('click', ()=>{
    dialogBox.showModal();
})



submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pageCount = parseInt(document.getElementById('pgs').value);
    const readBook = document.getElementById('read-checkbox').checked;

    if (title && author && !isNaN(pageCount)){
        addBookToLibrary(title, author, pageCount, readBook);
        displayBooks(library);  
        dialogBox.close();

        document.getElementById('title').value='';
        document.getElementById('author').value='';
        document.getElementById('pgs').value='';
        document.getElementById('read-checkbox').checked=false;
    }else{
        alert('Please fill in all field correctly!');
    }
});


