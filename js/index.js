
const bookshelf = new Bookshelf();

// for loop to iterate through BookData and create books from each object.
for (let i = 0; i < bookData.length; i++){
    const booksData = bookData[i];
    const book = new Book(booksData.author, booksData.language, booksData.subject, booksData.title)
    bookshelf.addBook(book)
}

// targets container section and renders the bookshelf inside of it
const bookList = document.querySelector('section.bookshelf-container')
const shelfRender = bookshelf.render();
bookList.append(shelfRender);


// Add a new Book on the page
let AddBtn = document.getElementById('addBtn');
// event listener adding a book
// first declaring input field values, then assigning to new book, emptying the bookshelf and then re-rendering with new book appended
AddBtn.addEventListener('click', () => {
    let author = document.getElementById('bk-author').value;
    let language = document.getElementById('bk-language').value;
    let subject = document.getElementById('bk-subject').value;
    let title = document.getElementById('bk-title').value;

    let newBook = new Book(author, language, subject, title)
    bookshelf.addBook(newBook);

    bookList.innerHTML = '';
    const newShelfRender = bookshelf.render();

    bookList.append(newShelfRender); 
})






// assigning clickEvent to English button
let englishButton = document.getElementById('english-button');
let frenchButton = document.getElementById('french-button');
let germanButton = document.getElementById('german-button');
let finnishButton = document.getElementById('finnish-button');

// adding click event for English books button, first it returns books with the 'en' language value
englishButton.addEventListener('click', () => {
    const englishBooks = bookData.filter(function(book) {
        return book.language === 'en';
    });

    // render english books
    bookList.innerHTML = '';
    englishBooks.forEach(function(book) {
        const engBookObj = new Book(book.author, book.language, book.subject, book.title);
        bookList.appendChild(engBookObj.render())
    });
})


// Adding event listener to for French Books Button. Same method as the english books filter
frenchButton.addEventListener('click', () => {
    const frenchBooks = bookData.filter(function(book) {
        return book.language === 'fr';
    });

    bookList.innerHTML = '';
    frenchBooks.forEach(function(book) {
        const frBookObj = new Book(book.author, book.language, book.subject, book.title);
        bookList.appendChild(frBookObj.render())
    });
});

// Finnish Button Event Listener
finnishButton.addEventListener('click', () => {
    const finnishBooks = bookData.filter(function(book) {
        return book.language === 'fi';
    });

    bookList.innerHTML = '';
    finnishBooks.forEach(function(book) {
        const fiBookObj = new Book(book.author, book.language, book.subject, book.title);
        bookList.appendChild(fiBookObj.render())
    });
});


// German Button Event Listener
germanButton.addEventListener('click', () => {
    const germanBooks = bookData.filter(function(book) {
        return book.language === 'de';
    });

    bookList.innerHTML = '';
    germanBooks.forEach(function(book) {
        const gerBookObj = new Book(book.author, book.language, book.subject, book.title);
        bookList.appendChild(gerBookObj.render())
    });
});
