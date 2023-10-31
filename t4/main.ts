// TODO Define the 'ElectronicDevice' interface (or type)
interface ElectronicDevice {
    type: 'electronic';
    brand: string;
    model: string;
};

// Define the 'Book' interface (or type)
interface Book {
    type: 'book';
    title: string;
    author: string;
};


// Define the 'Product' type alias that can represent either 'ElectronicDevice' or 'Book'
type Product = ElectronicDevice | Book;


// Implement instances of the 'Product' type
function createElectronicDevice(): ElectronicDevice {
  // TODO: Prompt user for electronic device details (brand and model)
  const brand = prompt("Give brand") as string;
  const model = prompt("Give model") as string;
  const type = 'electronic';
  // TODO: return object containing brand and model
  return { type, brand, model};
}

function createBook(): Book {
  // TODO: Prompt user for book details (title and author)
  const title = prompt("Give title") as string;
  const author = prompt("Give author") as string;
  const type = 'book';
  // TODO: return object containing title and author
  return { type, title, author};
}

// Create instances of 'Product'
const electronicProduct = createElectronicDevice();
const bookProduct = createBook();

// Display the details of each product
function displayProductDetails(product: Product) {
  console.log(`Product Type: ${product.type}`);
  if (product.type === 'electronic'){
    console.log(`Brand: ${product.brand}`);
    console.log(`Model: ${product.model}`);
} 
  if (product.type === 'book'){
    console.log(`Brand: ${product.title}`);
    console.log(`Model: ${product.author}`);
} 
}

console.log('Electronic Device Details:');
displayProductDetails(electronicProduct);

console.log();

console.log('Book Details:');
displayProductDetails(bookProduct);
