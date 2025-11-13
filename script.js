const library = [];

class Book {
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = crypto.randomUUID();
    }
}

class Library {
    addBookToLibrary(title, author, pages, read){
        const book = new Book(title, author, pages, read);
        library.push(book);
    }

    displayBooks(arr){
        container.innerHTML = '';
        arr.forEach(book=>{
            const card = bookCard(book);
            container.appendChild(card);
        });
    }
}

const myLibrary = new Library();

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

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pageCountInput = document.getElementById('pgs');

titleInput.addEventListener('input', (event) => {
    if (titleInput.validity.valueMissing){
        titleInput.setCustomValidity("Enter book title!");
    } else {
        titleInput.setCustomValidity("");
    }
    titleInput.reportValidity();
});

authorInput.addEventListener('input', (event)=> {
    if(authorInput.validity.valueMissing) {
        authorInput.setCustomValidity("Enter Author Name!")
    } else {
        authorInput.setCustomValidity("");
    }
    titleInput.reportValidity();
});

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    
    const title = titleInput.value;
    const author = authorInput.value;
    const pageCount = parseInt(pageCountInput.value);
    const readBook = document.getElementById('read-checkbox').checked;

    if(!title){
        titleInput.setCustomValidity('Enter Book Name!');
        titleInput.reportValidity();
        return;
    }

    if(!author){
        authorInput.setCustomValidity("Enter Author Name!");
        authorInput.reportValidity();
        return;
    }
    
    if (title && author && !isNaN(pageCount)){
        myLibrary.addBookToLibrary(title, author, pageCount, readBook);
        myLibrary.displayBooks(library);  
        dialogBox.close();
        clearForm();
    }
});

function removBookById(id) {
    const updatedLib = library.filter(book => book.id !== id);
    library.length = 0;
    library.push(...updatedLib);
    myLibrary.displayBooks(library);
}

function bookCard(book){
    const card = document.createElement('div');
    card.classList.add('card');

    const title = document.createElement('p');
    title.classList.add('card-title');
    title.textContent = book.title;

    const author = document.createElement('p');
    author.classList.add('book-author');
    author.textContent = `Author's Name: ${book.author}`;

    const pages = document.createElement('p');
    pages.classList.add('book-pgs');
    pages.textContent = `Page Count: ${book.pages}`;

    const read = document.createElement('p');
    read.classList.add('read-toggle');
    read.textContent = book.read ? 'Read' : 'Not Read';
    const readToggleBtn = document.createElement('button');
    readToggleBtn.classList.add('readtoggleBtn');
    readToggleBtn.textContent = 'Read Toggle';
    readToggleBtn.addEventListener('click', ()=>{
        if (read.textContent === 'Read'){
            read.textContent = 'Not Read';
            book.read = false;
        }else{
            read.textContent = 'Read';
            book.read = true;
        }
    });

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remBtn');
    removeBtn.textContent = 'Remove'
    removeBtn.addEventListener('click', ()=>{
        removBookById(book.id);
    });

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(readToggleBtn);
    card.appendChild(removeBtn);

    return card;
}
