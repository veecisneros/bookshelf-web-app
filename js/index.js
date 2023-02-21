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


//search bar 
function search_books(){
let input = document.getElementById('searchBar').value
input=input.toLowercase();
let x = document.booklist;

    for ( i= 0; i < x.length; i++) {
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].getElementsByClassName.display="none";
        }
        else{
            x[i].getElementsByClassName.display= booklist;
        }
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
    //spread operator to seperate list from Ul
    booklist.replaceChildren(...listofBooks);        
    document.body.append(booklist);
}

bookRender()
