//class constructor for books---adding new books

class Bookshelf{
    constructor(){
        this.books = []
    }
    addbook(book){
        this.books.push(book);
    }
}

// class with book properties
class Books{
    cosntructor(title,author,subject,language){
        this.title = title
        this.author = author
        this.subject = subject
        this.language = language
    }
}

//adding books from the book-data.js file
function getBooks(){
    for( let i=0; i < bookData.length; i++){
        let bookshelves = new Bookshelf()
        bookshelves.addbook(`${bookData[i].title}`),(`${bookData[i].author}`),(`${bookData[i].subject}`),(`${bookData[i].language}`)
        console.log(bookshelves)
    }
}


//render function w/ .map loop method
let listofBooks = bookData.map((book) => {
    const bookTitles = document.createElement('li')
bookTitles.textContent = `${book.title} written by ${book.author}`;
return bookTitles
});

//DOM rendering
function bookRender(){
    //rendering the books in my Books page
    const booklist = document.createElement('ul');
    booklist.replaceChildren(...listofBooks);
    document.body.append(booklist);
}

bookRender()