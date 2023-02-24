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

//filter function to filter by language:

// const lookForEn = document.getElementById('en-btn')
// const lookForDe = document.getElementById('de-btn')
// const lookForFr = document.getElementById('fr-btn')
// const lookForFi = document.getElementById('fi-btn')

// const results = booklist.filter((e)=>{
//     return applyFilter(e,fileters)
// });


// users add new books here
const newBookList = document.createElement('ul');
const myBookshelf =  new Bookshelf();

function addNewBookRender(){
const addBookBtn = document.getElementById('addbookbtn');
addBookBtn.addEventListener('click', () =>{
let title = document.getElementById('title').value;
let author = document.getElementById('author').value;
let subject = document.getElementById('subject').value;
let language = document.getElementById('language').value;

let newBook = new Books(title, author, subject, language)
myBookshelf.addBook(newBook) 


const newAddedBook = document.createElement('li')
newAddedBook.textContent = `${newBook.title} writen by ${newBook.author}`;
newBookList.appendChild(newAddedBook)
document.body.append(newBookList);
});

}
addNewBookRender()

//search bar function

//function w/ .map loop method 
let listofBooks = bookData.map((book) => {
    const bookTitles = document.createElement('li')
    bookTitles.textContent = `${book.title} written by ${book.author}`;


// buttons for more info on book when pressed
const moreInfoButton = document.createElement('button');
moreInfoButton.setAttribute('id','moreinfo-btn');
moreInfoButton.textContent = 'more info';
moreInfoButton.addEventListener('click', ()=> {
    const additionalInfo = document.createElement('p');
    additionalInfo.textContent = `${book.subject}, ${book.language}`;
    bookTitles.appendChild(additionalInfo);
});
bookTitles.appendChild(moreInfoButton);


//like button display w/ event listener
const likeButton = document.createElement('button');
likeButton.setAttribute('id','like-btn');
likeButton.textContent = "❤";
//add event listner if i have time
bookTitles.appendChild(likeButton);

// comment section here
// needs a boolean w/280 limit
// needs and enter button or an enter function in the addeventlistner
const commentButton = document.createElement('button');
commentButton.setAttribute('id', 'comment-btn');
commentButton.textContent = 'comments/reviews';
commentButton.addEventListener ('click',()=>{
    const addCommentsHere = document.createElement('textarea');
    addCommentsHere.textContent = "...";

     addCommentsHere.setAttribute('maxlength', '280');

     const submitButton = document.createElement('button');
    submitButton.textContent = "submit";
    submitButton.setAttribute('id','submit-btn')
    submitButton.addEventListener ('click',()=>{
        const clickToSubmit = document.createElement('p');
        clickToSubmit.textContent = addCommentsHere.value;
        bookTitles.append(clickToSubmit);
    });
    bookTitles.appendChild(submitButton);

       addCommentsHere.addEventListener('input',()=>{
        if (addCommentsHere.value.length <= 280){
            submitButton.disabled = false;
        }else {
            submitButton.disabled = true;
        }
    });
    

    bookTitles.appendChild(addCommentsHere);
       });
       bookTitles.appendChild(commentButton);
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