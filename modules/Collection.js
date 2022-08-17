// eslint-disable-next-line max-classes-per-file
class Collection {
    // eslint-disable-next-line no-unused-vars
    constructor(books) {
      this.books = [];
    }
  
    add(book) {
      this.books.push(book);
    }
  
    remove(book) {
      this.books = this.books.filter((i) => i !== book);
    }
  
    get(index) {
      return this.books[index];
    }
  }
  
export const myCollection = new Collection();