;
;
// Implement instances of the 'Product' type
function createElectronicDevice() {
    // TODO: Prompt user for electronic device details (brand and model)
    var brand = prompt("Give brand");
    var model = prompt("Give model");
    var type = 'electronic';
    // TODO: return object containing brand and model
    return { type: type, brand: brand, model: model };
}
function createBook() {
    // TODO: Prompt user for book details (title and author)
    var title = prompt("Give title");
    var author = prompt("Give author");
    var type = 'book';
    // TODO: return object containing title and author
    return { type: type, title: title, author: author };
}
// Create instances of 'Product'
var electronicProduct = createElectronicDevice();
var bookProduct = createBook();
// Display the details of each product
function displayProductDetails(product) {
    console.log("Product Type: ".concat(product.type));
    if (product.type === 'electronic') {
        console.log("Brand: ".concat(product.brand));
        console.log("Model: ".concat(product.model));
    }
    if (product.type === 'book') {
        console.log("Brand: ".concat(product.title));
        console.log("Model: ".concat(product.author));
    }
}
console.log('Electronic Device Details:');
displayProductDetails(electronicProduct);
console.log();
console.log('Book Details:');
displayProductDetails(bookProduct);
