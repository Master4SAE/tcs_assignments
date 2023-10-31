// TODO: Define a type alias named 'Book' with appropriate properties
type Book = {
    title: string;
    autor: string;
    publicationYear: string;
};

// TODO: Implement the promptForBook function
function promptForBook() {
  // TODO: Prompt user for book details (title, author, publication year)
  const bookTitle = prompt("Enter title") as string;
  const bookAuthor = prompt("Enter autor") as string;
  const bookPublicationYear = prompt("Enter publication year") as string;

  // TODO: Create an object of type 'Book' with the entered values
  const book: Book = {
    title: bookTitle,
    autor: bookAuthor,
    publicationYear: bookPublicationYear
  };
  return book;
}

// TODO: Call the promptForBook function to get the book details
const bookDetails = promptForBook();

// TODO: Display the details of the book object to the user
console.log("Book Details:");
console.log(`Title: ${bookDetails.title}`);
console.log(`Author: ${bookDetails.autor}`);
console.log(`Publication Year: ${bookDetails.publicationYear}`);
