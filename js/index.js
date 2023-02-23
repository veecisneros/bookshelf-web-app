//class constructor for books---adding new books

class Bookshelf{
    constructor(){
        this.books = []
    }
    addBook(book){
        this.books.push(book);
}
}

// class with book properties
class Books{
    constructor(title,author,subject,language){
        this.title = title
        this.author = author
        this.subject = subject
        this.language = language
    }
}

//checking to see if adding books works
// let newBook = new Books('cinderella','disney','fairytales', 'english');
// console.log(newBook)

// users add new books here
const newBookList = document.createElement('ul')
function addNewBookRender(){
const myBookshelf =  new Bookshelf

const addBookBtn = document.getElementById('addbookbtn')

addBookBtn.addEventListener('click', ()=>{
let title = document.getElementById('title').value;
let author = document.getElementById('author').value;
let subject = document.getElementById('subject').value;
let language = document.getElementById('language').value;

let newBook = new Books (title, author, subject, language)
myBookshelf.addBook(newBook) 


const newAddedBook = document.createElement('li')
newAddedBook.textContent = newBook.title,newBook.author;
newBookList.append(newBook)
document.body.append(newAddedBook);
});
}
addNewBookRender()

//search bar function

//render function w/ .map loop method 
let listofBooks = bookData.map((book) => {
const bookTitles = document.createElement('li')
bookTitles.textContent = `${book.title} written by ${book.author}`;



//buttons for more info on book when pressed
const moreInfoButton = document.createElement('button');
moreInfoButton.textContent = 'more info';
moreInfoButton.addEventListener('click', ()=> {
    const additionalInfo = document.createElement('p');
    additionalInfo.textContent = `${book.subject}, ${book.language}`;
    bookTitles.appendChild(additionalInfo);
})
bookTitles.appendChild(moreInfoButton);

//like button display w/ event listner
const likeButton = document.createElement('button');
likeButton.textContent = "❤"
bookTitles.appendChild(likeButton);


// comment section here
// needs a boolean w/280 limit
// needs and enter button or an enter function in the addeventlistner
const commentBtnSetUp = document.createElement('div');
const commentButton = document.createElement('button');
commentButton.textContent = 'comments/reviews';
commentButton.addEventListener('click',()=>{
    const addCommentsHere = document.createElement('textarea');
    addCommentsHere.textContent = '';
    commentBtnSetUp.appendChild(addCommentsHere);
});

commentBtnSetUp.appendChild(commentButton);
bookTitles.appendChild(commentBtnSetUp);

return bookTitles;
});


function bookRender(){
//rendering the books in my Books page
//spread operator to seperate list from Ul
    const booklist = document.createElement('ul');
    booklist.replaceChildren(...listofBooks);        
    document.body.append(booklist);

}

bookRender()

