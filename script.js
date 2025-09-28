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
    arr.forEach(book=>{
        const card = bookCard(book);
        container.appendChild(card);
    });
}

const container = document.querySelector('.container');
const dialogBox = document.getElementById('bookDaig');
const submitBtn = document.getElementById('submit-btn');
const newBookBtn = document.getElementById('addNewBook');

newBookBtn.addEventListener('click', ()=>{
    dialogBox.showModal();
})

function clearForm(){
    document.getElementById('title').value='';
    document.getElementById('author').value='';
    document.getElementById('pgs').value='';
    document.getElementById('read-checkbox').checked=false;
}

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
        clearForm();
        library.pop();

    }else{
        alert('Please fill in all field correctly!');
    }
});

function bookCard(book){
    const card = document.createElement('div');
    card.classList.add('card');

    const title = document.createElement('p');
    title.classList.add('card-title');
    title.textContent = book.title;

    const author = document.createElement('p');
    author.classList.add('book-author');
    author.textContent = book.author;

    const pages = document.createElement('p');
    pages.classList.add('book-pgs');
    pages.textContent = book.pages;

    const read = document.createElement('p');
    read.classList.add('read-toggle');
    read.textContent = book.read ? 'Read' : 'Not Read';

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);

    return card;
}

