// bookData const already declared

const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]

const newArray = array.filter(callback(element[, index[, array]])[, thisArg])



// function to filter through bookData and return only books of a certain language
const englishFilter = bookData.filter(function(book) {
    return book.language === 'en';
})

const frenchFilter = bookData.filter(function(book) {
    return book.language === 'fr';
})

const finnishFilter = bookData.filter(function(book) {
    return book.language === 'fi';
})

const germanFilter = bookData.filter(function(book) {
    return book.language === 'de';
})


 
