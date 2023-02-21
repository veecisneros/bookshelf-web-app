function render(){

const library =  document.createElement('h2')
library.textContent = "Welcome to Bookifi";


const about =  document.createElement("p")
about.textContent = "If your a bookworm and love to know more about a book before you pick it up at your local book store or public library this is the place for you! You are welcome to add your own book titles and explore others comments and reviews.";

document.body.append(library);
document.body.append(about);
}
render()