class Bookshelf {
    constructor(books = []) {
        this.books = books;
    }
    addBook(Book) {
        this.books.push(Book)
    }
    // remove and add method works. both have been tested
    removeBook(Book) {
        let index = this.books.findIndex(element => element.title == Book.title)

        this.books.splice(index, 1)
    }

    render() {
        const ul = document.createElement('ul')
        ul.classList.add('list')


        for(let book of this.books){
            ul.appendChild(book.render())
        }

        return ul
    }
}



 // const ul = document.createElement('ul');
        // ul.classList.add('list');
        // for (const Book of this.books) {
        //     ul.append(Book.render());
        // }
        // return ul;



        // ----------Old add function
              // this.addBook = function (Book) {
        //     this.books.push(Book);
        // };
        // this.render = function () {
        //     const ul = document.createElement('ul');
        //     ul.classList.add('list');
        //     for (const Book of this.books) {
        //     ul.append(Book.render());
        //     }
        //     return ul;
        // }
       
