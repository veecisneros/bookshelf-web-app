//creating Bookshelf were books are added

class Bookshelf{
    constructor(){
        this.books = []    //bookshelf.books
    }
    addBook(book){
        this.books.push(book);    //bookshelf.books.add books here
    }
}

class Books{
    constructor(title,author,subject,language){
        this.title = title; 
        this.author = author;
        this.subject = subject;
        this.language = language;
    };
}

//map function, new array 
function bookRender(){
    let bookList = document.createElement('ul')
    let listOfBooks = bookData.map((book)=>{
    const bookTitles = document.createElement('li');
    bookTitles.textContent = `${book.title} written by ${book.author}`;
    bookList.appendChild(bookTitles);

    const moreInfoButton = document.createElement('button');
    moreInfoButton.setAttribute('id','moreinfobtn');
moreInfoButton.textContent = 'subject & language';
moreInfoButton.addEventListener('click', ()=> {
    const additionalInfo = document.createElement('p');
    additionalInfo.textContent = `${book.subject}, ${book.language}`;
    bookTitles.appendChild(additionalInfo);
}); 

bookTitles.appendChild(moreInfoButton);
document.body.appendChild(bookList);

let commentButton =  document.createElement('button');
commentButton.setAttribute('id','cmntbtn')
commentButton.textContent = 'comment/reviews';
commentButton.addEventListener('click', ()=>{
    const addCommentHere = document.createElement('textarea');
    addCommentHere.textContent = "";

//needs a boolean w/280 limit
    addCommentHere.setAttribute('maxlength','280');
//submit button for comment
    let submitButton = document.createElement('button');
    submitButton.textContent = 'submit';
    submitButton.addEventListener ('click', ()=>{
        const clickToSubmit = document.createElement('p');
        clickToSubmit.textContent = addCommentHere.value;
        bookTitles.appendChild(clickToSubmit);
    });
    bookTitles.appendChild(submitButton);

    addCommentHere.addEventListener('input', ()=>{
        if(addCommentHere.value.length <= 280){
            submitButton.disabled = false;
        }else{
        submitButton.disabled = true;
        }
    });
    bookTitles.appendChild(addCommentHere);
});
bookTitles.appendChild(commentButton);
});  

//adding new books to the bookshelf instance
const myBookshelf = new Bookshelf();

let addBookBtn = document.getElementById('addbookbtn');
addBookBtn.addEventListener('click', () =>{
let title = document.getElementById('title').value;
let author = document.getElementById('author').value;
let subject = document.getElementById('subject').value;
let language = document.getElementById('language').value;

let newBook = new Books(title, author, subject, language)
myBookshelf.addBook(newBook) 

let newAddedBook = document.createElement('li')
newAddedBook.textContent = `${newBook.title} written by ${newBook.author}`;
bookList.appendChild(newAddedBook);

let moreInfoButton = document.createElement('button');
moreInfoButton.setAttribute('id','moreinfobtn');
moreInfoButton.textContent = 'subject & language';
moreInfoButton.addEventListener('click', ()=> {
    let newAdditionalInfo = document.createElement('p');
    newAdditionalInfo.textContent = `${newBook.subject}, ${newBook.language}`;
    newAddedBook.appendChild(newAdditionalInfo);
});
newAddedBook.appendChild(moreInfoButton);
});  

function filterBooksByLanguage(language) {
    let filteredBooks = bookData.filter(book => book.language === language);
    bookList.innerHTML = '';
    filteredBooks.forEach(book => {
      const bookTitles = document.createElement('li');
      bookTitles.textContent = `${book.title} written by ${book.author}`;
      bookList.appendChild(bookTitles);
    });
  }
  
  document.getElementById('enbtn').addEventListener('click', () => {
    filterBooksByLanguage('en');
  });
  
  document.getElementById('debtn').addEventListener('click', () => {
    filterBooksByLanguage('de');
  });
  
  document.getElementById('frbtn').addEventListener('click', () => {
    filterBooksByLanguage('fr');
  });
  
  document.getElementById('fibtn').addEventListener('click', () => {
    filterBooksByLanguage('fi');
    return bookTitles;
  });
document.body.appendChild(bookList);
return listOfBooks;
}

bookRender()
