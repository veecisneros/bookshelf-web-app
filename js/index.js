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
    
    const library =  document.createElement('h2')
    library.textContent = "Welcome to Bookifi";
   
    
    const about =  document.createElement("p")
    about.textContent = "If your a bookworm and love to know more about a book before you pick it up at your local book store or public library this is the place for you! You are welcome to add your own book titles and explore others comments and reviews.";
    
    document.body.append(library);
    document.body.append(about);

    //I actually want this list of books in another page-- not the landing page
    const booklist = document.createElement('ul');
    booklist.replaceChildren(...listofBooks);
    document.body.append(booklist);
}

bookRender()