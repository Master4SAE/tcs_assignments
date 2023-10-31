// TODO: Implement the promptForBook function
function promptForBook() {
    // TODO: Prompt user for book details (title, author, publication year)
    var bookTitle = prompt("Enter title");
    var bookAuthor = prompt("Enter autor");
    var bookPublicationYear = prompt("Enter publication year");
    // TODO: Create an object of type 'Book' with the entered values
    var book = {
        title: bookTitle,
        autor: bookAuthor,
        publicationYear: bookPublicationYear
    };
    return book;
}
// TODO: Call the promptForBook function to get the book details
var bookDetails = promptForBook();
// TODO: Display the details of the book object to the user
console.log("Book Details:");
console.log("Title: ".concat(bookDetails.title));
console.log("Author: ".concat(bookDetails.autor));
console.log("Publication Year: ".concat(bookDetails.publicationYear));
